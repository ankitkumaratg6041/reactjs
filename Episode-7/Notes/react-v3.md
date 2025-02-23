# What is Monolith Architecture?

Monolith architecture is a traditional software development approach where all components of an application are integrated into a single, cohesive unit. This means that the user interface, business logic, and data access layers are all part of one codebase and are deployed together. While this can simplify development and deployment, it can also lead to challenges in scalability, maintainability, and flexibility as the application grows.

# What is micro-service architecture?

Micro-service architecture is a modern approach to software development where an application is composed of small, independent services that communicate over a network. Each service is responsible for a specific functionality and can be developed, deployed, and scaled independently. This allows for greater flexibility, easier maintenance, and improved scalability compared to monolith architecture. However, it also introduces complexity in terms of service coordination, data consistency, and network communication.
## Microservice Architecture strongly follows both the Single Responsibility Principle (SRP) and Separation of Concerns (SoC)

# What is single responsibility principle and separation of concerns?

These are two fundamental principles in software development that help you write clean, maintainable, and scalable code. Let me break them down for you in simple terms:

1. **Single Responsibility Principle (SRP)**
What It Means:  
**Definition**: A class, function, or module should have only one reason to change, meaning it should have only one job or responsibility.
**Goal**: Keep your code modular and focused. Each piece of code should do one thing and do it well.

Why It Matters:
**Easier to Understand**: When a function or class does only one thing, it’s easier to understand and debug.
**Easier to Maintain**: If you need to change something, you only need to modify one part of the code.
**Reusability**: Functions or classes with a single responsibility are more likely to be reusable in other parts of the application.

**Example**:
Imagine you’re building a restaurant app. Instead of having a single function that handles both fetching restaurant data and rendering it to the UI, you split it into two functions:
```javascript
// Bad: Violates SRP
function fetchAndRenderRestaurants() {
    // Fetch data
    const data = fetch('https://api.restaurants.com');
    // Render data
    render(data);
}

// Good: Follows SRP
function fetchRestaurants() {
    return fetch('https://api.restaurants.com');
}

function renderRestaurants(data) {
    render(data);
}
```
Here:
- ```fetchRestaurants``` is responsible only for fetching data.
- ```renderRestaurants``` is responsible only for rendering data.
---

2. **Separation of Concerns (SoC)**
What It Means:
**Definition**: Divide your application into distinct sections, where each section addresses a separate concern (e.g., UI, business logic, data fetching).
**Goal**: Keep different parts of your application independent and organized.

Why It Matters:
**Modularity**: Each part of the application can be developed, tested, and maintained independently.
**Scalability**: It’s easier to add new features or make changes without affecting other parts of the application.
**Collaboration**: Different team members can work on different parts of the application without stepping on each other’s toes.

**Example**:
In a React app, you might separate concerns like this:
- **UI Components**: Handle how things look (e.g., buttons, cards, forms).
- **Business Logic**: Handle how things work (e.g., filtering restaurants, calculating prices).
- **Data Fetching**: Handle communication with APIs or databases.
```javascript
// UI Component (Concern: Rendering)
function RestaurantCard({ name, rating, cuisines }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Rating: {rating}</p>
            <p>Cuisines: {cuisines.join(', ')}</p>
        </div>
    );
}

// Business Logic (Concern: Filtering)
function filterRestaurants(restaurants, query) {
    return restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(query.toLowerCase())
    );
}

// Data Fetching (Concern: Fetching Data)
async function fetchRestaurants() {
    const response = await fetch('https://api.restaurants.com');
    return response.json();
}
```
Here:
- ```RestaurantCard``` is only concerned with rendering a restaurant’s details.
- ```filterRestaurants``` is only concerned with filtering the list of restaurants.
- ```fetchRestaurants``` is only concerned with fetching data from an API.
---