(() => {
  "use strict";

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav scroll state
  const nav = document.getElementById("nav");
  const onScroll = () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const navMobile = document.getElementById("navMobile");
  navToggle.addEventListener("click", () => {
    const isOpen = navMobile.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  navMobile.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navMobile.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );

  // Scroll-reveal — IntersectionObserver is the primary driver, but it can
  // be throttled on backgrounded/inactive tabs, so a scroll/resize fallback
  // guarantees content never gets stuck invisible.
  const revealEls = document.querySelectorAll(".reveal");
  const isInViewport = (el) => {
    const r = el.getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > 0;
  };
  const revealVisible = () => {
    revealEls.forEach((el) => {
      if (!el.classList.contains("is-visible") && isInViewport(el)) {
        el.classList.add("is-visible");
      }
    });
  };

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  revealVisible();
  window.addEventListener("scroll", revealVisible, { passive: true });
  window.addEventListener("resize", revealVisible);

  // Floating WhatsApp chat widget
  const wa = document.getElementById("wa");
  const waFab = document.getElementById("waFab");
  const waPop = document.getElementById("waPop");
  const waClose = document.getElementById("waClose");
  const waCta = document.getElementById("waCta");
  if (wa && waFab && waPop) {
    const setOpen = (open) => {
      wa.classList.toggle("is-open", open);
      waFab.setAttribute("aria-expanded", String(open));
      waPop.setAttribute("aria-hidden", String(!open));
    };
    waFab.addEventListener("click", () => setOpen(!wa.classList.contains("is-open")));
    if (waClose) {
      waClose.addEventListener("click", () => {
        setOpen(false);
        try { sessionStorage.setItem("waDismissed", "1"); } catch (e) {}
      });
    }
    if (waCta) waCta.addEventListener("click", () => setOpen(false));
    // Close on Escape or outside click
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
    document.addEventListener("click", (e) => {
      if (wa.classList.contains("is-open") && !wa.contains(e.target)) setOpen(false);
    });
    // Auto-open once per session as a gentle nudge
    let dismissed = false;
    try { dismissed = sessionStorage.getItem("waDismissed") === "1"; } catch (e) {}
    if (!dismissed) {
      setTimeout(() => {
        if (!wa.classList.contains("is-open")) setOpen(true);
        try { sessionStorage.setItem("waDismissed", "1"); } catch (e) {}
      }, 6000);
    }
  }

  // Notify form (static site — no backend wired up yet)
  const form = document.getElementById("notifyForm");
  const note = document.getElementById("formNote");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.email.value.trim();
      if (!email) return;
      note.textContent = `Thanks — we'll email ${email} the moment purejuicery launches.`;
      form.reset();
    });
  }
})();
