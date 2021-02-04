import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',
      loadChildren: () => import('./_modules/home/home.module').then(m => m.HomeModule)
    },
    { path: 'users',
      loadChildren: () => import('./_modules/users/users.module').then(m => m.UsersModule)
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
