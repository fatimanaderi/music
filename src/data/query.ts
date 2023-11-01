import country from "./country.json";
import quality from "./quality.json";
import years from "./year";

export interface QueryItem {
  initialData: { name: string }[];
  name: string;
  query: {
    endpoint: string;
    listname: string;
  };
}
export const queries: QueryItem[] = [
  {
    initialData: [],
    name: "instrument",
    query: {
      endpoint: "/instrument",
      listname: "instruments",
    },
  },
  {
    initialData: [],
    name: "label",
    query: {
      endpoint: "/label",
      listname: "labels",
    },
  },
  {
    initialData: [],
    name: "area",
    query: {
      endpoint: "/area",
      listname: "areas",
    },
  },
  {
    initialData: country,
    name: "country",
    query: {
      endpoint: "",
      listname: "",
    }
  },
  {
    initialData: quality,
    name: "quality",
    query: {
      endpoint: "",
      listname: "",
    }
  },
  {
    initialData: years,
    name: "year",
    query: {
      endpoint: "",
      listname: "",
    }
  },
];
