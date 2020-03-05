import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-date-wise',
  templateUrl: './date-wise.component.html',
  styleUrls: ['./date-wise.component.css']
})
export class DateWiseComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    $(document).ready(function () {

      $('#start').datepicker({ autoclose: true });
      $('#end').datepicker({ autoclose: true });

      //Datemask dd/mm/yyyy
      $('#start').inputmask('dd-mm-yyyy', { 'placeholder': 'dd-mm-yyyy' })
      //Datemask2 mm/dd/yyyy
      $('#end').inputmask('dd-mm-yyyy', { 'placeholder': 'dd-mm-yyyy' })

    })
  }

}
