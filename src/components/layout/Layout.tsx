import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAudioPlayer } from "../../contexts/AudioPlayerContext";
import BackControl from "../icons/IconChevronBack";
import VolumeControl from "./VolumeControl";
import Logo from "./Logo";
import styles from "./Layout.module.css";

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { volume, setVolume } = useAudioPlayer();

  const showControls = location.pathname !== "/";
  const showControlsClass = showControls ? styles.showControls : "";

  return (
    <div className={styles.wrapper}>
      <header className={`${styles.header} ${showControlsClass}`}>
        <div className={styles.controls}>
          <BackControl onClick={() => navigate("/")} />
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.controls}>
          <VolumeControl volume={volume} onChange={setVolume} />
        </div>
      </header>
      <Outlet />
    </div>
  );
}
