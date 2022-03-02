import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTimeFormat'
})
export class RelativeTimeFormatPipe implements PipeTransform {
  // @ts-ignore
  timeAgo(input: Date): string {
    const date = new Date(input);
    const formatter = new Intl.RelativeTimeFormat('tr');
    const ranges: any = {
      years: 3600 * 24 * 365,
      months: 3600 * 24 * 30,
      weeks: 3600 * 24 * 7,
      days: 3600 * 24,
      hours: 3600,
      minutes: 60,
      seconds: 1
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
        return formatter.format(
          Math.round(delta),
          <
            | 'year'
            | 'years'
            | 'quarter'
            | 'quarters'
            | 'month'
            | 'months'
            | 'week'
            | 'weeks'
            | 'day'
            | 'days'
            | 'hour'
            | 'hours'
            | 'minute'
            | 'minutes'
            | 'second'
            | 'seconds'
          >key
        );
      }
    }
  }

  timeAgoV2(timestamp: Date, locale = 'en') {
    let value;
    const diff = (new Date().getTime() - new Date(timestamp).getTime()) / 1000;
    const seconds = Math.floor(60);
    const minutes = Math.floor(diff / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

    if (years > 0 && years <= 10) {
      value = rtf.format(0 - years, 'year');
    } else if (years > 1) {
      // value = new Intl.DateTimeFormat('tr-TR', { dateStyle: 'medium' }).format(new Date(timestamp));
    } else if (months > 0) {
      value = rtf.format(0 - months, 'month');
    } else if (weeks > 0) {
      value = rtf.format(0 - weeks, 'week');
    } else if (days > 0) {
      value = rtf.format(0 - days, 'day');
    } else if (hours > 0) {
      value = rtf.format(0 - hours, 'hour');
    } else if (minutes > 0) {
      value = rtf.format(0 - minutes, 'minute');
    } else if (seconds > 0) {
      value = rtf.format(0 - minutes, 'second');
    } else {
      value = rtf.format(0 - diff, 'second');
    }
    return value;
  }

  // @ts-ignore
  transform(value: Date): unknown {
    return this.timeAgoV2(value, 'tr');
  }
}
