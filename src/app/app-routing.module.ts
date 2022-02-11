import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await import('./home/home.module')).HomeModule,
      },
      {
        path: 'users',
        loadChildren: async () =>
          (await import('@modules/users/users.module')).UsersModule,
      },
      {
        path: 'tags',
        loadChildren: async () =>
          (await import('@modules/tags/tags.module')).TagsModule,
      },
      {
        path: 'tag/:tagId',
        loadChildren: async () =>
          (await import('@modules/tag/tag.module')).TagModule,
      },
      {
        path: 'search',
        loadChildren: async () =>
          (await import('@modules/search/search.module')).SearchModule,
      },
      {
        path: 'settings',
        loadChildren: async () =>
          (await import('@modules/settings/settings.module')).SettingsModule,
        canLoad: [AuthGuard],
      },
      {
        path: 'list',
        loadChildren: () =>
          import('@modules/list/list.module').then((value) => value.ListModule),
      },
      {
        path: 'user/:userId',
        loadChildren: () =>
          import('@modules/user/user.module').then((u) => u.UserModule),
      },
      {
        path: 'question/:questionId',
        loadChildren: () =>
          import('@modules/question/question.module').then(
            (q) => q.QuestionModule
          ),
      },
      {
        path: 'create',
        loadChildren: async () =>
          (await import('@modules/create-question/create-question.module'))
            .CreateQuestionModule,
      },
      {
        path: 'edit',
        loadChildren: async () =>
          (await import('@modules/edit/edit.module')).EditModule,
      },
      {
        path: 'favorites',
        loadChildren: async () =>
          (await import('@modules/favorites/favorites.module')).FavoritesModule,
      },
      {
        path: 'help',
        loadChildren: async () =>
          (await import('@modules/help/help.module')).HelpModule,
      },
    ],
  },
  {
    path: 'login',
    loadChildren: async () =>
      (await import('./auth/login/login.module')).LoginModule,
  },
  {
    path: 'register',
    loadChildren: async () =>
      (await import('./auth/register/register.module')).RegisterModule,
  },
  {
    path: '404',
    loadChildren: async () =>
      (await import('./modules/page-not-found/page-not-found.module'))
        .PageNotFoundModule,
  },
  {
    path: 'facebook',
    loadChildren: () =>
      import('./facebook/facebook.module').then((m) => m.FacebookModule),
  },
  {
    path: '**',
    loadChildren: async () =>
      (await import('./modules/page-not-found/page-not-found.module'))
        .PageNotFoundModule,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      urlUpdateStrategy: 'eager',
      enableTracing: false,
      scrollPositionRestoration: 'enabled',
      // scrollOffset: [0, 0]
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
