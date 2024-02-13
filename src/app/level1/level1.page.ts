import { Component, OnInit,inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonItem,IonList,IonButtons,IonBackButton,IonButton } from '@ionic/angular/standalone';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.page.html',
  styleUrls: ['./level1.page.scss'],
  standalone: true,
  imports: [ RouterLink,IonHeader, IonToolbar, IonTitle, IonContent,IonItem,IonList,IonButtons,IonBackButton,IonButton]

})

export class Level1Page implements OnInit {

 
  public username:string="";
  constructor() { }

  ngOnInit() {
  }
  
    
  }
