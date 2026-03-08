import type { LevelData } from './types'

export const barInterior: LevelData = {
  world: {
    width: 800,
    height: 610,
    backgroundColor: 0x000,
  },

  spawn: {
    player: { x: 500, y: 550 },
  },

  assets: [{ key: 'bar-interior', path: '/assets/sprites/interiors/bar-interior.png' }],

  images: [{ key: 'bar-interior', x: 400, y: 400, scale: 0.7, originX: 0.5, originY: 0.5 }],

  levelStartingDialog: {
    id: 'dialogSeen:bar',
    lines: [
      'That is a very strange message you have.',
      'Could that be the CEOs daughter?',
      'No way...',
    ],
    repeat: true,
  },

  interactables: [
    {
      type: 'collider',
      x: 400,
      y: 210,
      width: 800,
      height: 100,
    },
    {
      type: 'collider',
      x: 420,
      y: 300,
      width: 450,
      height: 100,
    },
    {
      type: 'door',
      x: 400,
      y: 620,
      width: 200,
      height: 60,
      targetLevel: 'city', // exit back outside
      targetSpawn: { x: 330, y: 1250, facing: 'down' },
    },
  ],
}
