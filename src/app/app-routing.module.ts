import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'delivery-successful', loadChildren: './delivery-successful/delivery-successful.module#DeliverySuccessfulPageModule' },
  { path: 'image-popup', loadChildren: './image-popup/image-popup.module#ImagePopupPageModule' },
  { path: 'order-details/:id', loadChildren: './order-details/order-details.module#OrderDetailsPageModule' },
  // { path: 'confirmation-popup', loadChildren: './confirmation-popup/confirmation-popup.module#ConfirmationPopupPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
