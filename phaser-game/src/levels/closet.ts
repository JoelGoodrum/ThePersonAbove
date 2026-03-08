import type { LevelData } from './types'

export const closet: LevelData = {
  world: {
    width: 800,
    height: 660,
    backgroundColor: 0x000,
  },

  assets: [
    { key: 'closet', path: '/assets/sprites/interiors/closet.png' },
    { key: 'clothes', path: '/assets/sprites/items/coat.png' },
  ],

  images: [{ key: 'closet', x: 600, y: 400, scale: 0.6, originX: 0.72, originY: 0.5 }],

  interactables: [
    {
      type: 'collider',
      x: 400,
      y: 280,
      width: 800,
      height: 100,
    },
    {
      type: 'door',
      x: 390,
      y: 700,
      width: 250,
      height: 60,
      targetLevel: 'towerHall', // exit back outside
      targetSpawn: { x: 700, y: 500, facing: 'down' },
    },
    {
      type: 'item',
      x: 400,
      y: 400,
      width: 100,
      height: 100,
      name: 'clothes',
    },
  ],
}
