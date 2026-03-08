import type { LevelData } from './types'

export const towerHall: LevelData = {
  world: {
    width: 1080,
    height: 550,
    backgroundColor: 0x000,
  },
  spawn: {
    player: { x: 200, y: 500 },
  },

  assets: [{ key: 'tower-hall', path: '/assets/sprites/interiors/tower-hall.png' }],

  images: [{ key: 'tower-hall', x: 600, y: 400, scale: 0.72, originX: 0.558, originY: 0.5 }],

  interactables: [
    {
      type: 'door',
      x: 240,
      y: 400,
      width: 64,
      height: 60,
      targetLevel: 'lab', // exit back outside
      targetSpawn: { x: 400, y: 650, facing: 'up' },
    },
    {
      type: 'door',
      x: 530,
      y: 400,
      width: 100,
      height: 60,
      targetLevel: 'towerLobby', // exit back outside
      targetSpawn: { x: 400, y: 400, facing: 'down' },
    },
    {
      type: 'door',
      x: 840,
      y: 400,
      width: 100,
      height: 60,
      targetLevel: 'closet', // exit back outside
      targetSpawn: { x: 400, y: 600, facing: 'up' },
    },
    {
      type: 'collider',
      x: 600,
      y: 390,
      width: 1200,
      height: 26,
    },
  ],
}
