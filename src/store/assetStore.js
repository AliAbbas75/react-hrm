// src/store/assetStore.js
import { create } from 'zustand'

export const useAssetStore = create((set) => ({
  assets: [],
  selectedAsset: null,

  setAssets: (assets) => set({ assets }),
  addAsset: (asset) => set((state) => ({ assets: [...state.assets, asset] })),
  updateAsset: (updatedAsset) =>
    set((state) => ({
      assets: state.assets.map((a) =>
        a.id === updatedAsset.id ? updatedAsset : a
      ),
    })),
  deleteAsset: (id) =>
    set((state) => ({ assets: state.assets.filter((a) => a.id !== id) })),
  setSelectedAsset: (asset) => set({ selectedAsset: asset }),
}))
