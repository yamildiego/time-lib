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
    let secondsTotal: number = this.milliseconds / 1000;
    let minutesTotal: number = secondsTotal / 60;
    let hoursTotal: number = minutesTotal / 60;

    let seconds: number = secondsTotal - Math.trunc(minutesTotal) * 60;
    let minutes: number = Math.trunc(minutesTotal - Math.trunc(hoursTotal) * 60);
    let hours: number = Math.trunc(hoursTotal);

    let value_s = this.#addZeros(seconds);
    let value_i = this.#addZeros(minutes);
    let value_h = this.#addZeros(hours);
    let value_g = `${hours}`;

    return p_format
      .replace(new RegExp("{s}", "g"), value_s)
      .replace(new RegExp("{i}", "g"), value_i)
      .replace(new RegExp("{h}", "g"), value_h)
      .replace(new RegExp("{g}", "g"), value_g);
  };

  #addZeros = (value: number): string => {
    let result: string = "";
    if (Math.abs(value) < 10) result = value < 0 ? `-0${value.substring(1)}` : `0${value}`;
    else result = `${value}`;

    return result;
  };
}

export default Time;
