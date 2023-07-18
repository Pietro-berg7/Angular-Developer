import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoDetalheComponent } from './components/produto-card-detalhe.component';
import { ProdutoCountComponent } from './components/produto-count.component';

@NgModule({
  declarations: [
    ProdutoDashboardComponent,
    ProdutoDetalheComponent,
    ProdutoCountComponent,
  ],
  imports: [CommonModule, ProdutoRoutingModule],
  exports: [],
})
export class ProdutoModule {}
