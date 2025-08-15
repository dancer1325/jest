# @jest/types

* == Jest's packages shared types 
  * ⚠️!= ⚠️ 
    * [Jest globals](../jest-globals)
    * [@types/jest](https://npmjs.com/package/@types/jest)
      * == third party library
        * maintained -- by -- [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jest)
      * allows
        * omitting imports
        * specifying typed Jest config

          ```ts
          // jest.config.ts
          import type {Config} from '@jest/types';
          
          const config: Config.InitialOptions = {
            // some typed config
          };
          
          export default config;
          ```
