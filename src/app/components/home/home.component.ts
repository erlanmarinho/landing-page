import { NgOptimizedImage } from "@angular/common";
import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NbtnPrimaryComponent } from "../nbtn-primary/nbtn-primary.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, NbtnPrimaryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
