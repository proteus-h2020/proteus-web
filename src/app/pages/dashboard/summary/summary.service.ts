import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { BaThemeConfigProvider, layoutPaths } from '../../../theme';

@Injectable()
export class SummaryService {

  private messagesProcessed: number = 0;

  private messagesNotifier: Subject<number> = new Subject();

  constructor(private _baConfig: BaThemeConfigProvider) {

    setInterval(() => {
      this.messagesProcessed++;
      this.messagesNotifier.next(this.messagesProcessed)
      this.messagesSubscriptor();
    }, 500);
  }

  public messagesSubscriptor() {
    return this.messagesNotifier;

  }

}
