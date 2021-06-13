
HttpClient Request with JSON Server:

step1 :
create a new project:
ng new http-client-request

2.create components:
>ng g c components/add-user
>ng g c components/edit-user
>ng g c components/list-user

3.create a service:
>ng g s shared/crud

4.create a Model:
>ng g class models/user

5.imports in AppModule:
-import HttpClientModule from angula/common/http
-import FormsModule

6.set the paths i app-routing.module:
-const routes:Routes = [
{path:'',pathMatch:'full',redirectTo:'add'},
{ path:'', component:ListUserCompo}
path:'add',compo:AddUserCompo,
path:'edit/:id,cmopo:EditUser
path:'list',cmpo:istCompo
];


7.create http services in CrudService :
1..import and inject HttpClient
2..set httpHeaders
3..create getUsers() method to fetch all the users api from the json-server
4..create getSingleUser(id) method to fetch the specific user with specific id 
5..create addUser(data) method to post the user data to json-server
6..create updateUser(id,data) method to update the existing user	
7..create delete(id) method to delete the user with specific id
8.create a error handler method "processError()" and throw the error

8.create a User Model in user.ts:
properties-- name, id , phone,email

-------------------------------------add-user----------------------------
9.create a add-user form in add-user html:
-name:
input [(ngModel)]="userObject.name" similarly for email and phone
-subimit button
(click)="addUser(userObject)"

10.declare properties in add-user ts. file with inuput decorator:
@Input() userObject = {name:'',email:'',phone:0}

11.import and inject the Router and Crud service in add-user

12.create a method outside the ngOnInit() "addUser(data)":
  addUser(data:any){
    this.crudService.addUser(this.userObj)
      .subscribe((data:{}) => {
          this.router.navigate(['/list'])
      })
  }

--------------------------------list-user -------------------------------------
13.create table to list all the data in list-user.html

14.create actions buttons  in last-column of table in list
1..delete: (click)="delete(user.id)"
2..update: routerLink="/edit/{{user.id}}"

15.create Users of type arry:
Users:any= [];

16.create a method fetchUsers() the fetch all the users from the json-server api 
  fetchUsers(){
    return this.crudService.getUsers()
      .subscribe((res:{}) =>{
        this.Users = res;
      })
  }

17:create a delete(id) method in list-user compoent:
delete(id:any){
if(window.confirm('Really?')){
this.crudService.deleteUser(id).subscribe(res => {this.fetchUsers()})
}
}
----------------------------- update user -------------------------------

18. import and inject the crud service and ActivatedRoute class and Router class

19. create properties in edit-user component:
1..fetch the current url id :
id = this.activatedRoute.snapshot.params['id'];
2..create an object :
userObject:any={}

20.call the getSingleUser(id) and store the response in userObject


21.create a method updateUser(id,data)
-prompt the user and then call the service updateUser() and then redirect to list page

