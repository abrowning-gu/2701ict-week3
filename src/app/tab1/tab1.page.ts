import { Component,inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonItem,IonButton,IonList,IonCheckbox,IonInput,IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { enterOutline } from 'ionicons/icons';
import {Router,RouterLink} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [FormsModule,IonHeader, IonToolbar, IonTitle, IonContent,IonItem,IonButton,IonList,IonCheckbox,IonInput,IonIcon,RouterLink ],

})
export class Tab1Page {
  private router = inject(Router);
  public username:string = "";
  constructor() {
    addIcons({'enter-outline': enterOutline });
  }

  login(){
    this.router.navigateByUrl("/level1");
  }
}
