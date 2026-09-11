const menu = document.querySelector<HTMLButtonElement>(".menu-toggle");
const nav = document.querySelector<HTMLElement>("#main-nav");
if (menu && nav) {
  document.documentElement.classList.add("js-nav");
  menu.hidden = false;
  const closeMenu = () => {
    menu.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
  };
  menu.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") !== "true";
    menu.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menu.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu();
      menu.focus();
    }
  });
  nav.addEventListener("click", (event) => {
    if ((event.target as HTMLElement).closest("a")) closeMenu();
  });
  matchMedia("(min-width: 601px)").addEventListener("change", closeMenu);
}

const reduced = matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
const motionButton =
  document.querySelector<HTMLButtonElement>("#motion-toggle");
let paused = false;
try {
  paused = localStorage.getItem("cone-motion") === "paused";
} catch {
  /* The visual preference is optional when storage is unavailable. */
}
const moving = () => !paused && !reduced.matches;
const resetDepth = () =>
  document.querySelectorAll<HTMLElement>("[data-depth]").forEach((el) => {
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  });
const applyMotion = () => {
  document.documentElement.dataset.motion = moving() ? "active" : "paused";
  resetDepth();
  if (motionButton) {
    motionButton.hidden = false;
    motionButton.setAttribute("aria-pressed", String(!moving()));
    motionButton.textContent = reduced.matches
      ? "Reduced motion respected"
      : paused
        ? "Resume atmosphere"
        : "Pause atmosphere";
    motionButton.disabled = reduced.matches;
  }
};
applyMotion();
reduced.addEventListener("change", applyMotion);
finePointer.addEventListener("change", resetDepth);
motionButton?.addEventListener("click", () => {
  paused = !paused;
  try {
    localStorage.setItem("cone-motion", paused ? "paused" : "active");
  } catch {
    /* Keep the preference for this page even without storage. */
  }
  applyMotion();
});

document.querySelectorAll<HTMLElement>("[data-depth]").forEach((el) => {
  let frame = 0;
  let x = 0,
    y = 0,
    currentX = 0,
    currentY = 0;
  const draw = () => {
    if (!moving() || !finePointer.matches) {
      frame = 0;
      return;
    }
    currentX += (x - currentX) * 0.12;
    currentY += (y - currentY) * 0.12;
    el.style.setProperty("--rx", `${-currentY * 4}deg`);
    el.style.setProperty("--ry", `${currentX * 6}deg`);
    el.style.setProperty("--light-x", `${50 + currentX * 35}%`);
    el.style.setProperty("--light-y", `${50 + currentY * 35}%`);
    frame =
      Math.abs(x - currentX) + Math.abs(y - currentY) > 0.002
        ? requestAnimationFrame(draw)
        : 0;
  };
  el.addEventListener("pointermove", (event) => {
    if (!moving() || !finePointer.matches) return;
    const box = el.getBoundingClientRect();
    x = ((event.clientX - box.left) / box.width - 0.5) * 2;
    y = ((event.clientY - box.top) / box.height - 0.5) * 2;
    if (!frame) frame = requestAnimationFrame(draw);
  });
  el.addEventListener("pointerleave", () => {
    x = y = 0;
    if (!frame && moving()) frame = requestAnimationFrame(draw);
  });
});

const hero = document.querySelector<HTMLElement>("[data-hero]");
if (hero) {
  let scheduled = false;
  let visible = true;
  const updateHero = () => {
    hero.style.setProperty(
      "--hero-shift",
      `${Math.min(window.scrollY * 0.12, 80)}px`,
    );
  };
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible && moving() && finePointer.matches) updateHero();
  }).observe(hero);
  window.addEventListener(
    "scroll",
    () => {
      if (scheduled || !visible || !moving() || !finePointer.matches) return;
      scheduled = true;
      requestAnimationFrame(() => {
        updateHero();
        scheduled = false;
      });
    },
    { passive: true },
  );
}

const observations: Record<string, string> = {
  object:
    "A familiar shape. Extraordinary attention. A ceremonial view of the Cone.",
  order:
    "The Little Order tends the shrine. Devotion is mostly an act of care.",
  unknown:
    "Origin, purpose, and jurisdiction remain unrecorded. The archive is still open.",
};
document
  .querySelectorAll<HTMLButtonElement>("[data-observation]")
  .forEach((button) =>
    button.addEventListener("click", () => {
      const id = button.dataset.observation!;
      if (!(id in observations)) return;
      document.querySelectorAll("[data-observation]").forEach((el) => {
        if (el instanceof HTMLButtonElement)
          el.setAttribute("aria-pressed", String(el === button));
      });
      const section = document.querySelector<HTMLElement>(".cone-section");
      const output = document.querySelector("#observation-text");
      if (section) section.dataset.observation = id;
      if (output) output.textContent = observations[id];
    }),
  );
