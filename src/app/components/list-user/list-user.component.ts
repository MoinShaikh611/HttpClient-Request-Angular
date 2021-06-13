import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  Users:any = [];
  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(){
    return this.crudService.getUsers()
      .subscribe((res:{}) =>{
        this.Users = res;
      })
  }

  delete(id:any){
    if(window.confirm('Really?')){
      this.crudService.deleteUser(id)
        .subscribe(res => {this.fetchUsers()})
    }
  }

}
