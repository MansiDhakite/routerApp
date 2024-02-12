import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http:HttpClient) { }
  createStudent(form:{firstName:string; lastName:string; email:string;gender:string;age:number}){
    console.log(form['firstName']);
    const headers =new HttpHeaders({'myHeader':'My Custom Header Value'});
    this.http.post('https://apiangularproject-fcbec-default-rtdb.firebaseio.com/add.json',form,{headers:headers}).subscribe((res)=>{
      console.log(res);
    });
  }
  fetchStudent(){
    return this.http.get('https://apiangularproject-fcbec-default-rtdb.firebaseio.com/add.json')
    .pipe(map((res)=>{
      const form=[];
      for(const key in res ){
        if(res.hasOwnProperty(key)){
          form.push({...res[key],id:key})
        }
      
        
      }
      return form;
    }))
  }
  deleteStudentById(id:string){
    this.http.delete('https://apiangularproject-fcbec-default-rtdb.firebaseio.com/add/'+id+'.json').subscribe();

  }
  deleteAllProducts(){
    this.http.delete('https://apiangularproject-fcbec-default-rtdb.firebaseio.com/add.json').subscribe();

  }
  updateStudent(id:string,value:any){
    this.http.put('https://apiangularproject-fcbec-default-rtdb.firebaseio.com/add/'+id+'.json',value).subscribe();
  }
}
