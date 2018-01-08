import * as moment from 'moment';
import { GraphQLScalarType, GraphQLError, Kind } from 'graphql';

export const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  serialize(value: Date): string {
    const date = moment(value);

    if (!date.isValid()) {
      throw new GraphQLError('Field serialize error: value is an invalid Date');
    }

    return date.format();
  },
  parseValue(value: string): Date {
    const date = moment(value);

    if (!date.isValid()) {
      throw new GraphQLError('Field parse error: value is an invalid Date');
    }

    return date.toDate();
  },
  parseLiteral(ast: Kind.STRING): Date {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError('Query error: Can only parse strings to date but got: ' + ast.kind);
    }

    const date = moment(ast.value);

    if (!date.isValid()) {
      throw new GraphQLError('Query error: Invalid date');
    }

    return date.toDate();
  },
});

