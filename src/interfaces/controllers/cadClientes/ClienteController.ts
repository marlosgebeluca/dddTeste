import { JsonController, Get, Post, Put, Param, Delete, Body, OnUndefined, QueryParams } from 'routing-controllers';
import { CadClientesNotFoundError } from '../../../app/errors/cadClientes/CadClientesNotFoundError';
import { ClienteService } from '../../../domain/services/cadClientes/ClienteService';
import { Cliente } from '../../../domain/entities/cadClientes/Cliente';

@JsonController('/cliente')
export class ClienteController {
  constructor(
    private clienteService: ClienteService
  ) { }

  @Get()
  public find(@QueryParams() params: any[]): Promise<Cliente[]> {
    return this.clienteService.find(params);
  }

  @Get('/:cliCodigo')
  @OnUndefined(CadClientesNotFoundError)
  public one( @Param('cliCodigo') cliCodigo: number): Promise<Cliente | undefined> {
    return this.clienteService.findOne(cliCodigo);
  }

  @Post()
  public create( @Body() cliente: Cliente): Promise<Cliente> {
    return this.clienteService.create(cliente);
  }

  @Put('/:cliCodigo')
  public update( @Param('cliCodigo') cliCodigo: number, @Body() cliente: Cliente): Promise<Cliente> {
    return this.clienteService.update(cliCodigo, cliente);
  }

  @Delete('/:cliCodigo')
  public delete( @Param('cliCodigo') cliCodigo: number): Promise<void> {
    return this.clienteService.delete(cliCodigo);
  }
}
