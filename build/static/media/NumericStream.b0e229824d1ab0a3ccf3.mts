class NumericStream {
  private onData: ((n: number) => void) = () => {};
  private onError: ((error: Error) => void) = () => {};
  private onEnd: (() => void) = () => {};

  private errorNumber?: number;

  setErrorNumber(n: number) {
    this.errorNumber = n;
  }
  setDataHandler(cb: (n: number) => void) {
    this.onData = cb;
  }

  setErrorHandler(cb: (e: Error) => void) {
    this.onError = cb;
  }

  setEndHandler(cb: () => void) {
    this.onEnd = cb;
  }

  start() {
    let currentNumber = 1;
    const to = 10;
    const startGeneration = () => {
      setTimeout(() => {
        if (currentNumber <= to) {
          const next = currentNumber++;
          this.onData(next);
          if (this.errorNumber !== undefined && currentNumber === this.errorNumber) {
          this.onError(new Error('Unexpected error'));
            return;
          }
          startGeneration();
        } else {
          this.onEnd();
        }
      }, 1000);
    }
    startGeneration();
  }
}

export default NumericStream;