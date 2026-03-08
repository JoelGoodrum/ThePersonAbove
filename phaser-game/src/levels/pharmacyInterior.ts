import type { LevelData } from './types'

export const pharmacyInterior: LevelData = {
  world: {
    width: 800,
    height: 700,
    backgroundColor: 0x000,
  },

  assets: [
    { key: 'pharmacy-interior', path: '/assets/sprites/interiors/pharmacy-interior.png' },
    { key: 'cigarette', path: '/assets/sprites/items/cigarette.png' },
  ],

  // for dev debugging
  spawn: {
    player: { x: 500, y: 550 },
  },

  images: [{ key: 'pharmacy-interior', x: 600, y: 400, scale: 0.78, originX: 0.67, originY: 0.5 }],

  interactables: [
    {
      type: 'collider',
      x: 400,
      y: 270,
      width: 800,
      height: 100,
    },
    {
      type: 'collider',
      x: 100,
      y: 800,
      width: 100,
      height: 800,
    },
    {
      type: 'collider',
      x: 700,
      y: 800,
      width: 100,
      height: 800,
    },
    {
      type: 'door',
      x: 400,
      y: 720,
      width: 200,
      height: 60,
      targetLevel: 'city', // exit back outside
      targetSpawn: { x: 1730, y: 1250, facing: 'down' },
    },
    {
      type: 'item',
      x: 400,
      y: 400,
      width: 50,
      height: 50,
      name: 'cigarette',
    },
  ],
}
