import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { ChangeEvent, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import { useCategorySearch } from "../hooks/useCategorySearch";

export default function Home() {
  const [input, setInput] = useState("");
  const [results, hasMore, showMore] = useCategorySearch(input);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const handleShowMore = () => showMore(10);

  return (
    <div className={styles.container}>
      <Head>
        <title>Google Product Category Finder | Maalexi</title>
        <meta
          name='description'
          content='Web App to find the Google Product Category ID for any product type by simply searching in the Web Interface. Developed and open Sourced at Maalexi'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Google Product Category Finder</h1>

        <p className={styles.description}>
          Search the Maalexi <b>Item - Category</b> (Google Product ID)
        </p>
        <section className={styles.form}>
          <input
            placeholder='Enter your item keywords'
            value={input}
            onChange={handleInput}
            type='text'
          />
        </section>
        <div className={styles.cards}>
          {results.map((result) => (
            <CategoryCard key={result.refIndex} item={result.item} />
          ))}
        </div>
        {hasMore && (
          <button className={styles.button} onClick={handleShowMore}>
            Show More
          </button>
        )}
      </main>

      <footer className={styles.footer}>
        <a href='https://maalexi.com' target='_blank' rel='noopener noreferrer'>
          <span className={styles.logo}>
            <img src='/maalexi.png' alt='Maalexi Logo' />
          </span>
        </a>
        <a
          href='https://github.com/maalexi/google-product-category-finder'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className={styles.logo}>
            <img
              className={styles.github}
              src='/github.png'
              alt='Github Logo'
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
