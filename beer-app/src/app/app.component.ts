import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // Using Angular Element (Web Component) for modal
  // Inspired by https://angular.io/generated/zips/elements/elements.zip
  // Notes to firm up understanding:
  // 1.  Define modal element from component here - but don't add to DOM yet (i.e. not in template `app.component.html`)
  // 2.  Note: The modal component exposes a `beer` property and a `closed' event
  // 3.  The invoking component calls the modal service to show modal and passes the beer to show in the modal
  // 4.  The modal service creates the modal element defined in #1..
  // 5.  and then sets the `beer` property and the `closed` event function (remove from DOM) for its corresponding component (which magically updates the element)
  // 6.  The modal component/template/element emits the `closed` event which it has subscribed to, invoking the "remove from DOM" code in

  // Question:
  // 1.  Do we need an event in our implementation considering the publisher and subscriber are the same component?

  constructor(injector: Injector, public modalService: ModalService) {
    const ModalElementConstructor = createCustomElement(ModalComponent, {injector});
    customElements.define('modal-element', ModalElementConstructor);
  }
}
