import { validate } from 'class-validator';
import { validarCpf, validarCnpj } from './../../../src/domain/validators/IsValidCpfCnpj';
import { gerarCPF, gerarCNPJ } from './../../../src/infra/database/factories/Calculo';

describe('CPFCNPJValidation', () => {
  test('Deve gerar um CPF válido', async (done) => {
    const cpf = gerarCPF().replace(/[^0-9]/g, '');
    expect(validarCpf(cpf)).toBeTruthy();
    done();
  });

  test('Deve gerar i, CNPJ válido', async (done) => {
    const cnpj = gerarCNPJ().replace(/[^0-9]/g, '');
    expect(validarCnpj(cnpj)).toBeTruthy();
    done();
  });
});
