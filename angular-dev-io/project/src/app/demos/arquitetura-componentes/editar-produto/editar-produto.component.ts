import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
})
export class EditarProdutoComponent implements OnInit {
  produto: Produto = {
    id: 0,
    nome: '',
    ativo: false,
    valor: 0,
    imagem: '',
  };

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const produtoId = params['id'];
      const produtoEncontrado = this.produtoService.obterPorId(produtoId);

      if (produtoEncontrado) {
        this.produto = produtoEncontrado;
      }
    });
  }
}
