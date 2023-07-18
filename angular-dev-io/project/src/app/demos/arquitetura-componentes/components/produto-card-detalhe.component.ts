import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Produto } from '../models/produto';

@Component({
  selector: 'produto-card-detalhe',
  templateUrl: './produto-card-detalhe.component.html',
})
export class ProdutoDetalheComponent {
  @Input()
  produto: Produto = {
    id: 0,
    nome: '',
    ativo: false,
    valor: 0,
    imagem: '',
  };

  @Output()
  status: EventEmitter<any> = new EventEmitter();

  emitirEvento(): void {
    this.status.emit(this.produto);
  }
}
