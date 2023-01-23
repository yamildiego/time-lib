class Time {
  private milliseconds: number;
  private formatString: string = "";

  constructor(p_milliseconds: number) {
    this.milliseconds = p_milliseconds;
  }

  getTime = (): number => this.milliseconds;

  addSeconds = (p_seconds: number): Time => new Time(this.milliseconds + p_seconds * 1000);

  addMinutes = (p_minutes: number): Time => new Time(this.milliseconds + p_minutes * 60000);

  addHours = (p_hours: number): Time => new Time(this.milliseconds + p_hours * 3600000);

  diff = (p_milliseconds: number): Time => new Time(this.milliseconds - p_milliseconds);

  format = (p_format: string = "h:i:s"): string => {
    this.milliseconds = Math.trunc(this.milliseconds / 1000) * 1000;

    let secondsTotal: number = this.milliseconds / 1000;
    let minutesTotal: number = secondsTotal / 60;
    let hoursTotal: number = minutesTotal / 60;

    let seconds: number = secondsTotal - Math.trunc(minutesTotal) * 60;
    let minutes: number = Math.trunc(minutesTotal - Math.trunc(hoursTotal) * 60);
    let hours: number = Math.trunc(hoursTotal);

    return p_format
      .replace(new RegExp("{s}", "g"), this.#addZeros(seconds))
      .replace(new RegExp("{i}", "g"), this.#addZeros(minutes))
      .replace(new RegExp("{h}", "g"), this.#addZeros(hours))
      .replace(new RegExp("{g}", "g"), `${hours}`);
  };

  #addZeros = (value: number): string => {
    let result: string = "";
    if (Math.abs(value) < 10) result = value < 0 ? `-0${`${value}`.substring(1)}` : `0${value}`;
    else result = `${value}`;

    return result;
  };
}

export default Time;
