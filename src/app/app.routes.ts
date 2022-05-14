import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from '@auth/auth.guard';
import { LoggedGuard } from '@auth/logged.guard';
import { watchedTagsRoutes } from './watched-tags/watched-tags.routes';
import { settingsRoutes } from './settings/settings.routes';
import { searchRoutes } from './search/search.routes';
import { tagRoutes } from './tag/tag.routes';
import { tagsRoutes } from './tags/tags.routes';
import { usersRoutes } from './users/users.routes';
import { homeRoutes } from './home/home.routes';
import { createQuestionRoutes } from './create-question/create-question.routes';
import { pageNotFoundRoutes } from './page-not-found/page-not-found-routes';

export const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./home/home.routes').then(({ homeRoutes }) => homeRoutes)
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.routes').then(({ usersRoutes }) => usersRoutes)
      },
      {
        path: 'tags',
        loadChildren: () => import('./tags/tags.routes').then(({ tagsRoutes }) => tagsRoutes)
      },
      {
        path: 'tag/:tagId',
        loadChildren: () => import('./tag/tag.routes').then(({ tagRoutes }) => tagRoutes)
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.routes').then(({ searchRoutes }) => searchRoutes)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.routes').then(({ settingsRoutes }) => settingsRoutes),
        canLoad: [AuthGuard]
      },
      {
        path: 'list',
        loadChildren: () => import('./list/list.routes').then(({ listRoutes }) => listRoutes)
      },
      {
        path: 'watched_tags',
        loadChildren: () =>
          import('./watched-tags/watched-tags.routes').then(({ watchedTagsRoutes }) => watchedTagsRoutes)
      },
      {
        path: 'user/:userId',
        loadChildren: () => import('./user/user.routes').then(({ userRoutes }) => userRoutes)
      },
      {
        path: 'question/:questionId',
        loadChildren: () => import('./question/question.routes').then(({ questionRoutes }) => questionRoutes)
      },
      {
        path: 'questions/create',
        loadChildren: () =>
          import('./create-question/create-question.routes').then(({ createQuestionRoutes }) => createQuestionRoutes)
      },
      {
        path: 'edit',
        loadChildren: () => import('./edit/edit.routes').then(({ editRoutes }) => editRoutes)
      },
      {
        path: 'favorites',
        loadChildren: () => import('./favorites/favorites.routes').then(({ favoritesRoutes }) => favoritesRoutes)
      },
      {
        path: 'help',
        loadChildren: () => import('./help/help.routes').then(({ helpRoutes }) => helpRoutes)
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.routes').then(({ loginRoutes }) => loginRoutes),
    canLoad: [LoggedGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.routes').then(({ registerRoutes }) => registerRoutes),
    canLoad: [LoggedGuard]
  },
  {
    path: '404',
    loadChildren: () =>
      import('./page-not-found/page-not-found-routes').then(({ pageNotFoundRoutes }) => pageNotFoundRoutes)
  },
  {
    path: '500',
    loadChildren: () =>
      import('./modules/page-internal-server-error/page-internal-server-error.routes').then(
        ({ pageInternalServerErrorRoutes }) => pageInternalServerErrorRoutes
      )
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found-routes').then(({ pageNotFoundRoutes }) => pageNotFoundRoutes)
  }
];
