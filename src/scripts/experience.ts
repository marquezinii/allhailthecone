const menu = document.querySelector<HTMLButtonElement>(".menu-toggle");
const nav = document.querySelector<HTMLElement>("#main-nav");
const languageSwitch =
  document.querySelector<HTMLDetailsElement>(".language-switch");
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
    if (event.key !== "Escape") return;
    if (languageSwitch?.open) {
      event.preventDefault();
      languageSwitch.open = false;
      languageSwitch.querySelector("summary")?.focus();
    } else if (menu.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menu.focus();
    }
  });
  nav.addEventListener("click", (event) => {
    if ((event.target as HTMLElement).closest("a")) closeMenu();
  });
  matchMedia("(min-width: 601px)").addEventListener("change", closeMenu);
}

if (languageSwitch) {
  document.addEventListener("pointerdown", (event) => {
    if (languageSwitch.open && !languageSwitch.contains(event.target as Node))
      languageSwitch.open = false;
  });
}

const reduced = matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
const motionButton =
  document.querySelector<HTMLButtonElement>("#motion-toggle");
const locale = document.documentElement.dataset.locale ?? "en";
const motionCopy: Record<string, readonly [string, string, string]> = {
  en: ["Reduced motion respected", "Resume atmosphere", "Pause atmosphere"],
  pt: [
    "Preferência de movimento reduzido respeitada",
    "Retomar atmosfera",
    "Pausar atmosfera",
  ],
  zh: ["已遵循减少动态效果设置", "恢复氛围动画", "暂停氛围动画"],
  de: [
    "Reduzierte Bewegung wird berücksichtigt",
    "Atmosphäre fortsetzen",
    "Atmosphäre pausieren",
  ],
  fr: [
    "Préférence de mouvement réduit respectée",
    "Reprendre l’atmosphère",
    "Suspendre l’atmosphère",
  ],
};
const motionLabels = motionCopy[locale] ?? motionCopy.en!;
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
      ? motionLabels[0]
      : paused
        ? motionLabels[1]
        : motionLabels[2];
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
    visible = entry?.isIntersecting ?? false;
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

  let pointerFrame = 0;
  let pointerX = 0;
  let pointerY = 0;
  const updateHeroPointer = () => {
    hero.style.setProperty("--hero-x", `${pointerX * 14}px`);
    hero.style.setProperty("--hero-y", `${pointerY * 10}px`);
    hero.style.setProperty("--signal-x", `${50 + pointerX * 16}%`);
    hero.style.setProperty("--signal-y", `${45 + pointerY * 12}%`);
    pointerFrame = 0;
  };
  hero.addEventListener("pointermove", (event) => {
    if (!moving() || !finePointer.matches) return;
    const box = hero.getBoundingClientRect();
    pointerX = (event.clientX - box.left) / box.width - 0.5;
    pointerY = (event.clientY - box.top) / box.height - 0.5;
    if (!pointerFrame) pointerFrame = requestAnimationFrame(updateHeroPointer);
  });
  hero.addEventListener("pointerleave", () => {
    pointerX = pointerY = 0;
    if (!pointerFrame && moving())
      pointerFrame = requestAnimationFrame(updateHeroPointer);
  });
}

