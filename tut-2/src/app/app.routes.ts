import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Users } from './dashboard/users/users';
import { Admin } from './dashboard/admin/admin';
import { chilAuthGuard } from './Gaurd/chil-auth-guard';

export const routes: Routes = [
    {
        path:'',redirectTo:'login',pathMatch:'full'
    },
    {
        path:'home',
        component:Home,
    },
    {
        path:'contact',
        component:Contact
    },
    {
        path:'about',
        component:About
    },
    {
        path:'login',
        component:Login
    },
    {
        path:'dashboard',
        component:Dashboard,
        canActivateChild:[chilAuthGuard],
        children:[
            {path:'users',component:Users},
            {path:'admin',component:Admin}
        ]
    }
];
