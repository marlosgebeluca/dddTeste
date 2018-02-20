import { JsonController, Get, Post, Put, Param, Delete, Body, QueryParams, UseAfter, HeaderParam } from 'routing-controllers';
import { Inject } from 'typedi';
import { ApoliceMiddleware } from '../../app/middlewares/ApoliceMiddleware';

@JsonController('/apolice')
@UseAfter(ApoliceMiddleware)
export class ApoliceController {
  private apoliceService: IApoliceService;

  constructor(
    @Inject('apolice.service') apoliceService: IApoliceService
  ) {
    this.apoliceService = apoliceService;
  }

  @Get()
  public find(@HeaderParam('gerarJson') gerarJson: boolean, @QueryParams() params: any): Promise<IApolice[]> {
    return this.apoliceService.find(params, gerarJson);
  }

  @Get('/:docNumProposta')
  public one(@HeaderParam('gerarJson') gerarJson: boolean, @Param('docNumProposta') docNumProposta: number): Promise<IApolice | undefined> {
    return this.apoliceService.findOne(docNumProposta, gerarJson);
  }

  @Post()
  public create(@HeaderParam('gerarJson') gerarJson: boolean, @Body() apolice: IApolice): Promise<IApolice> {
    return this.apoliceService.create(apolice, gerarJson);
  }

  @Put('/:docNumProposta')
  public update(@HeaderParam('gerarJson') gerarJson: boolean, @Param('docNumProposta') docNumProposta: number, @Body() apolice: IApolice): Promise<IApolice> {
    return this.apoliceService.update(docNumProposta, apolice, gerarJson);
  }

  @Delete('/:docNumProposta')
  public delete( @Param('docNumProposta') docNumProposta: number): Promise<string> {
    return this.apoliceService.delete(docNumProposta);
  }

  @Get('/renovar/:docNumProposta')
  public renovarApolice( @Param('docNumProposta') docNumProposta: number): Promise<IApolice> {
    return this.apoliceService.renovarApolice(docNumProposta);
  }

  @Post('/gerarEndosso/:docNumProposta')
  public gerarEndosso( @Param('docNumProposta') docNumProposta: number, @Body() endosso: IEndosso): Promise<IApolice> {
    return this.apoliceService.gerarEndosso(docNumProposta, endosso);
  }

  @Get('/:docNumProposta/endossos')
  public findEndossos( @Param('docNumProposta') docNumProposta: number): Promise<void> {
    return this.apoliceService.findEndossos(docNumProposta);
  }
}
