import type { LevelData } from './types'

export const towerLobby: LevelData = {
  world: {
    width: 800,
    height: 610,
    backgroundColor: 0x000,
  },

  assets: [{ key: 'tower-lobby', path: '/assets/sprites/interiors/tower-lobby.png' }],

  images: [{ key: 'tower-lobby', x: 600, y: 400, scale: 0.6, originX: 0.72, originY: 0.5 }],

  spawn: {
    player: { x: 500, y: 550 },
  },

  interactables: [
    {
      type: 'collider',
      x: 400,
      y: 310,
      width: 800,
      height: 100,
    },
    {
      type: 'door',
      x: 400,
      y: 650,
      width: 200,
      height: 60,
      targetLevel: 'city', // exit back outside
      targetSpawn: { x: 1100, y: 800, facing: 'down' },
    },
    {
      type: 'door',
      x: 400,
      y: 320,
      width: 100,
      height: 60,
      targetLevel: 'towerHall', // exit back outside
      targetSpawn: { x: 550, y: 450, facing: 'down' },
    },
  ],
}
