import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/list.service';

@Component({
  selector: 'app-category2',
  templateUrl: './category2.component.html',
  styleUrls: ['./category2.component.css']
})
export class Category2Component implements OnInit {
  studentList: { grade: number; name: string; country: string }[] = [];

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.studentList = this.listService.getList();
  }



}
