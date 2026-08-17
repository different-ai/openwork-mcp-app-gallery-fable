/**
 * Generate a minimal CycloneDX 1.5 SBOM for the production dependency
 * closure, using pnpm's own license/dependency inventory (no network).
 */
import { execFileSync } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const packageJson = JSON.parse(
  await readFile(path.join(root, "package.json"), "utf8"),
);

// Resolve the running pnpm (works under corepack shims and CI alike).
const pnpmEntry = process.env.npm_execpath;
const command = pnpmEntry ? process.execPath : "pnpm";
const baseArgs = pnpmEntry ? [pnpmEntry] : [];

const raw = execFileSync(
  command,
  [...baseArgs, "licenses", "list", "--prod", "--json"],
  { cwd: root, encoding: "utf8" },
);
const licenses = JSON.parse(raw);

const components = [];
for (const [licenseId, packages] of Object.entries(licenses)) {
  for (const entry of packages) {
    for (const version of entry.versions ?? []) {
      components.push({
        type: "library",
        name: entry.name,
        version,
        licenses: [{ license: { id: licenseId } }],
        purl: `pkg:npm/${entry.name.replace("@", "%40")}@${version}`,
      });
    }
  }
}
components.sort(
  (a, b) => a.name.localeCompare(b.name) || a.version.localeCompare(b.version),
);

const sbom = {
  bomFormat: "CycloneDX",
  specVersion: "1.5",
  version: 1,
  metadata: {
    timestamp: new Date().toISOString(),
    component: {
      type: "application",
      name: packageJson.name,
      version: packageJson.version,
    },
  },
  components,
};

await mkdir(path.join(root, "generated"), { recursive: true });
await writeFile(
  path.join(root, "generated", "sbom.cdx.json"),
  `${JSON.stringify(sbom, null, 2)}\n`,
);
console.log(`SBOM generated with ${sbom.components.length} components`);
