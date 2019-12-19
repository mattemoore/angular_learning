
import { Injectable} from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { ModalComponent } from './modal/modal.component';
import { Beer } from 'src/models/beer';

@Injectable({
  providedIn: 'root'
})

export class ModalService {

  constructor() {}

  openModal(beer: Beer) {
    const popupEl: NgElement & WithProperties<ModalComponent> = document.createElement('modal-element') as any;
    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));
    popupEl.beer = beer;
    document.body.appendChild(popupEl);
  }
}
