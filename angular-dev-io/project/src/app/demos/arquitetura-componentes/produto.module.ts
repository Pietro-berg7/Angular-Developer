import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoDetalheComponent } from './components/produto-card-detalhe.component';
import { ProdutoCountComponent } from './components/produto-count.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoAppComponent } from './produto.app.component';

@NgModule({
  declarations: [
    ProdutoAppComponent,
    ProdutoDashboardComponent,
    ProdutoDetalheComponent,
    ProdutoCountComponent,
    EditarProdutoComponent,
  ],
  imports: [CommonModule, ProdutoRoutingModule],
  exports: [],
})
export class ProdutoModule {}
