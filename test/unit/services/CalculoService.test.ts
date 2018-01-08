import { CalculoService } from '../../../src/app/services/CalculoService';
import { CalculoRepository } from '../../../src/infra/repositories/CalculoRepository';
import { Calculo } from '../../../src/domain/entities/Calculo';
import { Segurado } from '../../../src/domain/entities/Segurado';
import { events } from '../../../src/app/subscribers/events';
import { LogMock } from '../lib/LogMock';
import { RepositoryMock } from '../lib/RepositoryMock';
import { EventDispatcherMock } from '../lib/EventDispatcherMock';

describe('CalculoService', () => {
  test('Deve retornar uma lista de cálculos', async (done) => {
    const log = new LogMock();
    const repo = new RepositoryMock();
    const ed = new EventDispatcherMock();
    const calculo = new Calculo();
    calculo.segurado = new Segurado();
    calculo.segurado.nome = 'Aristides';
    repo.list = [calculo];
    const calculoService = new CalculoService(repo as any, ed as any, log);
    const list = await calculoService.find();
    expect(list[0].segurado.nome).toBe(calculo.segurado.nome);
    done();
  });

  test('Criação deve disparar subscribers', async (done) => {
    const log = new LogMock();
    const repo = new RepositoryMock();
    const ed = new EventDispatcherMock();
    const calculo = new Calculo();
    calculo.segurado = new Segurado();
    calculo.segurado.nome = 'Aristides';
    const calculoService = new CalculoService(repo as any, ed as any, log);
    const novoCalculo = await calculoService.create(calculo);
    expect(ed.dispatchMock).toBeCalledWith([events.calculo.created, novoCalculo]);
    done();
  });
});
