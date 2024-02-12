import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormArray, NgForm } from '@angular/forms';
import { map } from 'rxjs';
import { ApisService } from '../apis.service';
// import {formVal} from './model/formVal';


@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent {
  
  firstname!:string;
  formInfo={};
  allStudent:any=[];
  currentStudent;
  currentId:string;
  editMode:boolean=false;
  
  constructor(private http:HttpClient,private apiService:ApisService){}
  ngOnInit(){
    this.fetchItem();
    console.log(this.allStudent);
  }
  latestData(){
    this.fetchItem();
  }
  // formsData:any={
  //   firstName:''
  // };


  //we can also use it with the help of viewChild still the form works same
  @ViewChild('myForm') form?:NgForm;
//this method we can use it with viewchild without putting any elemnt in the onsubmit method of html
  onSubmit(form:{firstName:string; lastName:string; email:string;gender:string;age:number}){
    console.log(form[`${'lastName'}`]);
    console.log(form['firstName']);
    if (this.editMode) {
    this.apiService.createStudent(form);}else{
      this.apiService.updateStudent(this.currentId,form);
      console.log('current',this.currentId);

    }}
  fetchItem(){
    this.apiService.fetchStudent().subscribe((res)=>{
      this.allStudent=res;
    })
   
  }
  deleteItem(id:string){
    this.apiService.deleteStudentById(id);
  }
  clearAllData(){
    this.apiService.deleteAllProducts();
  }
  onEditClicked(ids:string){
    console.log('id',ids);
    this.currentId=ids;
   
    this.currentStudent=this.allStudent.find((s)=>{return s.id=== ids});
    console.log(this.currentStudent);
    this.form.setValue({
      firstName:this.currentStudent.firstName,
      lastName:this.currentStudent.lastName,
      age:this.currentStudent.age,
      email:this.currentStudent.email,
      gender:this.currentStudent.gender
    });
    this.editMode=true;
    
  }

 
  //this method is with how we can normally access the form elements
  // onSubmit(form:NgForm){
  //   alert('form is successfully submitted',)
  //   console.log(form.value);
  //   this.formInfo=form.value;
  //   console.log(this.formInfo);
    // this.firstname=this.firstname.value




    // console.log(form.formsData.firstName)
    

    // this.firstname=this.form.firstName.value;
  }


