import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/shared/crud.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  id = this.activatedRoute.snapshot.params['id'];
  userObj: any = {};
  constructor(public activatedRoute:ActivatedRoute,public crudService:CrudService,public router:Router) { }


  ngOnInit(): void {
    this.crudService.getSingleUser(this.id)
      .subscribe((res:{}) => {
        this.userObj = res;
      })
  }

  updateUser(id:any,data:any){
    if(window.confirm('Yes Please!...')){
      this.crudService.updateUser(this.id,data)
        .subscribe(res =>{
          this.router.navigate(['/list'])
        })
    }
  }

}
