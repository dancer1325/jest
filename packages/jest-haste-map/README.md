# jest-haste-map

* == module
  * create a fast lookup of files | project
    * == modules' dependencies
  * allows
    * | testing, 
      * Jest can locate & track changes | files
  * use cases
    * large projects / MANY files
  * uses
    * internally | Jest

## why jest-haste-map ?

- **Parallel crawling and analysis**
  - ==
    - crawls the entire project, 
    - extracts dependencies,
    - analyzes files | parallel ACROSS worker processes
  - -> improve the map building process's performance
- **Cached file system**
  - | memory & disk
  - allows
    - fast file related operations
      - _Example:_ resolve module imports & check for changes
- **Minimal work**
  - == | change files, 
    - does the minimal amount of work
  * if you have installed watchman -> Jest will ask watchman -- for -- changed files
    * != crawl the file system
- **File system watching:**
  * uses
    * build interactive tools 
      * _Example:_ watch mode

## Installation

```bash
npm install jest-haste-map --save-dev
```

```bash
yarn add jest-haste-map --dev
```

## usage

* compatible with `ES modules` & `CommonJS`
* `new HasteMap.default({options})`
  * SIMPLEST usage

### options

| Option                 | Type                | Required | Default Value |
| ---------------------- | ------------------- | -------- | ------------- |
| cacheDirectory         | string              | No       | `os.tmpdir()` |
| computeDependencies    | boolean             | No       | `true`        |
| computeSha1            | boolean             | No       | `false`       |
| console                | Console             | No       | -             |
| dependencyExtractor    | string \| null      | No       | `null`        |
| enableSymlinks         | boolean             | No       | `false`       |
| extensions             | Array&lt;string&gt; | Yes      | -             |
| forceNodeFilesystemAPI | boolean             | Yes      | -             |
| hasteImplModulePath    | string              | Yes      | -             |
| hasteMapModulePath     | string              | Yes      | -             |
| id                     | string              | Yes      | -             |
| ignorePattern          | HasteRegExp         | No       | -             |
| maxWorkers             | number              | Yes      | -             |
| mocksPattern           | string              | No       | -             |
| platforms              | Array&lt;string&gt; | Yes      | -             |
| resetCache             | boolean             | No       | -             |
| retainAllFiles         | boolean             | Yes      | -             |
| rootDir                | string              | Yes      | -             |
| roots                  | Array&lt;string&gt; | Yes      | -             |
| skipPackageJson        | boolean             | Yes      | -             |
| throwOnModuleCollision | boolean             | Yes      | -             |
| useWatchman            | boolean             | No       | `true`        |
