import { Component, OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonItem,IonInput,IonHeader,IonToolbar,IonTitle,IonContent,IonButton} from '@ionic/angular/standalone';
import { ModalController,NavParams } from '@ionic/angular/standalone';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: true,
  imports: [IonItem,IonInput,IonHeader,IonToolbar,IonTitle,IonContent,IonButton, CommonModule, FormsModule]
})
export class ModalPage implements OnInit {
  private modalC = inject(ModalController);
  private navParams = inject(NavParams);
  public username:String="";
  constructor() { }

  ngOnInit() {
    this.username = this.navParams.get('username') 
  }
  closeModal(){
    this.modalC.dismiss(this.username);
  }
}
