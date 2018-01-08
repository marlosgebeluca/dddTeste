import { JsonController, Get, Post, Put, Param, Delete, Body, OnUndefined, QueryParams } from 'routing-controllers';
import { CadTelefonesNotFoundError } from '../../../app/errors/cadTelefones/CadTelefonesNotFoundError';
import { TelefoneService } from '../../../domain/services/cadTelefones/TelefoneService';
import { Telefone } from '../../../domain/entities/cadTelefones/Telefone';

@JsonController('/telefone')
export class TelefoneController {
  constructor(
    private telefoneService: TelefoneService
  ) { }

  @Get()
  public find(@QueryParams() params: any[]): Promise<Telefone[]> {
    return this.telefoneService.find(params);
  }

  @Get('/:foneCodigo')
  @OnUndefined(CadTelefonesNotFoundError)
  public one( @Param('foneCodigo') foneCodigo: number): Promise<Telefone | undefined> {
    return this.telefoneService.findOne(foneCodigo);
  }

  @Post()
  public create( @Body() telefone: Telefone): Promise<Telefone> {
    return this.telefoneService.create(telefone);
  }

  @Put('/:foneCodigo')
  public update( @Param('foneCodigo') foneCodigo: number, @Body() telefone: Telefone): Promise<Telefone> {
    return this.telefoneService.update(foneCodigo, telefone);
  }

  @Delete('/:foneCodigo')
  public delete( @Param('foneCodigo') foneCodigo: number): Promise<void> {
    return this.telefoneService.delete(foneCodigo);
  }
}
