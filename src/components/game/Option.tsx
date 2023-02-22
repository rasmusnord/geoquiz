import styles from "./Option.module.css";

export interface OptionProps extends React.PropsWithChildren {
  selected?: boolean;
  correct?: boolean;
  highlight?: boolean;
  onClick: () => void;
}

export default function Option(props: OptionProps) {
  const { selected, correct, highlight, onClick, children } = props;

  const selectedClass = selected ? styles.selected : "";
  const highlightClass = selected
    ? correct
      ? styles.correct
      : styles.incorrect
    : highlight
    ? styles.actual
    : "";

  return (
    <div
      className={`${styles.option} ${selectedClass} ${highlightClass}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
