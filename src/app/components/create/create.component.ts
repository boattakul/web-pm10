// create.component.ts

import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../share.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;
  constructor(private shareservice: ShareService, private fb: FormBuilder) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      PM: ['', Validators.required ],
      Tem: ['', Validators.required ],
      Hum: ['', Validators.required ]
   });
  }
  addShare(PM, Tem, Hum) {
    const dataObj = {
      PM: PM,
      Tem: Tem,
      Hum: Hum
    };
    this.shareservice.addShare(dataObj);
  }
  ngOnInit() {
  }
}
