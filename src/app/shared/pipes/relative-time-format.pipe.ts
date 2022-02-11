import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTimeFormat',
})
export class RelativeTimeFormatPipe implements PipeTransform {
  // @ts-ignore
  timeAgo(input: Date): string {
    const date = new Date(input);
    const formatter = new Intl.RelativeTimeFormat('tr-TR');
    const ranges: any = {
      years: 3600 * 24 * 365,
      months: 3600 * 24 * 30,
      weeks: 3600 * 24 * 7,
      days: 3600 * 24,
      hours: 3600,
      minutes: 60,
      seconds: 1,
    };
    // console.log('Sonuc:', Math.floor((new Date().getTime() / 1000) - date.getTime()));

    const rtf1 = new Intl.RelativeTimeFormat('en', { style: 'narrow' });

    var currDate = new Date();
    var diffMs = currDate.getTime() - new Date(input).getTime();
    var sec = diffMs / 1000;

    const secondsElapsed = (date.getTime() - Date.now()) / 1000;
    for (let key in ranges) {
      if (ranges[key] < Math.abs(secondsElapsed)) {
        const delta = secondsElapsed / ranges[key];
        return formatter.format(Math.round(delta), <"year" | "years" | "quarter" | "quarters" | "month" | "months" | "week" | "weeks" | "day" | "days" | "hour" | "hours" | "minute" | "minutes" | "second" | "seconds">key);
      }
    }
  }

  transform(value: Date, ...args: unknown[]): unknown {
    return this.timeAgo(value);
  }
}
