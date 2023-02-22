import styles from "./Container.module.css";

export default function Container(props: React.PropsWithChildren) {
  const { children } = props;

  return <div className={styles.container}>{children}</div>;
}
