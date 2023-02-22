import styles from "./Options.module.css";

export default function Options(props: React.PropsWithChildren) {
  const { children } = props;

  return <div className={styles.options}>{children}</div>;
}
