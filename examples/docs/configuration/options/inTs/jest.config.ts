import type {Config} from 'jest';
import {defaults} from 'jest-config';

const config: Config = {
  moduleDirectories: [...defaults.moduleDirectories, 'bower_components'],
};

console.log("configuration - options - config ", config);
export default config;
