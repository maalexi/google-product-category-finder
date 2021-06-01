import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import { SearchResult } from "../@types";
import data from "../data/data.json";

const fuse = new Fuse(data, {
  keys: [
    {
      name: "level1",
      weight: 1,
    },
    {
      name: "level2",
      weight: 2,
    },
    {
      name: "level3",
      weight: 3,
    },
    {
      name: "level4",
      weight: 4,
    },
    {
      name: "level5",
      weight: 5,
    },
    {
      name: "level6",
      weight: 6,
    },
  ],
  threshold: 0.4,
  ignoreLocation: true,
});

export const useCategorySearch = (term: string, DEFAULT_LIMIT = 10) => {
  const [results, setResults] = useState<SearchResult>([]);
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  useEffect(() => {
    setLimit(DEFAULT_LIMIT);
    const data: SearchResult = fuse.search(term);
    setResults(data);
  }, [term]);

  return results.slice(0, limit);
};
