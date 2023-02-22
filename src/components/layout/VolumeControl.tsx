import IconVolumeHigh from "../icons/IconVolumeHigh";
import IconVolumeMute from "../icons/IconVolumeMute";

export interface VolumeControlProps {
  volume: number;
  onChange: (volume: number) => void;
}

export default function VolumeControl(props: VolumeControlProps) {
  const { volume, onChange } = props;
  const muted = volume === 0;
  const Icon = muted ? IconVolumeMute : IconVolumeHigh;

  return <Icon onClick={() => onChange(muted ? 1 : 0)} />;
}
