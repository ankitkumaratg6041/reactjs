# Types of testing (developer)
1. Unit Testing
2. Integration Testing
3. End to End Testing (e2e testing)
    - e2e requires different types of tools to do testing like: cyprus, puppeteer, selenium etc
    but developers mainly do the first 2 types of testing
<br><br>
## 1. Do I Need Additional Configuration to Use Jest?
✅ No, not always. You can install Jest and start using it right away without any extra setup if:

Your project is already set up with Create React App (CRA) or another framework that includes Jest.
You’re writing plain JavaScript (without JSX or TypeScript).
## 2. What Does "Additional Configuration" Mean?
That section is basically saying:

"Hey, Jest works by default, but if your project has special setups (like Babel, Webpack, Vite, TypeScript, etc.), then you might need extra configuration."

So, you’re right—this is not about choosing one option from the list, but rather checking if your project needs any of them.
## 3. What Each Additional Configuration Does
Let's break down what these sections actually mean:

### 3. Additional Configuration for Jest

Jest works out of the box for many setups, but depending on your project, you might need additional configurations. Here’s how to set up Jest with different tools:

| **Setup**         | **When You Need It** | **How to Configure** |
|------------------|--------------------|----------------------|
| **Babel**        | If you're using modern JavaScript (ES6+), JSX, or TypeScript. | Install `babel-jest` and configure `.babelrc`. |
| **Webpack/Vite** | If your project uses Webpack/Vite for bundling (Jest doesn’t use them by default). | Adjust Jest's `transform` settings or use `jest-webpack` plugins. |
| **Parcel**       | If your project uses Parcel as the build tool. | Use `jest-transform-stub` or configure Jest’s `moduleNameMapper`. |
| **TypeScript**   | If your project is written in TypeScript. | Install `ts-jest` or use Babel with `@babel/preset-typescript`. |
| **ESLint**       | If you want Jest to follow ESLint rules in your tests. | Configure Jest in `.eslintrc.js` under `overrides`. |

Make sure to follow the appropriate setup based on your project's needs.

## 4. Do You NEED Babel for Jest?
✅ Only if you’re using modern JS (ES6+, JSX, TypeScript).
❌ Not needed if your code is just basic JavaScript that Node.js understands.
## 5. What Should You Do?
If your React app has JSX (<div>Hello</div>) → You need Babel.
If you're using modern JavaScript (import/export, optional chaining, etc.) → You need Babel.
If you use TypeScript → You need Babel or ts-jest.
If you're using only basic JavaScript (without JSX or modern features) → You don’t need Babel.
<br><br><hr>
# Librarires for testing
1. React Testing Library : built on top od DOM Testing Library by adding APIs for working with React Components
    ```jsx
    npm i -D @testing-library/react
    ```
2. JEST: the react testing library uses Jest behind the scene and Jest is now a standard for writing test cases in many companies
    ```jsx
    npm i -D jest
    ```
3. Install Babel dependencies: so we need some dependencies to be able to use babel along with jest so run the following command 
    ```jsx
    npm install --save-dev babel-jest @babel/core @babel/preset-env
    ```
4. Configure babel: After this command we need to make a **babel.config.js** file on the root level to write a configuration code for babel
5. Now we need to configure parcel accordingly to be able to use Babel for both parcel and jest so go to **.parcelrc** file and then disable the default babel transpilation which will help enable use to use our own babel configuration file
6. Configure Jest: 
    ```jsx
    npx jest --init
    ```
7. Install JSDOM Library: we need this for testing because for testing we don't run the app on our browser so jsdom gives our app an environment when it can run the app for testing purposes
    ```jsx
    npm install --save-dev jest-environment-jsdom
    ```
8. Install @babel/preset-react: to be able to render jsx component for testing in jsdom
    ```jsx
        npm i -d @babel/preset-react
    ```
9. Install @testing-library/jest-dom
    ```jsx
        npm i -d @testing-library/jest-dom
    ```


<br><br>

# Why Do You Need to Install Babel Again for Jest When Parcel Already Uses It?
Even though Parcel uses Babel internally for bundling your React app, Jest doesn’t use Parcel to run tests—Jest runs in a Node.js environment, and Parcel's Babel setup doesn’t automatically apply to Jest.

## 1. Parcel and Babel (For Your App)
When you build your React app using Parcel, it automatically sets up Babel for you to transpile JSX and modern JavaScript to something browsers can understand.

This works only for your app running in the browser, not for Jest.
## 2. Jest Doesn’t Use Parcel
Jest doesn’t know or care that you’re using Parcel—it just runs test files in Node.js, which doesn’t understand JSX or ES6 import/export.

Since Parcel isn’t involved in testing, Jest needs Babel separately to handle modern syntax in tests.
That’s why you have to install babel-jest and configure Babel manually.
## 3. Why Can’t Jest Just Use Parcel’s Babel Config?
Parcel’s Babel config is not automatically available outside of the bundling process. Jest doesn’t run your app—it runs test files in a different environment, so it needs its own Babel config.

Even though Parcel has Babel, it doesn’t expose a way for Jest to use it directly. That’s why we install Babel-related dependencies separately for Jest.


