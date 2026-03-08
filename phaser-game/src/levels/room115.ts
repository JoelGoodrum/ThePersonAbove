import type { LevelData } from './types'

export const room115: LevelData = {
  world: {
    width: 800,
    height: 680,
    backgroundColor: 0x000,
  },

  assets: [{ key: 'room115', path: '/assets/sprites/interiors/room115.png' }],

  spawn: {
    player: { x: 500, y: 550 },
  },

  images: [{ key: 'room115', x: 600, y: 400, scale: 0.68, originX: 0.69, originY: 0.5 }],

  levelStartingDialog: {
    id: 'dialogSeen:room115',
    lines: [
      'I know Lyla, we play online games together. But I have never actually seen her...',
      'There might be something in her apartment that can help. She lives in apartment 101.',
      'And the code is 7x11. That is because she likes 7-Eleven, get it?',
    ],
    repeat: true,
  },

  interactables: [
    {
      type: 'collider',
      x: 400,
      y: 270,
      width: 800,
      height: 100,
    },
    {
      type: 'door',
      x: 400,
      y: 720,
      width: 100,
      height: 60,
      targetLevel: 'loftHall', // exit back outside
      targetSpawn: { x: 930, y: 480, facing: 'down' },
    },
  ],
}
