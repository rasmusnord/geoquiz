import { useEffect, useState } from "react";
import { useAudioPlayer } from "../../contexts/AudioPlayerContext";
import { QuestionData } from "../../utils/game";
import Container from "./Container";
import Option from "./Option";
import Options from "./Options";
import Question from "./Question";

export interface QuizProps {
  generateQuestion: () => QuestionData;
}

export default function Quiz(props: QuizProps) {
  const { generateQuestion } = props;
  const [question, setQuestion] = useState(generateQuestion());
  const [answer, setAnswer] = useState<string | null>(null);
  const { playAudio } = useAudioPlayer();
  const correctAnswer = question.answer;
  const correct = correctAnswer === answer;

  useEffect(() => {
    (async () => {
      if (answer) {
        playAudio(correct ? "correct" : "incorrect");
      }
    })();
  }, [answer]);

  useEffect(() => {
    const t = setTimeout(() => {
      if (answer) {
        setQuestion(generateQuestion());
        setAnswer(null);
      }
    }, 1000);

    return () => clearTimeout(t);
  }, [answer]);

  return (
    <Container>
      <Question question={question} />
      <Options>
        {question.options.map((option, i) => {
          const selected = answer === option;
          const highlight = correctAnswer === option && answer !== null;

          return (
            <Option
              selected={selected}
              correct={correct}
              highlight={highlight}
              onClick={() => answer === null && setAnswer(option)}
              key={i}
            >
              {option}
            </Option>
          );
        })}
      </Options>
    </Container>
  );
}
