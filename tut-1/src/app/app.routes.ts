import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { authgaurdGuard } from './authgaurd-guard';

export const routes: Routes = [
    
    {path:'',redirectTo:'login',pathMatch:"full"},

    {
        path:'dashboard',
        component:Dashboard,
        canActivate:[authgaurdGuard],
    },

    {
        path:'login',
        component:Login
    }

];
