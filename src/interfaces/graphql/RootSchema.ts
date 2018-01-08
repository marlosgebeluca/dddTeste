import { mergeSchemas } from 'graphql-tools';
import { CalculoSchema } from './CalculoSchema';
import { ApoliceSchema } from './ApoliceSchema';

export function buildSchema(): void {
  return mergeSchemas({
    schemas: [CalculoSchema(), ApoliceSchema()],
  });
}
