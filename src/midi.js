export const connectToPeak = async () => {
  try {
    const access = await navigator.requestMIDIAccess();
    const outputs = Array.from(access.outputs.values());
    const peak = outputs.find((o) => o.name === 'Peak');
    return peak;
  } catch (err) {
    console.log(err);
  }
};

export const connectToInputs = async (onMidiMessage) => {
  const access = await navigator.requestMIDIAccess();
  if (access.inputs && access.inputs.size > 0) {
    const inputs = access.inputs.values();
    for (
      let input = inputs.next();
      input && !input.done;
      input = inputs.next()
    ) {
      console.dir(input);
      input.value.onmidimessage = (msg) => {
        onMidiMessage(Array.from(msg.data));
      };
    }
  }
};
