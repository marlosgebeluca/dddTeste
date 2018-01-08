import { JsonController, Get, Post, Put, Param, Delete, Body, OnUndefined, QueryParams } from 'routing-controllers';
import { CnNegociosNotFoundError } from '../../../app/errors/cnNegocios/CnNegociosNotFoundError';
import { NegocioService } from '../../../domain/services/cnNegocios/NegocioService';
import { Negocio } from '../../../domain/entities/cnNegocios/Negocio';

@JsonController('/negocio')
export class NegocioController {
  constructor(
    private negocioService: NegocioService
  ) { }

  @Get()
  public find(@QueryParams() params: any[]): Promise<Negocio[]> {
    return this.negocioService.find(params);
  }

  @Get('/:cnCodigo')
  @OnUndefined(CnNegociosNotFoundError)
  public one( @Param('cnCodigo') cnCodigo: number): Promise<Negocio | undefined> {
    return this.negocioService.findOne(cnCodigo);
  }

  @Post()
  public create( @Body() negocio: Negocio): Promise<Negocio> {
    return this.negocioService.create(negocio);
  }

  @Put('/:cnCodigo')
  public update( @Param('cnCodigo') cnCodigo: number, @Body() negocio: Negocio): Promise<Negocio> {
    return this.negocioService.update(cnCodigo, negocio);
  }

  @Delete('/:cnCodigo')
  public delete( @Param('cnCodigo') cnCodigo: number): Promise<void> {
    return this.negocioService.delete(cnCodigo);
  }
}
