declare module "canvas-confetti" {
  interface ConfettiOptions {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    gravity?: number;
    scalar?: number;
    drift?: number;
    ticks?: number;
    origin?: {
      x?: number;
      y?: number;
    };
    colors?: string[];
    shapes?: string[];
    disableForReducedMotion?: boolean;
    [key: string]: unknown;
  }

  function confetti(options?: ConfettiOptions): void;
  export default confetti;
}
