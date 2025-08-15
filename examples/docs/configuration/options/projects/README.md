# Projects
## how has it been created?
* | PREVIOUS path,
  * `npx create-nx-workspace@latest projects`
* | this path,
  * `nx g @nx/js:lib main-project --directory=.` $ | prompt, "parent", jest
  * `nx g @nx/js:lib example-project --directory=examples` $ | prompt, "parent", jest

* Problems:
  * Problem1: it's properly created -- via -- SEVERAL nx projects -- because it generates SEVERAL "jest.config.js" 
    * Solution: TODO:
