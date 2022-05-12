import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from '@auth/auth.guard';
import { LoggedGuard } from '@auth/logged.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./home/home.routes').then((mod) => mod.ROUTES)
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.routes').then((m) => m.UsersRoutes)
      },
      {
        path: 'tags',
        loadChildren: () => import('./tags/tags.routes').then((m) => m.ROUTES)
      },
      {
        path: 'tag/:tagId',
        loadChildren: () => import('./modules/tag/tag.routes').then((m) => m.routes)
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.routes').then((mod) => mod.routes)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.routes').then(({ ROUTES }) => ROUTES),
        canLoad: [AuthGuard]
      },
      {
        path: 'list',
        loadChildren: () => import('./list/list.routes').then((mod) => mod.listRoutes)
      },
      {
        path: 'watched_tags',
        loadChildren: () => import('./watched-tags/watched-tags.routes').then((mod) => mod.ROUTES)
      },
      {
        path: 'user/:userId',
        loadChildren: () => import('./user/user.routes').then((m) => m.ROUTES)
      },
      {
        path: 'question/:questionId',
        loadChildren: () => import('./modules/question/question.routes').then((mod) => mod.routes)
      },
      {
        path: 'questions/create',
        loadChildren: () => import('./create-question/create-question.routes').then((mod) => mod.routes)
      },
      {
        path: 'edit',
        loadChildren: () => import('./edit/edit.routes').then((value) => value.routes)
      },
      {
        path: 'favorites',
        loadChildren: () => import('./favorites/favorites.routes').then((mod) => mod.routes)
      },
      {
        path: 'help',
        loadChildren: () => import('./help/help.routes').then(({ ROUTES }) => ROUTES)
      }
    ]
  },
  {
    path: 'login',
    loadChildren: async () => (await import('./auth/login/login.module')).LoginModule,
    canLoad: [LoggedGuard]
  },
  {
    path: 'register',
    loadChildren: async () => (await import('./auth/register/register.module')).RegisterModule,
    canLoad: [LoggedGuard]
  },
  {
    path: '404',
    loadChildren: () => import('./modules/page-not-found/page-not-found-routes').then((mod) => mod.routes)
  },
  {
    path: '500',
    loadChildren: () =>
      import('./modules/page-internal-server-error/page-internal-server-error.module').then(
        (m) => m.PageInternalServerErrorModule
      )
  },
  {
    path: '**',
    loadChildren: () => import('./modules/page-not-found/page-not-found-routes').then((mod) => mod.routes)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      urlUpdateStrategy: 'eager',
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
