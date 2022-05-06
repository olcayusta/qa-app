import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from '@auth/auth.guard';
import { LoggedGuard } from '@auth/logged.guard';
import { TagsResolver } from './tags/resolvers/tags.resolver';
import { listRoutes } from '@modules/list/list.routes';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: async () => (await import('./home/home.module')).HomeModule
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.routes').then((m) => m.ROUTES)
      },
      {
        path: 'tags',
        loadChildren: () => import('./tags/tags.routes').then((m) => m.ROUTES)
      },
      {
        path: 'tag/:tagId',
        loadChildren: async () => (await import('@modules/tag/tag.module')).TagModule
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.routes').then((mod) => mod.routes)
      },
      {
        path: 'settings',
        loadChildren: () => import('./modules/settings/settings.routes').then((mod) => mod.ROUTES),
        canLoad: [AuthGuard]
      },
      {
        path: 'list',
        loadChildren: () => import('./modules/list/list.routes').then((mod) => mod.listRoutes)
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
        loadChildren: async () => (await import('@modules/question/question.module')).QuestionModule
      },
      {
        path: 'questions/create',
        loadChildren: () => import('./create-question/create-question.routes').then((mod) => mod.routes)
      },
      {
        path: 'edit',
        loadChildren: async () => (await import('@modules/edit/edit.module')).EditModule
      },
      {
        path: 'favorites',
        loadChildren: async () => (await import('@modules/favorites/favorites.module')).FavoritesModule
      },
      {
        path: 'help',
        loadChildren: () => import('./modules/help/help.routes').then(({ ROUTES }) => ROUTES)
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
