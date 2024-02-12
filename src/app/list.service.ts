import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  Students: { name: string; marks: number; dob: Date ; gender:string; course:string}[]=[
    {name: 'rhoo', marks: 520, dob: new Date('4-4-2001') , gender:'Female', course:'MBA' },
    {name: 'peter', marks: 450, dob: new Date('4-5-2001') , gender:'Male', course:'BTech' },
  ];
  totalMarks:number=600;
  getList(): { grade: number; name: string; country: string }[] {
    // Assuming you return an array of objects from your service
    return [
      { grade: 90, name: 'John', country: 'USA' },
      { grade: 85, name: 'Alice', country: 'Canada' },
      // ... other data
    ];
  }
}
