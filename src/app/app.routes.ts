import { Routes } from '@angular/router';
import { AuthGuard } from '@auth/auth.guard';
import { LoggedGuard } from '@auth/logged.guard';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./main/main.component').then(c => c.MainComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./home/home.routes').then(c => c.HOME_ROUTES)
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.routes').then(c => c.USERS_ROUTES)
      },
      {
        path: 'tags',
        loadChildren: () => import('./tags/tags.routes').then(c => c.TAGS_ROUTES)
      },
      {
        path: 'tag/:tagId',
        loadChildren: () => import('./tag/tag.routes').then(c => c.TAG_ROUTES)
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.routes').then(c => c.SEARCH_ROUTES)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.routes').then(c => c.SETTINGS_ROUTES),
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
        loadChildren: () => import('./create-question/create-question.routes').then(c => c.CREATE_QUESTION_ROUTES)
      },
      {
        path: 'edit',
        loadChildren: () => import('./edit/edit.routes').then(c => c.EDIT_ROUTES)
      },
      {
        path: 'favorites',
        loadChildren: () => import('./favorites/favorites.routes').then(c => c.FAVORITES_ROUTES)
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
    loadChildren: () => import('./page-not-found/page-not-found-routes').then(c => c.PAGE_NOT_FOUND_ROUTES)
  },
  {
    path: '500',
    loadChildren: () => import('./page-internal-server-error/page-internal-server-error.routes').then(c => c.PAGE_INTERNAL_SERVER_ERROR_ROUTES)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found-routes').then(c => c.PAGE_NOT_FOUND_ROUTES)
  }
];
