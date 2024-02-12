import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:'Capitalizer'
})

export class Custompipe  implements PipeTransform {
    transform(value: any) : string {
        if (!value) return value; // Return the original value if it's null or undefined
    
        return value.split('').reverse().join('');
        // Split the value into an array of characters, reverse the order, and join them back together
      }
        // return (value/totalMarks*100).toFixed(decimal);
        //Returns a string representing a number in fixed-point notation.
        //Rounds to decimal places if provided as a parameter; otherwise, rounds to zero places.
        //in HTML <div>{{val.marks| percentage:totalMarks:2}}
 

}