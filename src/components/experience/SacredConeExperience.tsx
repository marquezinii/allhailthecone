import {
  Component,
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const SacredConeCanvas = lazy(() => import("./SacredConeCanvas"));

interface BoundaryProps {
  children: ReactNode;
  onError: () => void;
}

interface BoundaryState {
  failed: boolean;
}

class CanvasBoundary extends Component<BoundaryProps, BoundaryState> {
  state: BoundaryState = { failed: false };

  static getDerivedStateFromError(): BoundaryState {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default function SacredConeExperience() {
  const root = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const [capable, setCapable] = useState(false);
  const [active, setActive] = useState(false);
  const [lowFidelity, setLowFidelity] = useState(false);
  const [ready, setReady] = useState(false);
  const markReady = useCallback(() => setReady(true), []);
  const markFailed = useCallback(() => setReady(false), []);

  useEffect(() => {
    const node = root.current;
    if (!node) return;

    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = matchMedia("(min-width: 761px)");
    const device = navigator as Navigator & { deviceMemory?: number };
    const memory = device.deviceMemory ?? 8;
    const cores = navigator.hardwareConcurrency ?? 8;
    const canvas = document.createElement("canvas");
    const hasWebGL = Boolean(
      canvas.getContext("webgl2") ?? canvas.getContext("webgl"),
    );
    let visible = false;
    const sync = () => {
      const canRender =
        hasWebGL &&
        !reduced.matches &&
        desktop.matches &&
        memory >= 3 &&
        cores >= 4;
      const motionEnabled =
        !reduced.matches &&
        document.documentElement.dataset.motion !== "paused";
      setCapable(canRender);
      setLowFidelity(innerWidth < 980 || memory < 6 || cores < 6);
      setActive(canRender && visible && motionEnabled);
      if (!canRender) setReady(false);
    };
    const intersection = new IntersectionObserver(
      ([entry]) => {
        visible = entry?.isIntersecting ?? false;
        sync();
      },
      { rootMargin: "120px" },
    );
    const motionObserver = new MutationObserver(sync);

    intersection.observe(node);
    motionObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-motion"],
    });
    reduced.addEventListener("change", sync);
    desktop.addEventListener("change", sync);
    sync();

    return () => {
      intersection.disconnect();
      motionObserver.disconnect();
      reduced.removeEventListener("change", sync);
      desktop.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!capable) return;
    let cancelled = false;
    let dispose: (() => void) | undefined;

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")])
      .then(([gsapModule, triggerModule]) => {
        if (cancelled) return;
        const gsap = gsapModule.gsap;
        const ScrollTrigger = triggerModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
        const tween = gsap.to(progress, {
          current: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "#the-cone",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
        dispose = () => tween.kill();
      })
      .catch(() => {
        // The scene remains interactive if optional scroll choreography fails.
      });

    return () => {
      cancelled = true;
      dispose?.();
    };
  }, [capable]);

  useEffect(() => {
    const relic = root.current?.closest(".relic");
    if (!relic) return;
    relic.classList.toggle("webgl-ready", ready);
    return () => relic.classList.remove("webgl-ready");
  }, [ready]);

  return (
    <div ref={root} className="sacred-canvas" aria-hidden="true">
      {capable && (
        <CanvasBoundary onError={markFailed}>
          <Suspense fallback={null}>
            <SacredConeCanvas
              active={active}
              lowFidelity={lowFidelity}
              progress={progress}
              onReady={markReady}
            />
          </Suspense>
        </CanvasBoundary>
      )}
    </div>
  );
}
