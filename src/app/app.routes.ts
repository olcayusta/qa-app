import { Routes } from '@angular/router';
import { AuthGuard } from '@auth/auth.guard';
import { LoggedGuard } from '@auth/logged.guard';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./main/main.component'),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./home/home.routes')
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.routes')
      },
      {
        path: 'tags',
        loadChildren: () => import('./tags/tags.routes')
      },
      {
        path: 'tag/:tagId',
        loadChildren: () => import('./tag/tag.routes')
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.routes')
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.routes'),
        canLoad: [AuthGuard]
      },
      {
        path: 'list',
        loadChildren: () => import('./routes/list/list.routes')
      },
      {
        path: 'watched_tags',
        loadChildren: () => import('./watched-tags/watched-tags.routes')
      },
      {
        path: 'user/:userId',
        loadChildren: () => import('./user/user.routes')
      },
      {
        path: 'question/:questionId',
        loadChildren: () => import('./question/question.routes')
      },
      {
        path: 'questions/create',
        loadChildren: () => import('./create-question/create-question.routes')
      },
      {
        path: 'edit',
        loadChildren: () => import('./routes/edit/edit.routes')
      },
      {
        path: 'favorites',
        loadChildren: () => import('./routes/favorites/favorites.routes')
      },
      {
        path: 'help',
        loadChildren: () => import('./routes/help/help.routes')
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.routes'),
    canLoad: [LoggedGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.routes'),
    canLoad: [LoggedGuard]
  },
  {
    path: '404',
    loadChildren: () => import('./routes/page-not-found/page-not-found-routes')
  },
  {
    path: '500',
    loadChildren: () => import('./routes/page-internal-server-error/page-internal-server-error.routes')
  },
  {
    path: '**',
    loadChildren: () => import('./routes/page-not-found/page-not-found-routes')
  }
];
