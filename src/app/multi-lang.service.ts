import { effect, inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MultiLangService {

  translateSrvice = inject(TranslateService);

  languageSignal: any = signal('en');

  updateLanguage(lang: string) {
    this.languageSignal.update(()=>{
      switch (lang) {
        case 'en':
          return 'en';
        case 'cn':
          return 'cn';
          
        case 'vn':
          return 'vn';
         
        case 'de':
          return 'de';
         
        default:
          return 'en';
      }
    })
  }
  constructor() {
    effect(() => {
      window.localStorage.setItem('lang', JSON.stringify(this.languageSignal()));
      this.translateSrvice.use(this.languageSignal());
      console.log(this.languageSignal());
    })
   }
}
