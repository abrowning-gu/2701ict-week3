import { Component,inject } from '@angular/core';
import { ModalPage } from '../modal/modal.page';
import {IonHeader, IonToolbar, IonTitle, IonContent,IonButton,ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonButton,ModalPage]
})
export class Tab2Page {
  private modalController = inject(ModalController)
  public username:string = "";
  constructor() {}
  async presentModal(){
    const modal = await this.modalController.create({
    component: ModalPage,
    componentProps: {username: this.username}
    });
    modal.onDidDismiss()
      .then((data) => {
        this.username = data.data;
      });
     return modal.present();
    }
   
}
