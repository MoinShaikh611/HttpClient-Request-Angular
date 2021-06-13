import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'add'},
  {path:'add',component:AddUserComponent},
  {path:'edit/:id',component:EditUserComponent},
  {path:'list',component:ListUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
