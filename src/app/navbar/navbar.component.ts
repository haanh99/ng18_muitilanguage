import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MultiLangService } from '../multi-lang.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  multiLanguage = inject(MultiLangService);

  languages = ['us', 'cn', 'vn', 'de'];
  toggleLanguage(lang: string) {
    if(this.multiLanguage.languageSignal() !== lang) {
      this.multiLanguage.updateLanguage(lang);
      console.log('Language changed to ', lang);
    }
  }
  getLanguageIconClass(lang: string) {
    if(lang === 'en') {
      return 'fi fi-us';
    }
    return `fi fi-${lang}`;
  }
  getLanguageName(lang: string) {
    switch (lang) {
      case 'en':
        return 'English';
      case 'cn':
        return 'China';
      case 'vn':
        return 'VietName';
      case 'de':
        return 'Germany';
      default:
        return 'English';
    }
  }
  // same as
  // getLanguageIconClass2(lang: string) {
  //   switch (lang) {
  //     case 'us':
  //       return 'fi fi-us';
  //     case 'cn':
  //       return 'fi fi-cn';
  //     case 'vn':
  //       return 'fi fi-vn';
  //     case 'de':
  //       return 'fi fi-de';
  //     default:
  //       return 'fi fi-us';
  //   }
  // }
}
