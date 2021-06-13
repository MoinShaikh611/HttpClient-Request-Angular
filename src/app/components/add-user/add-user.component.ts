import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  @Input() userObj = {name:'',email:'',phone:0};
  constructor(private crudService:CrudService, public router:Router) { }

  ngOnInit(): void {
    
  }

  addUser(data:any){
    this.crudService.addUser(this.userObj)
      .subscribe((data:{}) => {
          this.router.navigate(['/list'])
      })
  }

}
