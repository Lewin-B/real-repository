"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

// Outdated class component example
class LegacyComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Component mounted");
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (prevState.count !== this.state.count) {
      console.log("Count changed");
    }
  }

  render() {
    return (
      <div>
        <p>Legacy class component count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default function Home() {
  // Outdated useState pattern
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Outdated useEffect pattern
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setData("Legacy data loaded");
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          This is an outdated Next.js application using App Router for testing
          purposes.
        </p>

        {loading ? <p>Loading legacy data...</p> : <p>{data}</p>}

        <LegacyComponent />

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>

          <div className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Built with Next.js 13.4.19 (outdated) - App Router</p>
      </footer>
    </div>
  );
}
