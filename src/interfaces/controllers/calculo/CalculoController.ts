// import { JsonController, Get, Post, Put, Param, Delete, Body, OnUndefined, Authorized } from 'routing-controllers';
import { JsonController, Get, Post, Put, Param, Delete, Body, OnUndefined } from 'routing-controllers';
import { CalculoNotFoundError } from '../../../app/errors/CalculoNotFoundError';
import { CalculoService } from '../../../domain/services/calculo/CalculoService';
import { Calculo } from '../../../domain/entities/calculo/Calculo';

// @Authorized()
@JsonController('/calculos')
export class CalculoController {
  constructor(
    private calculoService: CalculoService
  ) { }

  @Get()
  public find(): Promise<Calculo[]> {
    return this.calculoService.find();
  }

  @Get('/:calcNumero')
  @OnUndefined(CalculoNotFoundError)
  public one( @Param('calcNumero') calcNumero: number): Promise<Calculo | undefined> {
    return this.calculoService.findOne(calcNumero);
  }

  @Post()
  public create( @Body() calculo: Calculo): Promise<Calculo> {
    return this.calculoService.create(calculo);
  }

  @Put('/:calcNumero')
  public update( @Param('calcNumero') calcNumero: number, @Body() calculo: Calculo): Promise<Calculo> {
    return this.calculoService.update(calcNumero, calculo);
  }

  @Delete('/:calcNumero')
  public delete( @Param('calcNumero') calcNumero: number): Promise<void> {
    return this.calculoService.delete(calcNumero);
  }
}
