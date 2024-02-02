import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { checkTutorialGuard } from "./providers/check-tutorial.guard";
import { notifGuard } from "./guards/notif/notif.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/tutorial",
    pathMatch: "full",
  },
  {
    path: "account",
    loadChildren: () =>
      import("./pages/account/account.module").then((m) => m.AccountModule),
  },
  {
    path: "support",
    loadChildren: () =>
      import("./pages/support/support.module").then((m) => m.SupportModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./pages/signup/signup.module").then((m) => m.SignUpModule),
  },
  // {
  //   path: "app",
  //   loadChildren: () =>
  //     import("./pages/tabs-page/tabs-page.module").then((m) => m.TabsModule),
  // },
  {
    path: "tutorial",
    loadChildren: () =>
      import("./pages/tutorial/tutorial.module").then((m) => m.TutorialModule),
    canMatch: [checkTutorialGuard],
  },
  {
    path: "home",
    loadChildren: () =>
      import("./modules/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./modules/profile/profile.module").then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: "info",
    loadChildren: () =>
      import("./modules/info/info.module").then((m) => m.InfoPageModule),
  },
  {
    path: "finance",
    loadChildren: () =>
      import("./modules/finance/finance.module").then(
        (m) => m.FinancePageModule
      ),
  },
  {
    path: "grade",
    loadChildren: () =>
      import("./modules/grade/grade.module").then((m) => m.GradePageModule),
  },
  {
    path: "app",
    loadChildren: () =>
      import("./modules/tabs/tabs.module").then((m) => m.TabsPageModule),
    // canActivate: [notifGuard],
  },
  {
    path: "login",
    loadChildren: () =>
      import("./modules/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "notification",
    loadChildren: () =>
      import("./modules/notification/notification.module").then(
        (m) => m.NotificationPageModule
      ),
  },
  {
    path: 'news-detail',
    loadChildren: () => import('./modules/news-detail/news-detail.module').then( m => m.NewsDetailPageModule)
  },
  {
    path: 'info-detail',
    loadChildren: () => import('./modules/info-detail/info-detail.module').then( m => m.InfoDetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
