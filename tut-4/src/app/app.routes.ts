import { Routes } from '@angular/router';
import { User } from './user/user';
import { UserDetails } from './user-details/user-details';

export const routes: Routes = [
    {path:'',component:User},
    {path:'user/:id',component:UserDetails}
];
