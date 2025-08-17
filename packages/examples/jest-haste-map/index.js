import os from 'os';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import HasteMap from 'jest-haste-map';

// get ALL "*.js" files | the project
const root = dirname(fileURLToPath(import.meta.url));

// 1. new HasteMap.default({})
const map = new HasteMap.default({
  id: 'myproject', //Used for caching.
  extensions: ['js'], // Tells jest-haste-map to only crawl .js files.
  maxWorkers: os.availableParallelism(), //Parallelizes across all available CPUs.
  platforms: [], // This is only used for React Native, you can leave it empty.
  roots: [root], // Can be used to only search a subset of files within `rootDir`
  retainAllFiles: true,
  rootDir: root, //The project root.
});

const {hasteFS} = await map.build();

const files = hasteFS.getAllFiles();

console.log(files);
