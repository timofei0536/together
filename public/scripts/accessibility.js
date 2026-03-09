// Basic accessibility helpers: focus outlines toggle and role="button" keyboard support

(function () {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const BODY_ACCESS_CLASS = "body--accessibility";

  function handleFirstTab(e) {
    if (e.key !== "Tab") return;
    const body = document.body;
    if (body && !body.classList.contains(BODY_ACCESS_CLASS)) {
      body.classList.add(BODY_ACCESS_CLASS);
    }
  }

  function handleMouseDown() {
    const body = document.body;
    if (body && body.classList.contains(BODY_ACCESS_CLASS)) {
      body.classList.remove(BODY_ACCESS_CLASS);
    }
  }

  function initRoleButtonSupport(root = document) {
    const buttons = root.querySelectorAll('[role="button"]');
    if (!buttons.length) return;

    buttons.forEach((btn) => {
      btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          btn.click();
        }
      });
    });
  }

  function ensureSkipLink() {
    // If skip-link already exists, do nothing
    if (document.querySelector(".skip-link")) return;

    const main = document.querySelector("main#skip") || document.querySelector("main");

    const link = document.createElement("a");
    link.className = "skip-link";
    link.href = main ? "#skip" : "#main";
    link.textContent = "↳ Skip to main content";

    // If there is no <main id="skip">, ensure there is some target
    if (!main) {
      const fallbackMain = document.createElement("main");
      fallbackMain.id = "main";
      // Do not move existing content here – this is just a safety net.
      document.body.appendChild(fallbackMain);
    }

    if (document.body.firstChild) {
      document.body.insertBefore(link, document.body.firstChild);
    } else {
      document.body.appendChild(link);
    }
  }

  function initAccessibility() {
    document.addEventListener("keydown", handleFirstTab, { passive: true });
    document.addEventListener("mousedown", handleMouseDown, { passive: true });
    initRoleButtonSupport(document);
    ensureSkipLink();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAccessibility);
  } else {
    initAccessibility();
  }
})();

