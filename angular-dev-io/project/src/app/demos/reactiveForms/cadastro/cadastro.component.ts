import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Usuario } from './models/usuario';
import { cpfValidator } from './utils/cpf.validator';
import {
  DisplayMessage,
  GenericValidator,
  ValidationMessages,
} from './generic-form-validation';
import { Observable, fromEvent, merge } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements!: ElementRef[];

  cadastroForm: FormGroup = new FormGroup({});
  usuario: Usuario | undefined;
  formResult: string = '';

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator = new GenericValidator({});
  displayMessage: DisplayMessage = {};

  constructor(private fb: FormBuilder) {
    this.validationMessages = {
      nome: {
        required: 'O Nome é requerido',
        minlength: 'O Nome precisa ter no mínimo 2 caracteres',
        maxlength: 'O Nome precisa ter no máximo 150 caracteres',
      },
      cpf: {
        required: 'Informe o CPF',
        cpf: 'CPF em formato inválido',
      },
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido',
      },
      senha: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
      },
      senhaConfirmacao: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas não conferem',
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group(
      {
        nome: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(150),
          ],
        ],
        cpf: ['', [Validators.required, cpfValidator()]],
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

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements.map(
      (FormControl: ElementRef) => fromEvent(FormControl.nativeElement, 'blur')
    );
    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(
        this.cadastroForm
      );
    });
  }

  confirmacaoSenhaValidator(
    control: AbstractControl
  ): { [key: string]: any } | null {
    const senha = control.get('senha')?.value;
    const confirmacaoSenha = control.get('senhaConfirmacao')?.value;

    if (senha !== confirmacaoSenha) {
      return { equalTo: true };
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
