import { JsonController, Get, Post, Put, Param, Delete, Body, QueryParams } from 'routing-controllers';
import { Inject } from 'typedi';

@JsonController('/apolice')
export class ApoliceController {
  private apoliceService: IApoliceService;

  constructor(
    @Inject('apolice.service') apoliceService: IApoliceService
  ) {
    this.apoliceService = apoliceService;
  }

  @Get()
  public find( @QueryParams() params: any[]): Promise<IApolice[]> {
    return this.apoliceService.find(params);
  }

  @Get('/:docNumProposta')
  public one( @Param('docNumProposta') docNumProposta: number): Promise<IApolice | undefined> {
    return this.apoliceService.findOne(docNumProposta);
  }

  @Post()
  public create( @Body() apolice: IApolice): Promise<IApolice> {
    return this.apoliceService.create(apolice);
  }

  @Put('/:docNumProposta')
  public update( @Param('docNumProposta') docNumProposta: number, @Body() apolice: IApolice): Promise<IApolice> {
    return this.apoliceService.update(docNumProposta, apolice);
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
