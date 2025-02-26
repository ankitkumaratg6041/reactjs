# What are the two types of export and import in ReactJS?

In ReactJS, there are two types of export and import:

1. **Named Exports and Imports**:
    - Named exports allow you to export multiple values from a module. You can import them using the same names in the importing module.
    - Example:
      ```javascript
      // In a module file
      export const myFunction = () => { ... };
      export const myVariable = 42;

      // In an importing file
      import { myFunction, myVariable } from './myModule';
      ```

2. **Default Exports and Imports**:
    - Default exports allow you to export a single value from a module. You can import it using any name in the importing module.
    - Example:
      ```javascript
      // In a module file
      const myFunction = () => { ... };
      export default myFunction;

      // In an importing file
      import myFunc from './myModule';
      ```

These two types of exports and imports provide flexibility in how you structure and use your modules in ReactJS.