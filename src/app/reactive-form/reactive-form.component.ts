import { Component } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  reactiveForm:FormGroup;
  formBuilder: any;
  ngOnInit(){
    this.reactiveForm=new  FormGroup({
      // personalDetails:new FormGroup({
      //   name:new FormControl(null,Validators.required),
      //   email:new FormControl(null,[Validators.required,Validators.email])

      // }),
      name:new FormControl(null,[,this.noSpaceAllowed]),
      email:new FormControl(null,[Validators.required,Validators.email]),
     
      message:new FormControl(null,Validators.required),
  });
  this.reactiveForm = this.formBuilder.group({
    // Define form controls with initial values and validation rules
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    age: ['', [Validators.required, Validators.min(18)]],
    // Add more form controls as needed
  });
}
  onSubmit(form:FormGroup){
    console.log(form);
     alert("Your form is submitted");
  }
  noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') !== -1) {
      return { noSpaceAllowed: true }; // Return an object indicating validation failure
    }
    return null; // Return null if validation passes
  }

}
