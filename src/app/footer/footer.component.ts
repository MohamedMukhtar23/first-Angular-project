import { Component } from '@angular/core';
import { FooterSection1Component } from './footer-section-1/footer-section-1.component';
import { FooterSection2Component } from './footer-section-2/footer-section-2.component';



@Component({
  selector: 'app-footer',
  imports: [FooterSection1Component, FooterSection2Component,],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
