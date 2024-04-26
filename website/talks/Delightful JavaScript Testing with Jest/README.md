* [Youtube](https://www.youtube.com/watch?v=cAKYQpTC7MA)

# Introduction
* Contributors in Jest
  * come from
    * open contributors &
    * FB employees
  * work simultaneously in
    * [Metro](https://metrobundler.dev/)
      * JS bundler for React Native
    * Jest
    * [Yarn](https://classic.yarnpkg.com/en/)
      * JS dependency management
* Main characteristics to have for these projects
  * performance
  * features
  * usability
* [Kind of bug bounty program](https://opencollective.com/jest)

# Writing meaningful tests
* Testing ROI (Return On Investment)
  * 'roiTestingVsTimeSpent.png' & 'roiTestingVsTypeOfTests.png'
  * sweet spot == balance line
* Testing depends on the project
  * _Example:_ 
    * 'exampleAppDesign.png' -- several modules, connections between them, .. --
    * 'exampleHowToTestSpecificModule.png'
      * 'exampleIsolation.png'
      * 'exampleIntegration.png'
      * 'exampleIntegrationMock.png'
      * 'exampleIntegrationMockSomethingElse.png'
## What makes a good test?
* Characteristics
  * runs fast
  * does NOT break often
  * easy to read / understand
  * catch bugs
  * good coverage vs effort ratio
## Testing strategies
* You make mistakes previously to find the good test -- 'testingStrategyPreviousMistakes.png' --
* General principles
  * Testing UI is pretty hard -- Reasons: browser dependency, sync and async, ... --
  * Mocking too much reduces test quality
  * More isolation == fewer bugs caught
* Test structure
  * setup initial state
  * dispatch an action
  * expect data to change
* Avoid wondering continuously the test categories OR categories and write your tests
  * 'avoidWonderingContinuously.png'
  * 'abstractionsInOtherAreas.png'
## Keep tests clean == meaningful tests
* Ways to get it
  * share test utilities
  * generation of test templates
  * lint rules
  * documentation

# Blazing fast snapshot testing in Jest23
* New snapshot features
  * better snapshot summaries
  * interactive snapshot mode
  * property matchers

* TODO: https://www.youtube.com/watch?v=cAKYQpTC7MA
