import {Worker as JestWorker} from 'jest-worker';

async function main() {
  const worker = new JestWorker(require.resolve('./worker'));
  const result = await worker.hello('Alice');
  console.log(result);
}

main();
