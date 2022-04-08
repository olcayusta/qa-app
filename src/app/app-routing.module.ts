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
        loadChildren: async () => (await import('./home/home.module')).HomeModule
      },
      {
        path: 'users',
        loadChildren: async () => (await import('@modules/users/users.module')).UsersModule
      },
      {
        path: 'tags',
        loadChildren: async () => (await import('@modules/tags/tags.module')).TagsModule
      },
      {
        path: 'tag/:tagId',
        loadChildren: async () => (await import('@modules/tag/tag.module')).TagModule
      },
      {
        path: 'search',
        loadChildren: async () => (await import('@modules/search/search.module')).SearchModule
      },
      {
        path: 'settings',
        loadChildren: async () =>
          (await import('@modules/settings/settings.module')).SettingsModule,
        canLoad: [AuthGuard]
      },
      {
        path: 'list',
        loadChildren: () => import('@modules/list/list.module').then((value) => value.ListModule)
      },
      {
        path: 'watched_tags',
        loadChildren: () =>
          import('./watched-tags/watched-tags.module').then((m) => m.WatchedTagsModule)
      },
      {
        path: 'user/:userId',
        loadChildren: () => import('@modules/user/user.module').then((u) => u.UserModule)
      },
      {
        path: 'question/:questionId',
        loadChildren: async () => (await import('@modules/question/question.module')).QuestionModule
      },
      {
        path: 'questions/create',
        loadChildren: async () =>
          (await import('@modules/create-question/create-question.module')).CreateQuestionModule
      },
      {
        path: 'edit',
        loadChildren: async () => (await import('@modules/edit/edit.module')).EditModule
      },
      {
        path: 'favorites',
        loadChildren: async () =>
          (await import('@modules/favorites/favorites.module')).FavoritesModule
      },
      {
        path: 'help',
        loadChildren: async () => (await import('@modules/help/help.module')).HelpModule
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
    loadChildren: async () =>
      (await import('./modules/page-not-found/page-not-found.module')).PageNotFoundModule
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
    loadChildren: async () =>
      (await import('./modules/page-not-found/page-not-found.module')).PageNotFoundModule
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
