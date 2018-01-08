import * as glob from 'glob';
import { MicroframeworkSettings, MicroframeworkLoader } from 'microframework';
import { env } from '../core/env';

export const serviceLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
  if (settings) {
    const patterns = env.app.dirs.services;

    patterns.forEach((pattern) => {
      glob(pattern, (err: any, files: string[]) => {
        for (const file of files) {
          require(file);
        }
      });
    });
  }
};
