import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'talkDuration' })
export class TalkDurationPipe implements PipeTransform {
  transform(duration: any) {
    return "Duration: " + duration + " minutes";
  }
}