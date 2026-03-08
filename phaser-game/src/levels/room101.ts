import type { LevelData } from './types'

export const room101: LevelData = {
  world: {
    width: 800,
    height: 650,
    backgroundColor: 0x000,
  },

  assets: [
    { key: 'room101', path: '/assets/sprites/interiors/room101.png' },
    { key: 'keyCard', path: '/assets/sprites/items/keyCard.png' },
  ],

  spawn: {
    player: { x: 500, y: 550 },
  },

  images: [{ key: 'room101', x: 600, y: 400, scale: 0.6, originX: 0.72, originY: 0.5 }],

  levelStartingDialog: {
    id: 'dialogSeen:room101',
    lines: ['It is strange how he knows her apartment code but has never seen her...'],
    repeat: false,
  },

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
      x: 400,
      y: 650,
      width: 200,
      height: 60,
      targetLevel: 'loftHall', // exit back outside
      targetSpawn: { x: 190, y: 480, facing: 'down' },
    },
    {
      type: 'item',
      x: 650,
      y: 500,
      width: 1,
      height: 1,
      name: 'keyCard',
    },
  ],
}
