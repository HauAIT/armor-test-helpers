/** @deprecated */
// @ts-ignore
function fakeTime(sandbox) {
  let clock = sandbox.useFakeTimers();
  return new TimeLord(clock);
}

class TimeLord {
  // @ts-ignore
  constructor(clock) {
    this.clock = clock;
  }

  /**
   * @param {Number} interval
   * @param {Number} times
   */
  speedup(interval, times) {

    let tick = (/** @type {Number} */ n) => {
      if (n === 0) return; // eslint-disable-line curly
      process.nextTick(() => {
        this.clock.tick(interval);
        n--;
        tick(n);
      });
    };
    tick(times);
  }
}
export {fakeTime};
