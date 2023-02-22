import correctUrl from "./assets/audio/correct.mp3";
import incorrectUrl from "./assets/audio/incorrect.mp3";

export interface AudioFile {
  name: string;
  url: string;
}

export interface AudioPlayerConfig {
  volume: number;
  files: AudioFile[];
}

export interface LocalStorageData {
  volume: number;
}

export const name = "GeoQuiz";

export const identifier = "geoquiz";

export const audioConfig: AudioPlayerConfig = {
  volume: 1,
  files: [
    { name: "correct", url: correctUrl },
    { name: "incorrect", url: incorrectUrl },
  ],
};
