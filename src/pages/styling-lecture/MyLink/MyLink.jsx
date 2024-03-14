import styles from "./MyLink.module.css";

export default function MyLink({ href }) {
  return (
    <a href={href} className={styles.link}>
      MyLink
    </a>
  );
}
