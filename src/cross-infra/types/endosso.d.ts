interface IEndossoService extends ICrudService { }

interface IEndossoRepository extends ICrudRepository { }

interface IEndosso extends IApolice {
  docTipoMovto?: string;
  docPropApolice?: number;
  numeroEndosso?: string;
  docEndosso2?: string;
  flgProbEndosso?: string;
}


interface Endosso extends IEndosso { }

interface EndossoConstructor {
  new(): Endosso;
}

declare const Endosso: EndossoConstructor;
