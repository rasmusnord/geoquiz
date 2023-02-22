import { QuestionData } from "../../utils/game";
import styles from "./Question.module.css";

export interface QuestionProps {
  question: QuestionData;
}

export default function Question(props: QuestionProps) {
  const { question } = props;
  const { text, imageUrl } = question;

  return (
    <div className={styles.question}>
      {text ? text : null}
      {imageUrl ? <img className={styles.image} src={imageUrl} /> : null}
    </div>
  );
}
