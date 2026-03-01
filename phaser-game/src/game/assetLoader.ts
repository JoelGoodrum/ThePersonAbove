import Phaser from 'phaser'
import { loadImages, type ImageAsset } from './loadAssets'

export function loadAll(scene: Phaser.Scene, assets: readonly ImageAsset[]) {
  loadImages(scene.load, assets)
}

export function missingTextures(scene: Phaser.Scene, assets: readonly ImageAsset[]) {
  return assets.filter((a) => !scene.textures.exists(a.key))
}

export function loadMissingAndThen(
  scene: Phaser.Scene,
  assets: readonly ImageAsset[],
  onDone: () => void
) {
  const missing = missingTextures(scene, assets)
  if (missing.length === 0) {
    onDone()
    return
  }

  loadImages(scene.load, missing)
  scene.load.once(Phaser.Loader.Events.COMPLETE, onDone)
  scene.load.start()
}
