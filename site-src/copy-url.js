// Copy MCP URL buttons with accessible success and failure feedback.
// No cookies, no analytics, no network calls.
(function initCopyButtons() {
  var RESET_MS = 2500;

  function setStatus(status, message, ok) {
    status.textContent = message;
    status.classList.toggle("ok", ok);
    status.classList.toggle("err", !ok);
    window.setTimeout(function reset() {
      status.textContent = "";
      status.classList.remove("ok", "err");
    }, RESET_MS);
  }

  function fallbackCopy(text) {
    var area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "absolute";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    var copied = false;
    try {
      copied = document.execCommand("copy");
    } catch (error) {
      copied = false;
    }
    document.body.removeChild(area);
    return copied;
  }

  Array.prototype.forEach.call(
    document.querySelectorAll(".copy-button"),
    function bind(button) {
      button.addEventListener("click", function onClick() {
        var text = button.getAttribute("data-copy") || "";
        var status = button.parentElement.querySelector(".copy-status");
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(
            function onOk() {
              setStatus(status, "Copied ✓", true);
            },
            function onErr() {
              if (fallbackCopy(text)) {
                setStatus(status, "Copied ✓", true);
              } else {
                setStatus(
                  status,
                  "Copy failed — select the URL text manually.",
                  false,
                );
              }
            },
          );
        } else if (fallbackCopy(text)) {
          setStatus(status, "Copied ✓", true);
        } else {
          setStatus(
            status,
            "Copy failed — select the URL text manually.",
            false,
          );
        }
      });
    },
  );
})();
