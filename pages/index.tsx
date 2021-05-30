import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Fuse from "fuse.js";
import data from "../data.json";
import { ChangeEvent, useEffect, useState } from "react";
import { SearchResult } from "../@types";
import CategoryCard from "../components/CategoryCard";

const DEFAULT_LIMIT = 10;

export default function Home() {
  const fuse = new Fuse(data, {
    keys: ["id", "level1", "level2", "level3", "level4", "level5", "level6"],
  });
  const [input, setInput] = useState("");
  const [results, setResults] = useState<SearchResult>([]);
  const [limit, setLimit] = useState(DEFAULT_LIMIT);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const handleShowMore = () => setLimit(limit + 10);

  useEffect(() => {
    setLimit(DEFAULT_LIMIT)
    const data: SearchResult = fuse.search(input);
    setResults(data);
  }, [input]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Google Product Category Finder</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Google Product Category Finder</h1>

        <p className={styles.description}>
          Search the Google Product ID for your item below
        </p>
        <section className={styles.form}>
          <input
            placeholder='Enter your product data'
            value={input}
            onChange={handleInput}
            type='text'
          />
        </section>
        <div>
          {results.slice(0, limit).map((result) => (
            <CategoryCard key={result.refIndex} item={result.item} />
          ))}
        </div>
        <button className={styles.button} onClick={handleShowMore}>Show More</button>
      </main>

      <footer className={styles.footer}>
        <a href='https://maalexi.com' target='_blank' rel='noopener noreferrer'>
          Powered by{" "}
          <span className={styles.logo}>
            <img src='/maalexi.png' alt='Maalexi Logo' />
          </span>
        </a>
      </footer>
    </div>
  );
}
