export { default as Photos } from '../../components/Photos.vue'
export { default as Tile } from '../../components/Tile.vue'

export const LazyPhotos = import('../../components/Photos.vue' /* webpackChunkName: "components/Photos" */).then(c => c.default || c)
export const LazyTile = import('../../components/Tile.vue' /* webpackChunkName: "components/Tile" */).then(c => c.default || c)
