import { Component, OnInit } from '@angular/core';
import { BloggingService } from 'src/service/blogging.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {
  email: any;


  constructor(private service : BloggingService, private router:Router) { }

  ngOnInit() {
  }
  submit(){
this.service.checkin({email:this.email}).subscribe(checkedIn=>{
  console.log(checkedIn)
  localStorage.setItem('userId', checkedIn['userId']);
  console.log(localStorage.getItem('userId'))
  this.router.navigate(['/list']);
  
})
    console.log(this.email)
  }


}
