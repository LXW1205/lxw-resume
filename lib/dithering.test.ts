import { describe, it, expect } from "vitest";
import { generateDitheringConfig } from "@/lib/dithering";

describe("generateDitheringConfig", () => {
  it("returns a config object with all required properties", () => {
    const config = generateDitheringConfig();

    expect(config).toHaveProperty("shape");
    expect(config).toHaveProperty("type");
    expect(config).toHaveProperty("pxSize");
    expect(config).toHaveProperty("rotation");
    expect(config).toHaveProperty("scale");
    expect(config).toHaveProperty("lightHue");
    expect(config).toHaveProperty("darkHue");
  });

  it("returns valid shape values", () => {
    const validShapes = ["simplex", "warp", "dots", "wave", "ripple", "swirl", "sphere"];
    const config = generateDitheringConfig();
    expect(validShapes).toContain(config.shape);
  });

  it("returns valid type values", () => {
    const validTypes = ["4x4", "8x8", "2x2", "random"];
    const config = generateDitheringConfig();
    expect(validTypes).toContain(config.type);
  });

  it("returns pxSize between 2 and 5", () => {
    const config = generateDitheringConfig();
    expect(config.pxSize).toBeGreaterThanOrEqual(2);
    expect(config.pxSize).toBeLessThanOrEqual(5);
  });

  it("returns rotation between 0 and 359", () => {
    const config = generateDitheringConfig();
    expect(config.rotation).toBeGreaterThanOrEqual(0);
    expect(config.rotation).toBeLessThanOrEqual(359);
  });

  it("returns scale between 0.6 and 1.1", () => {
    const config = generateDitheringConfig();
    expect(config.scale).toBeGreaterThanOrEqual(0.6);
    expect(config.scale).toBeLessThanOrEqual(1.1);
  });

  it("returns different configs on consecutive calls (randomness)", () => {
    const configs = new Set();
    for (let i = 0; i < 50; i++) {
      configs.add(JSON.stringify(generateDitheringConfig()));
    }
    expect(configs.size).toBeGreaterThan(1);
  });
});
