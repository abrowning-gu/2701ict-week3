import { Component, OnInit,inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonItem,IonList,IonButtons,IonBackButton,IonButton } from '@ionic/angular/standalone';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.page.html',
  styleUrls: ['./level2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonItem,IonList,IonButtons,IonBackButton,IonButton,RouterLink]
})
export class Level2Page implements OnInit {
  private router= inject(Router);
  constructor() { }

  ngOnInit() {
    
  }
  gotolv3(){
    this.router.navigateByUrl("/level3");
  }
}
