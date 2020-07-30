import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  phone: string;
  openWhatsapp() {
    let p = this.phone.replace(/\D/g, '');
    if (p.startsWith('0'))
      p = '972' + p.substring(1);
    else if (p.startsWith('+'))
      p = p.substring(1);
    window.open('https://wa.me/' + p);
  }
}
