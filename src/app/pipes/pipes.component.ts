import { Component } from '@angular/core';
import { ListService } from '../list.service';
import { employee } from '../employee';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  employees:employee[]=[
    {name:'john',marks:550, dob: new Date('4-4-2001'),gender:'Male',salary:10000},
    {name:'peter',marks:500, dob: new Date('4-5-1998'),gender:'Male',salary:70000},
    {name:'paxton',marks:450, dob: new Date('1-7-1996'),gender:'Male',salary:11000},
    {name:'Amelia',marks:580, dob: new Date('9-8-1999'),gender:'Female',salary:108000},
  ];
  filterText:string='';
  totalMarks=600;
  
  constructor(private listService:ListService){}
  ngOnInit(){
    // this.Students=this.listService.Students;
    // console.log(this.Students);
    
  }

}
