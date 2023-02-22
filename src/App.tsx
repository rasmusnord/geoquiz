import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useAudioPlayer } from "./contexts/AudioPlayerContext";
import Loader from "./components/loader/Loader";
import Layout from "./components/layout/Layout";
import Home from "./components/game/Home";
import Quiz from "./components/game/Quiz";
import { generateFlagQuestion, generateCapitalQuestion } from "./utils/game";
import { countries } from "./data/countries";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const { loadAudio } = useAudioPlayer();

  if (!loaded) {
    const load = async () => await loadAudio();
    const onComplete = () => setLoaded(true);

    return <Loader load={load} onComplete={onComplete} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/capitals"
          element={
            <Quiz generateQuestion={() => generateCapitalQuestion(countries)} />
          }
        />
        <Route
          path="/flags"
          element={
            <Quiz generateQuestion={() => generateFlagQuestion(countries)} />
          }
        />
      </Route>
    </Routes>
  );
}
