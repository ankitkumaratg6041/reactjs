# What is JSX?

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML directly within JavaScript. JSX makes it easier to write and add HTML in React. It is used with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

Example:
```jsx
const element = <h1>Hello, world!</h1>;
```

# What is Component Composition?

Component composition is the process of combining multiple components to create a more complex UI. Instead of creating a large, monolithic component, you can break down the UI into smaller, reusable components and compose them together. This approach promotes reusability, maintainability, and separation of concerns.

Example:
```jsx
function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}
```

In this example, the `App` component is composed of three smaller components: `Header`, `MainContent`, and `Footer`.

# What is react component?
A React component is a reusable, self-contained piece of code that represents a part of the user interface (UI). Components are the building blocks of a React application. They allow you to break down the UI into smaller, manageable, and reusable pieces, making your code more modular, maintainable, and easier to understand.
<hr>

### Types of React Components
There are two main types of components in React:  

1. **Functional Components:**
    - These are JavaScript functions that return JSX (JavaScript XML).
    - They are simpler and more modern, and with the introduction of React Hooks, they can now manage state and lifecycle methods.
    - Example:
    ```jsx
    function Greeting() {
        return <h1>Hello, World!</h1>;
    }
    ```
2. **Class Components:**
    - These are ES6 classes that extend React.Component.
    - They have additional features like state and lifecycle methods.
    - Example:
    ```jsx
    class Greeting extends React.Component {
        render() {
            return <h1>Hello, World!</h1>;
            }
    }
    ```

# Key Features of React Components

## 1. **Reusability**
Components can be reused across different parts of the application or even in different projects.

**Example**: A `Button` component can be used in multiple places.

---

## 2. **Composability**
Components can be nested inside other components to build complex UIs.

**Example**: A `Header` component can contain a `Navbar` component and a `SearchBar` component.

---

## 3. **State and Props**
### **State**
- Internal data that a component manages.
- It can change over time, and when it does, the component re-renders.

### **Props**
- Short for "properties," these are inputs passed to a component from its parent.
- Props are immutable (cannot be changed by the component).

---

## 4. **Lifecycle Methods (Class Components)
Methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` allow you to run code at specific stages of a component's life.

---

## 5. **Hooks (Functional Components)**
Hooks like `useState`, `useEffect`, and `useContext` allow functional components to manage state and lifecycle events.

---
