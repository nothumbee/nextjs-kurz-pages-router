import styles from "@/styles/Home.module.scss";

const SassPage = () => {
  return (
    <div>
      <h1 className={styles.title}>Sass Example in Next.js</h1>
      <p className={styles.paragraph}>This paragraph is styled using Sass.</p>
      <p className={"styles.paragraph"}>This paragraph is styled using Sass.</p>
      <p className={[styles.paragraph, styles.bigger].join(" ")}>
        This paragraph is styled using Sass.
      </p>
    </div>
  );
};

export default SassPage;
