import { Component, OnInit } from '@angular/core';
//import { randomBytes } from 'crypto';
import { DataService } from '../..//data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

name:string;
age:number;
email:string;
address:Address;
hobbies:any[];
posts:Post[];
isEdit:boolean=false;

  constructor(private dataService:DataService) {
    console.log('constructor ran..');
   }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.name="abdallah";
    this.age=30;
    this.email="test@test.com"
    this.address={
      street:'50',
      city:'dakar',
      state:'ergf'
    }
    this.hobbies=['erty','sdfgh','qsdfg'];
    this.dataService.getPosts().subscribe((posts)=>{
     //console.log('posts');
     this.posts=posts;
    });
  }
  onClick(){
    this.name="Emile Diouf";
    this.hobbies.push('New hobby');
  }
  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  } 

  deleteHobby(hobby){

for(let i=0; i<this.hobbies.length; i++) {
  if(this.hobbies[i]==hobby){
    this.hobbies.splice(i,1);
  }
}

}

toggleEdit(){
  this.isEdit = !this.isEdit;
}
}


interface Address{
  street:string,
  city:string,
  state:string
}

interface Post{
  id:number
  title:string,
  body:string,
  userId:number
}