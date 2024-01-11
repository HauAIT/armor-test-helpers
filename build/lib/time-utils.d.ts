/** @deprecated */
export function fakeTime(sandbox: any): TimeLord;
declare class TimeLord {
    constructor(clock: any);
    clock: any;
    /**
     * @param {Number} interval
     * @param {Number} times
     */
    speedup(interval: number, times: number): void;
}
export {};
//# sourceMappingURL=time-utils.d.ts.map