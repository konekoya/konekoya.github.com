import { useEffect, useRef, useState } from "react";
import styles from "./IntroSection.module.css";

export function IntroSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(true);
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`${styles.intro} ${active ? styles.active : ""}`}
    >
      <article className={styles.content}>
        <p className={styles.firstSection}>
          Christian, husband, father of two 👨‍👩‍👦‍👦, Web Frontend Developer and
          Designer living in Hsinchu, Taiwan 🇹🇼 I'm currently working at{" "}
          <a
            className={`${styles.link} ${styles.linkLeft}`}
            href="https://en.wikipedia.org/wiki/Hsinchu"
            target="_blank"
            rel="noreferrer"
            data-linktext="is-land Systems"
          >
            is-land Systems
          </a>
          , volunteering at a local church called{" "}
          <a
            className={`${styles.link} ${styles.linkLeft}`}
            href="https://newcityhsinchu.wordpress.com/"
            target="_blank"
            rel="noreferrer"
            data-linktext="New City Church"
          >
            New City Church
          </a>{" "}
          as well as doing some{" "}
          <a
            className={`${styles.link} ${styles.linkLeft}`}
            href="http://www.github.com/konekoya"
            target="_blank"
            rel="noreferrer"
            data-linktext="Open Source projects"
          >
            Open Source projects
          </a>{" "}
          in my free time.
        </p>

        <p className={styles.secondSection}>
          I'm passionate about UIs, and that's what I'm primarily building. I
          use{" "}
          <a
            className={`${styles.link} ${styles.linkLeft}`}
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
            data-linktext="React"
          >
            React
          </a>{" "}
          ⚛️ to create beautiful, easy to maintain and reusable components,{" "}
          <a
            className={`${styles.link} ${styles.linkLeft}`}
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noreferrer"
            data-linktext="Node.js"
          >
            Node.js
          </a>{" "}
          as the server side solution. I BELIEVE in test, so I do unit test with{" "}
          <a
            className={`${styles.link} ${styles.linkLeft}`}
            href="https://jestjs.io/"
            target="_blank"
            rel="noreferrer"
            data-linktext="Jest"
          >
            Jest
          </a>{" "}
          and End-to-End test with{" "}
          <a
            className={`${styles.link} ${styles.linkLeft}`}
            href="https://www.cypress.io/"
            target="_blank"
            rel="noreferrer"
            data-linktext="cypress"
          >
            cypress
          </a>
          .{" "}
          <a
            className={`${styles.link} ${styles.linkLeft}`}
            href="https://eslint.org/"
            target="_blank"
            rel="noreferrer"
            data-linktext="ESLint"
          >
            ESLint
          </a>{" "}
          and{" "}
          <a
            className={`${styles.link} ${styles.linkLeft}`}
            href="https://prettier.io/"
            target="_blank"
            rel="noreferrer"
            data-linktext="Prettier"
          >
            Prettier
          </a>{" "}
          to ensure my code quality. Also,{" "}
          <a
            className={`${styles.link} ${styles.linkLeft}`}
            href="https://webpack.js.org/"
            target="_blank"
            rel="noreferrer"
            data-linktext="webpack"
          >
            webpack
          </a>{" "}
          for bundling assets and the last but not least,{" "}
          <a
            className={`${styles.link} ${styles.linkLeft}`}
            href="https://babeljs.io/"
            target="_blank"
            rel="noreferrer"
            data-linktext="Babel"
          >
            Babel
          </a>
          , one that enables me to write ES2015+ code.
        </p>

        <ul className={styles.socialLinks}>
          <li>
            <a
              href="https://github.com/konekoya"
              className={styles.socialLink}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/joshua-lin-41600624"
              className={styles.socialLink}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/1727948/konekoya?tab=profile"
              className={styles.socialLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Stack Overflow"
            >
              <i className="fab fa-stack-overflow" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/konekoya"
              className={styles.socialLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}
