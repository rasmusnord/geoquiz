import * as React from "react";
import { useEffect, useState } from "react";
import { getLocalStorageItem, setLocalStorageItem } from "../utils/storage";
import { getAudio, getAudioContext, playAudio } from "../utils/audio";
import { AudioPlayerConfig, identifier, LocalStorageData } from "../config";

export interface AudioPlayerContextProps {
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  loadAudio: () => Promise<void>;
  playAudio: (name: string) => void;
}

export const AudioPlayerContext = React.createContext<AudioPlayerContextProps>({
  volume: 1,
} as AudioPlayerContextProps);

export interface AudioPlayerProviderProps extends React.PropsWithChildren {
  config: AudioPlayerConfig;
}

export const useAudioPlayer = () => React.useContext(AudioPlayerContext);

export function AudioPlayerProvider(props: AudioPlayerProviderProps) {
  const { config, children } = props;
  const [context] = useState(getAudioContext());
  const [buffers] = useState(new Map());
  const [volume, setVolume] = useState(() => {
    const { volume } = getLocalStorageItem<LocalStorageData>(identifier);

    return volume ?? config.volume;
  });

  useEffect(() => {
    setLocalStorageItem<LocalStorageData>(identifier, { volume });
  }, [volume]);

  const value: AudioPlayerContextProps = {
    volume,
    setVolume,
    loadAudio: async () => {
      for (const { name, url } of config.files) {
        const buffer = await getAudio(context, url);

        buffers.set(name, buffer);
      }
    },
    playAudio: (name: string) => {
      const buffer = buffers.get(name);

      if (buffer) {
        playAudio(context, buffer, volume);
      } else {
        console.error(`Missing audio buffer '${name}'`);
      }
    },
  };

  return (
    <AudioPlayerContext.Provider value={value}>
      {children}
    </AudioPlayerContext.Provider>
  );
}
