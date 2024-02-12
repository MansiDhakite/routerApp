import { Pipe, PipeTransform } from "@angular/core";
import { employee } from "./employee";

@Pipe({
    name: 'filter'
})

export class filterPipe implements PipeTransform{
    transform(value:string):number{
        let count=0;
        for(const ch of value){
            if(ch>='a' && ch<='z' || ch>='A' && ch<='Z'){
                count++;
            }

        }
        return count;
   
   
   
   
   
   
   
    }
}
   
        //     if(employees.length ===0 || filterText===''){
    //         return employees;
    //     }else{
    //       return  employees.filter((val)=>{
    //              return employees.gender.toLowerCase() === filterText.toLowerCase()})
    //     }
    // }

