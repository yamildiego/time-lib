class Time {
    constructor(p_milliseconds) {
        this.formatString = "";
        this.getTime = () => this.milliseconds;
        this.addSeconds = (p_seconds) => new Time(this.milliseconds + p_seconds * 1000);
        this.addMinutes = (p_minutes) => new Time(this.milliseconds + p_minutes * 60000);
        this.addHours = (p_hours) => new Time(this.milliseconds + p_hours * 3600000);
        this.diff = (p_milliseconds) => new Time(this.milliseconds - p_milliseconds);
        this.format = (p_format = "h:i:s") => {
            let secondsTotal = this.milliseconds / 1000;
            let minutesTotal = secondsTotal / 60;
            let hoursTotal = minutesTotal / 60;
            let seconds = secondsTotal - Math.trunc(minutesTotal) * 60;
            let minutes = Math.trunc(minutesTotal - Math.trunc(hoursTotal) * 60);
            let hours = Math.trunc(hoursTotal);
            let value_s = seconds < 10 ? `0${seconds}` : `${seconds}`;
            let value_i = minutes < 10 ? `0${minutes}` : `${minutes}`;
            let value_h = hours < 10 ? `0${hours}` : `${hours}`;
            let value_g = `${hours}`;
            return p_format
                .replace(new RegExp("{s}", "g"), value_s)
                .replace(new RegExp("{i}", "g"), value_i)
                .replace(new RegExp("{h}", "g"), value_h)
                .replace(new RegExp("{g}", "g"), value_g);
        };
        this.milliseconds = p_milliseconds;
    }
}
export default Time;
