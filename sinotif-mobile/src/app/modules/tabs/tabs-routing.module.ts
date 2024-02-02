import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";
import { HomePage } from "../home/home.page";
import { notifGuard } from "../../guards/notif/notif.guard";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "home",
        children: [
          {
            path: "",
            component: HomePage,
          },
        ],
        // canActivate: [notifGuard],
      },
      // {
      //   path: "speakers",
      //   children: [
      //     {
      //       path: "",
      //       loadChildren: () =>
      //         import("../speaker-list/speaker-list.module").then(
      //           (m) => m.SpeakerListModule
      //         ),
      //     },
      //     {
      //       path: "session/:sessionId",
      //       loadChildren: () =>
      //         import("../session-detail/session-detail.module").then(
      //           (m) => m.SessionDetailModule
      //         ),
      //     },
      //     {
      //       path: "speaker-details/:speakerId",
      //       loadChildren: () =>
      //         import("../speaker-detail/speaker-detail.module").then(
      //           (m) => m.SpeakerDetailModule
      //         ),
      //     },
      //   ],
      // },
      {
        path: "grade",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../grade/grade.module").then((m) => m.GradePageModule),
          },
        ],
        canActivate: [notifGuard],
      },
      {
        path: "info",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../info/info.module").then((m) => m.InfoPageModule),
          },
          {
            path: ":notifId",
            loadChildren: () =>
              import("../info-detail/info-detail.module").then(
                (m) => m.InfoDetailPageModule
              ),
          },
        ],
        canActivate: [notifGuard],
      },
      {
        path: "finance",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../finance/finance.module").then(
                (m) => m.FinancePageModule
              ),
          },
        ],
        canActivate: [notifGuard],
      },
      // {
      //   path: "profile",
      //   children: [
      //     {
      //       path: "",
      //       loadChildren: () =>
      //         import("../profile/profile.module").then(
      //           (m) => m.ProfilePageModule
      //         ),
      //     },
      //   ],
      // },
      {
        path: "",
        redirectTo: "/app/tabs/home",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
