import { Routes } from '@angular/router';
import { DefaultComponent } from './shared/layouts/default/default.component';
import { LoginComponent } from './pages/login/login.component';
import { MasterComponent } from './shared/layouts/master/master.component';
import { TodoComponent } from './pages/todo/todo.component';
import { guestGuard } from './core/guards/guest.guard';
import { authGuard } from './core/guards/auth.guard';
import { BannerComponent } from './pages/banner/banner.component';
import { NewsComponent } from './pages/news/news.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [guestGuard],
    children: [{ path: '', component: LoginComponent }],
  },
  {
    path: '',
    component: MasterComponent,
    canActivate: [authGuard],
    children: [{ path: 'todo', component: TodoComponent }],
  },
  {
    path: '',
    component: MasterComponent,
    canActivate: [authGuard],
    children: [{ path: 'banner', component: BannerComponent }],
  },
  {
    path: '',
    component: MasterComponent,
    canActivate: [authGuard],
    children: [{ path: 'news', component: NewsComponent }],
  },
];
