import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-validation-container',
  templateUrl: './validation-container.component.html',
  styleUrls: ['./validation-container.component.scss'],
})
export class ValidationContainerComponent implements OnInit {

  @Input()
  control: FormControl;

  @Input()
  form?: FormGroup;

  constructor() { }

  ngOnInit() {}

}

