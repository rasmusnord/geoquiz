import { useEffect, useState } from "react";
import LoaderLogo from "./Logo";
import styles from "./Loader.module.css";

export type LoaderState = "init" | "loading" | "loaded" | "error";

export interface LoaderProps {
  load: () => Promise<void>;
  onComplete: () => void;
}

const START_TRANSITION_DURATION = 3000;
const END_TRANSITION_DURATION = 1000;

export default function Loader(props: LoaderProps) {
  const { load, onComplete } = props;
  const [state, setState] = useState<LoaderState>("init");
  const [startTransitionComplete, setStartTransitionComplete] = useState(false);
  const [endTransitionComplete, setEndTransitionComplete] = useState(false);
  const readyForEndTransition = startTransitionComplete && state == "loaded";

  useEffect(() => {
    const t = setTimeout(
      () => setStartTransitionComplete(true),
      START_TRANSITION_DURATION
    );

    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(
      () => readyForEndTransition && setEndTransitionComplete(true),
      END_TRANSITION_DURATION
    );

    return () => clearTimeout(t);
  }, [readyForEndTransition]);

  useEffect(() => {
    if (state === "init") {
      setState("loading");

      load()
        .then(() => setState("loaded"))
        .catch(() => setState("error"));
    }
  }, [state]);

  useEffect(() => {
    endTransitionComplete && onComplete();
  }, [endTransitionComplete]);

  const fadeClass = readyForEndTransition ? styles.fade : "";

  return (
    <div className={`${styles.loader} ${fadeClass}`}>
      <LoaderLogo />
    </div>
  );
}
