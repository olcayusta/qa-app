import { Routes } from '@angular/router';
import { AuthGuard } from '@auth/auth.guard';
import { LoggedGuard } from '@auth/logged.guard';
import { settingsRoutes } from './settings/settings.routes';
import { searchRoutes } from './search/search.routes';
import { tagsRoutes } from './tags/tags.routes';
import { homeRoutes } from './home/home.routes';
import { createQuestionRoutes } from './create-question/create-question.routes';
import { pageNotFoundRoutes } from './page-not-found/page-not-found-routes';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./main/main.component').then((m) => m.MainComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./home/home.routes').then(({ homeRoutes }) => homeRoutes)
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.routes').then(c => c.USERS_ROUTES)
      },
      {
        path: 'tags',
        loadChildren: () => import('./tags/tags.routes').then(({ tagsRoutes }) => tagsRoutes)
      },
      {
        path: 'tag/:tagId',
        loadChildren: () => import('./tag/tag.routes').then(c => c.TAG_ROUTES)
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
        loadChildren: () => import('./list/list.routes').then(c => c.LIST_ROUTES)
      },
      {
        path: 'watched_tags',
        loadChildren: () => import('./watched-tags/watched-tags.routes').then(c => c.WATCHED_TAG_ROUTES)
      },
      {
        path: 'user/:userId',
        loadChildren: () => import('./user/user.routes').then(c => c.USER_ROUTES)
      },
      {
        path: 'question/:questionId',
        loadChildren: () => import('./question/question.routes').then(c => c.QUESTION_ROUTES)
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
        loadChildren: () => import('./help/help.routes').then(c => c.HELP_ROUTES)
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.routes').then(c => c.LOGIN_ROUTES),
    canLoad: [LoggedGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.routes').then(c => c.REGISTER_ROUTES),
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
      import('./page-internal-server-error/page-internal-server-error.routes').then(
        ({ pageInternalServerErrorRoutes }) => pageInternalServerErrorRoutes
      )
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found-routes').then(({ pageNotFoundRoutes }) => pageNotFoundRoutes)
  }
];
