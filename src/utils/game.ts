import { Country } from "../data/countries";
import { shuffle, uniqueRandomFrom } from "./random";

export interface QuestionData {
  text?: string;
  imageUrl?: string;
  answer: string;
  options: string[];
}

export const generateCapitalQuestion = (countries: Country[]) => {
  const [q, a, b, c] = uniqueRandomFrom(countries, 5);
  const { country, capital } = q;
  const options = [q, a, b, c].map(({ capital }) => capital);

  shuffle(options);

  const question: QuestionData = {
    text: `What is the capital of ${country}?`,
    answer: capital,
    options,
  };

  return question;
};

export const generateFlagQuestion = (countries: Country[]) => {
  const [q, a, b, c] = uniqueRandomFrom(countries, 5);
  const { country, flagUrl } = q;
  const options = [q, a, b, c].map(({ country }) => country);

  shuffle(options);

  const question: QuestionData = {
    imageUrl: flagUrl,
    answer: country,
    options,
  };

  return question;
};
