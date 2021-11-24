export const midi = async () => {
  try {
    const access = await navigator.requestMIDIAccess();
    return onMidiAccessSuccess(access);
  } catch (err) {
    console.log(err);
  }
};

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
  const peak = outputs.find((o) => o.name === 'Peak');
  return peak;
};

const getMIDIMessage = (midiMessage) => {
  console.log(midiMessage);
};
