export const midi = () => {
  try {
    navigator.requestMIDIAccess().then((access) => onMidiAccessSuccess(access));
  } catch (err) {
    console.log(err);
  }

  const onMidiAccessSuccess = (access) => {
    if (access.inputs && access.inputs.size > 0) {
      const inputs = access.inputs.values();
      for (let input = inputs.next(); input && !input.done; input = inputs.next()) {
        console.dir(input);
        input.value.onmidimessage = getMIDIMessage;
        input.value.onmidimessage = (msg) => {
          console.log(msg);
        };
      }
    }
    const outputs = Array.from(access.outputs.values());
    const peak = outputs[0];
    console.dir(peak);
    peak.send([0x90, 0x3c, 0x40]);
    setTimeout(() => {
      peak.send([0x80, 0x3c, 0x40]);
    }, 3000);
  };

  const getMIDIMessage = (midiMessage) => {
    console.log(midiMessage);
  };
};
