import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function () {
      
      // select 2 box
       //Initialize Select2 Elements
    $('.select3').select2()

    //Initialize Select2 Elements
    $('.select2bs4').select2({
      theme: 'bootstrap4'
    })

    })
  }

}
