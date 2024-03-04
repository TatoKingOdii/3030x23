import { Component, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader, IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent, IonFooter,
  IonGrid, IonHeader,
  IonRow, IonText
} from "@ionic/angular/standalone";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NavBarComponent} from "../shared/nav-bar/nav-bar.component";
import {FooterBarComponent} from "../shared/footer-bar/footer-bar.component";
import {Demo, DEMOS} from "@challenge/state";

@Component({
  selector: 'app-home',
  imports: [IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, RouterLink, RouterLinkActive, IonHeader, NavBarComponent, FooterBarComponent, IonFooter, IonText],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true
})
export class HomeComponent implements OnInit {

  demos: Demo[] = DEMOS;
  constructor() { }

  ngOnInit() {}
}
