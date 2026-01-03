import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Edit } from './edit/edit';
import { editgaurdGuard } from './Gaurd/editgaurd-guard';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'about',component:About},
    {path:'edit',component:Edit, canDeactivate:[editgaurdGuard]},
];
