import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'cardapio',
        children: [
          {
            path: '',
            loadChildren: () => import('../cardapio/cardapio-list/cardapio-list.module').then(m => m.CardapioListPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('../cardapio/cardapio-edit/cardapio-edit.module').then(m => m.CardapioEditPageModule)
          },
          {
            path: 'edit/:id',
            loadChildren: () => import('../cardapio/cardapio-edit/cardapio-edit.module').then(m => m.CardapioEditPageModule)
          }
        ]
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            loadChildren: () => import('../categories/category-list/category-list.module').then(m => m.CategoryListPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('../categories/category-edit/category-edit.module').then(m => m.CategoryEditPageModule)
          },
          {
            path: 'edit/:id',
            loadChildren: () => import('../categories/category-edit/category-edit.module').then(m => m.CategoryEditPageModule)
          }
        ]
      },
      {
        path: 'entrega',
          children: [
            {
              path: '',
              loadChildren: () => import('../entrega/entrega-list/entrega-list.module').then( m => m.EntregaListPageModule)
            },
            {
              path: 'new',
              loadChildren: () => import('../entrega/entrega-edit/entrega-edit.module').then( m => m.EntregaEditPageModule)
            },
            {
              path: 'edit/:id',
              loadChildren: () => import('../entrega/entrega-edit/entrega-edit.module').then( m => m.EntregaEditPageModule)
            }
        ]
      },
      {
        path: 'restaurante',
        children: [
          {
            path: '',
            loadChildren: () => import('../restaurante/restaurante-list/restaurante-list.module')
              .then( m => m.RestauranteListPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('../restaurante/restaurante-edit/restaurante-edit.module')
              .then( m => m.RestauranteEditPageModule)
          },
          {
            path: 'edit/:id',
            loadChildren: () => import('../restaurante/restaurante-edit/restaurante-edit.module')
              .then( m => m.RestauranteEditPageModule)
          }
        ]
      },
      {
        path: 'info',
        loadChildren: () => import('../restaurant/restaurant-info/restaurant-info.module').then( m => m.RestaurantInfoPageModule)
      },
      {
        path: 'orders',
        children: [
          {
            path: '',
            loadChildren: () => import('../orders/order-list/order-list.module').then( m => m.OrderListPageModule)
          },
          {
            path: ':status',
            loadChildren: () => import('../orders/order-list/order-list.module').then( m => m.OrderListPageModule)
          },
          {
            path: 'detail/:id',
            loadChildren: () => import('../orders/order-detail/order-detail.module').then( m => m.OrderDetailPageModule)
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
