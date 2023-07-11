import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Usuario } from './models/usuario';
import { cpfValidator } from './utils/cpf.validator';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup = new FormGroup({});
  usuario: Usuario | undefined;
  formResult: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cadastroForm = this.fb.group(
      {
        nome: ['', Validators.required],
        cpf: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        senha: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(15),
          ],
        ],
        senhaConfirmacao: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(15),
          ],
        ],
      },
      { validator: this.confirmacaoSenhaValidator }
    );
  }

  confirmacaoSenhaValidator(
    control: AbstractControl
  ): { [key: string]: any } | null {
    const senha = control.get('senha')?.value;
    const confirmacaoSenha = control.get('senhaConfirmacao')?.value;

    if (senha !== confirmacaoSenha) {
      return { senhaNaoCoincide: true };
    }

    return null;
  }

  adicionarUsuario() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.formResult = JSON.stringify(this.cadastroForm.value);
    } else {
      this.formResult = 'Não submeteu!!!';
    }
  }
}
