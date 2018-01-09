import { JsonController, Get, Post, Put, Param, Delete, Body, QueryParams, UseAfter } from 'routing-controllers';
import { Inject } from 'typedi';
import { EndossoMiddleware } from '../../app/middlewares/EndossoMiddleware';

@JsonController('/endosso')
@UseAfter(EndossoMiddleware)
export class EndossoController {
  private endossoService: IEndossoService;

  constructor(
    @Inject('endosso.service') endossoService: IEndossoService
  ) {
    this.endossoService = endossoService;
  }

  @Get()
  public find( @QueryParams() params: any[]): Promise<IEndosso[]> {
    return this.endossoService.find(params);
  }

  @Get('/:docNumProposta')
  public one( @Param('docNumProposta') docNumProposta: number): Promise<IEndosso | undefined> {
    return this.endossoService.findOne(docNumProposta);
  }

  @Post()
  public create( @Body() endosso: IEndosso): Promise<IEndosso> {
    return this.endossoService.create(endosso);
  }

  @Put('/:docNumProposta')
  public update( @Param('docNumProposta') docNumProposta: number, @Body() endosso: IEndosso): Promise<IEndosso> {
    return this.endossoService.update(docNumProposta, endosso);
  }

  @Delete('/:docNumProposta')
  public delete( @Param('docNumProposta') docNumProposta: number): Promise<string> {
    return this.endossoService.delete(docNumProposta);
  }
}
