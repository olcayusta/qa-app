import { Routes } from '@angular/router';
import { AuthGuard } from '@auth/auth.guard';
import { LoggedGuard } from '@auth/logged.guard';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/main/main.component'),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./routes/home/home.routes')
      },
      {
        path: 'users',
        loadChildren: () => import('./routes/users/users.routes')
      },
      {
        path: 'tags',
        loadChildren: () => import('./routes/tags/tags.routes')
      },
      {
        path: 'tag/:tagId',
        loadChildren: () => import('./routes/tag/tag.routes')
      },
      {
        path: 'search',
        loadChildren: () => import('./routes/search/search.routes')
      },
      {
        path: 'settings',
        loadChildren: () => import('./routes/settings/settings.routes'),
        canLoad: [AuthGuard]
      },
      {
        path: 'list',
        loadChildren: () => import('./routes/list/list.routes')
      },
      {
        path: 'watched_tags',
        loadChildren: () => import('./routes/watched-tags/watched-tags.routes')
      },
      {
        path: 'user/:userId',
        loadChildren: () => import('./routes/user/user.routes')
      },
      {
        path: 'question/:questionId',
        loadChildren: () => import('./routes/question/question.routes')
      },
      {
        path: 'questions/create',
        loadChildren: () => import('./routes/create-question/create-question.routes')
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
        loadChildren: () => import('./pages/help/help.routes')
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.routes'),
    canLoad: [LoggedGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.routes'),
    canLoad: [LoggedGuard]
  },
  {
    path: '404',
    loadChildren: () => import('./pages/page-not-found/page-not-found-routes')
  },
  {
    path: '500',
    loadChildren: () => import('./pages/page-internal-server-error/page-internal-server-error.routes')
  },
  {
    path: '**',
    loadChildren: () => import('./pages/page-not-found/page-not-found-routes')
  }
];
