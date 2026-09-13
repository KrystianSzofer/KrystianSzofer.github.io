import { Routes } from '@angular/router'
import { PageNotFound } from './page-not-found/page-not-found'
import { Home } from './home/home'

export const routes: Routes = [
    {
        path: 'home',
        title: 'Krystian Szofer',
        component: Home,
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: PageNotFound,
        title: 'Seite nicht gefunden',
    },
]