const homeExperience = document.querySelector<HTMLElement>(
  "[data-home-experience]",
);
if (homeExperience) {
  let disposed = false;
  let revert: (() => void) | undefined;
  const cinematicCapable = () =>
    moving() && finePointer.matches && innerWidth > 760;

  const mountChoreography = () => {
    if (disposed || !cinematicCapable() || revert) return;
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")])
      .then(([gsapModule, triggerModule]) => {
        if (disposed || !cinematicCapable() || revert) return;
        const gsap = gsapModule.gsap;
        const ScrollTrigger = triggerModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
        const context = gsap.context(() => {
          const heroParts =
            homeExperience.querySelectorAll("[data-hero-reveal]");
          gsap.fromTo(
            heroParts,
            { autoAlpha: 0, y: 26 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.09,
              ease: "power3.out",
              delay: 0.12,
            },
          );

          gsap.utils
            .toArray<HTMLElement>("[data-cinematic]")
            .forEach((section) => {
              const art = section.querySelector<HTMLElement>(
                "[data-cinematic-art]",
              );
              const copy = section.querySelector<HTMLElement>(
                "[data-cinematic-copy]",
              );
              if (art) {
                gsap.fromTo(
                  art,
                  { scale: 1.11, yPercent: -4 },
                  {
                    scale: 1.01,
                    yPercent: 4,
                    ease: "none",
                    scrollTrigger: {
                      trigger: section,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 0.7,
                    },
                  },
                );
              }
              if (copy) {
                gsap.fromTo(
                  copy,
                  { autoAlpha: 0, y: 30 },
                  {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                      trigger: section,
                      start: "top 72%",
                      toggleActions: "play none none reverse",
                    },
                  },
                );
              }
            });
        });
        revert = () => context.revert();
      })
      .catch(() => {
        /* The archive stays complete when optional cinematic motion is unavailable. */
      });
  };

  const syncChoreography = () => {
    if (cinematicCapable()) mountChoreography();
    else {
      revert?.();
      revert = undefined;
    }
  };
  const motionObserver = new MutationObserver(syncChoreography);
  motionObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-motion"],
  });
  finePointer.addEventListener("change", syncChoreography);
  addEventListener("resize", syncChoreography, { passive: true });
  window.setTimeout(syncChoreography, 120);
  addEventListener(
    "pagehide",
    () => {
      disposed = true;
      motionObserver.disconnect();
      finePointer.removeEventListener("change", syncChoreography);
      removeEventListener("resize", syncChoreography);
      revert?.();
    },
    { once: true },
  );
}

const observationSets: Record<string, readonly [string, string, string]> = {
  en: [
    "A familiar shape. Extraordinary attention. A ceremonial view of the Cone.",
    "The Keepers tend The Sanctuary. Whether this is faith or protocol remains unresolved.",
    "Origin, purpose, and the sender of the signal remain unrecorded. The archive is still open.",
  ],
  pt: [
    "Uma forma familiar. Atenção extraordinária. Uma visão cerimonial do Cone.",
    "Os Keepers cuidam do Sanctuary. Se isso é fé ou protocolo continua sem resposta.",
    "A origem, o propósito e quem envia o sinal permanecem sem registro. O arquivo continua aberto.",
  ],
  zh: [
    "熟悉的形状，非凡的关注。这是交通锥的仪式性视图。",
    "Keepers 照料着 Sanctuary。那究竟是信仰还是协议，仍无定论。",
    "起源、目的以及信号发送者均未记录。档案仍然开放。",
  ],
  de: [
    "Eine vertraute Form. Außergewöhnliche Aufmerksamkeit. Eine zeremonielle Ansicht des Kegels.",
    "Die Keepers pflegen The Sanctuary. Ob dies Glaube oder Protokoll ist, bleibt offen.",
    "Ursprung, Zweck und Absender des Signals sind nicht verzeichnet. Das Archiv bleibt offen.",
  ],
  fr: [
    "Une forme familière. Une attention extraordinaire. Une vue cérémonielle du Cône.",
    "Les Keepers entretiennent The Sanctuary. Foi ou protocole : la question reste ouverte.",
    "L’origine, le but et l’émetteur du signal restent inconnus. Les archives demeurent ouvertes.",
  ],
};
const observationList = observationSets[locale] ?? observationSets.en!;
const observations: Record<string, string> = {
  object: observationList[0],
  order: observationList[1],
  unknown: observationList[2],
};
document
  .querySelectorAll<HTMLButtonElement>("[data-observation]")
  .forEach((button) =>
    button.addEventListener("click", () => {
      const id = button.dataset.observation;
      if (!id) return;
      const observation = observations[id];
      if (!observation) return;
      document.querySelectorAll("[data-observation]").forEach((el) => {
        if (el instanceof HTMLButtonElement)
          el.setAttribute("aria-pressed", String(el === button));
      });
      const section = document.querySelector<HTMLElement>(".cone-section");
      const output = document.querySelector("#observation-text");
      if (section) section.dataset.observation = id;
      if (output) output.textContent = observation;
    }),
  );
