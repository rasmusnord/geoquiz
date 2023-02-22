export const getAudioContext = () => {
  return new AudioContext();
};

export const getAudio = async (audioContext: AudioContext, file: string) => {
  const response = await fetch(file);
  const audioData = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(audioData);

  return audioBuffer;
};

export const playAudio = (
  context: AudioContext,
  buffer: AudioBuffer,
  volume = 1
) => {
  const source = context.createBufferSource();
  source.buffer = buffer;

  const gain = context.createGain();
  gain.gain.value = volume;

  source.connect(gain);
  gain.connect(context.destination);

  source.start(0);
};
