import { create } from "zustand";

interface MusicQuery {
  instrument: string;
  tag: string;
  label: string;
  area: string;
  country: string;
  quality: string;
  year: string;
  title: string;
  [x: string]: string;
}

interface MusicQueryStore {
  musicQuery: MusicQuery;
  setSearchText: (searchText: string) => void;
  setGenreName: (genreName: string) => void;
  setQuerySelector: (querySelector: string, queryName: string) => void;
}

create<MusicQueryStore>((set) => ({
  musicQuery: {
    instrument: "",
    tag: "",
    label: "",
    area: "",
    country: "",
    quality: "",
    year: "",
    title: "",
  },
  setSearchText: (searchText) =>
    set((store) => ({ ...store, title: searchText })),
  setGenreName: (genreName) => set((store) => ({ ...store, tag: genreName })),
  setQuerySelector: (querySelector, queryName) =>
    set((store) => ({ ...store, [queryName]: querySelector })),
}));
