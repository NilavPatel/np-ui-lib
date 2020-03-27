import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'np-ui-date-picker-demo',
    loadChildren: () => import('./np-ui-date-picker-demo/np-ui-date-picker-demo.module').then(m => m.NpUiDatePickerDemoModule)
  },
  {
    path: 'np-ui-time-picker-demo',
    loadChildren: () => import('./np-ui-time-picker-demo/np-ui-time-picker-demo.module').then(m => m.NpUiTimePickerDemoModule)
  },
  {
    path: 'np-ui-color-picker-demo',
    loadChildren: () => import('./np-ui-color-picker-demo/np-ui-color-picker-demo.module').then(m => m.NpUiColorPickerDemoModule)
  },
  {
    path: 'np-ui-data-grid-demo',
    loadChildren: () => import('./np-ui-data-grid-demo/np-ui-data-grid-demo.module').then(m => m.NpUiDataGridDemoModule)
  },
  {
    path: 'np-ui-switch-demo',
    loadChildren: () => import('./np-ui-switch-demo/np-ui-switch-demo.module').then(m => m.NpUiSwitchDemoModule)
  },
  {
    path: 'np-ui-notification-demo',
    loadChildren: () => import('./np-ui-notification-demo/np-ui-notification-demo.module').then(m => m.NpUiNotificationDemoModule)
  },
  {
    path: 'np-ui-auto-complete-demo',
    loadChildren: () => import('./np-ui-auto-complete-demo/np-ui-auto-complete-demo.module').then(m => m.NpUiAutoCompleteDemoModule)
  },
  {
    path: 'np-ui-panel-demo',
    loadChildren: () => import('./np-ui-panel-demo/np-ui-panel-demo.module').then(m => m.NpUiPanelDemoModule)
  },
  {
    path: '',
    redirectTo: 'np-ui-date-picker-demo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
