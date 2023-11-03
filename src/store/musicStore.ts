import { create } from "zustand";

export interface MusicQuery {
  [x: string]: string;
}

interface MusicQueryStore {
  musicQuery: MusicQuery;
  setSearchText: (searchText: string) => void;
  setGenreName: (genreName: string) => void;
  setQuerySelector: (querySelector: string, queryName: string) => void;
}

const useMusicQueryStore = create<MusicQueryStore>((set) => ({
  musicQuery: {},
  setSearchText: (searchText) =>
    set(() => ({ musicQuery: { title: searchText } })),
  setGenreName: (genreName) => set(() => ({ musicQuery: { tag: genreName } })),
  setQuerySelector: (querySelector, queryName) =>
    set(() => ({ musicQuery: { [queryName]: querySelector } })),
}));
export default useMusicQueryStore;
