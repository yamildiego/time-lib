declare class Time {
    private milliseconds;
    private formatString;
    constructor(p_milliseconds: number);
    getTime: () => number;
    addSeconds: (p_seconds: number) => Time;
    addMinutes: (p_minutes: number) => Time;
    addHours: (p_hours: number) => Time;
    diff: (p_milliseconds: number) => Time;
    format: (p_format?: string) => string;
}
export default Time;
