import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Beer } from 'src/models/beer';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  @Input()
  beer: Beer;

  @Output()
  closed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}
