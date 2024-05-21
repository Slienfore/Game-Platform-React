import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { genreId, ...store.gameQuery } })),

  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { platformId, ...store.gameQuery } })),

  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { sortOrder, ...store.gameQuery } })),

  // 搜索内容时候, 其它重置
  setSearchText: (searchText) => set({ gameQuery: { searchText } }),
}));

export default useGameQueryStore;
