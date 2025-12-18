function addReverb(audioCtx, streamSource) {
  const convolver = audioCtx.createConvolver();

  // Generate a simple impulse response (short decay, airy feel)
  const length = audioCtx.sampleRate * 2; // 2 seconds
  const impulse = audioCtx.createBuffer(2, length, audioCtx.sampleRate);

  for (let ch = 0; ch < 2; ch++) {
    const channelData = impulse.getChannelData(ch);
    for (let i = 0; i < length; i++) {
      // Random noise that fades out over time
      channelData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 2);
    }
  }

  convolver.buffer = impulse;

  // Connect stream through reverb
  streamSource.connect(convolver);
  convolver.connect(audioCtx.destination);

  return convolver;
}

// Usage:
// const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
// const streamSource = audioCtx.createMediaElementSource(document.getElementById("webradio"));
// const reverb = addReverb(audioCtx, streamSource);



