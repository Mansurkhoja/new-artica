export const state = () => ({
  isFinished: false,
  isFinishedDelay: false,
  preloaderDelay: 0,
  preloaderDurationFinal: 0,
});

export const mutations = {
  setFinish(state) {
    state.isFinished = !state.isFinished;
  },
  setFinishDelay(state) {
    state.isFinishedDelay = !state.isFinishedDelay;
  },
  setPreloaderDelay(state, delay) {
    state.preloaderDelay = delay;
  },
  setPreloaderDurationFinal(state, durationFinal) {
    state.preloaderDurationFinal = durationFinal;
  },
};
export const getters = {
  isFinished: (state) => state.isFinished,
  isFinishedDelay: (state) => state.isFinishedDelay,
  preloaderDelay: (state) => state.preloaderDelay,
  preloaderDurationFinal: (state) => state.preloaderDurationFinal
};
