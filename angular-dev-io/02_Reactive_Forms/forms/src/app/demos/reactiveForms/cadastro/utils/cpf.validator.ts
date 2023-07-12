import { AbstractControl, ValidatorFn } from '@angular/forms';

export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const cpf = control.value;

    if (!cpf) {
      return null;
    }

    const cleanedCPF = cpf.replace(/\D/g, '');

    if (cleanedCPF.length !== 11) {
      return { cpf: true };
    }

    if (/^(\d)\1+$/.test(cleanedCPF)) {
      return { cpf: true };
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cleanedCPF.charAt(i)) * (10 - i);
    }
    let digit = 11 - (sum % 11);
    if (digit >= 10) {
      digit = 0;
    }

    if (parseInt(cleanedCPF.charAt(9)) !== digit) {
      return { cpf: true };
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cleanedCPF.charAt(i)) * (11 - i);
    }
    digit = 11 - (sum % 11);
    if (digit >= 10) {
      digit = 0;
    }

    if (parseInt(cleanedCPF.charAt(10)) !== digit) {
      return { cpf: true };
    }

    return null;
  };
}
