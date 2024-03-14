import styles from "@/styles/Home.module.css";

const CssModulePage = () => {
  return (
    <div>
      <h1 className={styles.title}>CSS Modules Example in Next.js</h1>
      <p className={styles.paragraph}>
        This paragraph is styled using CSS Modules.
      </p>
      <p className={"styles.paragraph"}>
        This paragraph is styled using CSS Modules.
      </p>
      <p className={[styles.paragraph, styles.bigger].join(" ")}>
        This paragraph is styled using CSS Modules.
      </p>
    </div>
  );
};

export default CssModulePage;
