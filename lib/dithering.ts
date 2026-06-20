const SHAPES = ["simplex", "warp", "dots", "wave", "ripple", "swirl", "sphere"] as const
const TYPES = ["4x4", "8x8", "2x2", "random"] as const
const PX_SIZES = [2, 3, 4, 5]
const LIGHT_HUES = [220, 240, 280, 300, 320, 20, 40, 60]
const DARK_HUES = [280, 300, 320, 340, 20, 40, 120, 200]

export type DitheringShape = (typeof SHAPES)[number]
export type DitheringType = (typeof TYPES)[number]

export interface DitheringConfig {
  shape: DitheringShape
  type: DitheringType
  pxSize: number
  rotation: number
  scale: number
  lightHue: number
  darkHue: number
}

export function generateDitheringConfig(): DitheringConfig {
  return {
    shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    type: TYPES[Math.floor(Math.random() * TYPES.length)],
    pxSize: PX_SIZES[Math.floor(Math.random() * PX_SIZES.length)],
    rotation: Math.floor(Math.random() * 360),
    scale: parseFloat((Math.random() * 0.5 + 0.6).toFixed(2)),
    lightHue: LIGHT_HUES[Math.floor(Math.random() * LIGHT_HUES.length)],
    darkHue: DARK_HUES[Math.floor(Math.random() * DARK_HUES.length)],
  }
}
