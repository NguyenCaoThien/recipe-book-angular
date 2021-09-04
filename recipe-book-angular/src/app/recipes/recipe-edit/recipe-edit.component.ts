import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  isEdit = false;

  ngOnInit(): void {
this.route.paramMap.subscribe((param)=>{
  this.isEdit = param.get("id") !== null;
  console.log(this.isEdit);
})
  }

}