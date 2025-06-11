import { Routes } from '@angular/router';
import { HomeComponent } from './todo/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        redirectTo: '/'
    },
];
