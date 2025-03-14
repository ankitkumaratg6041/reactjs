import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

/**
 * Whenever you are testing a react component then you need to first render that component using jsdom environment.
 * You can render the component using render method from @testing-library/react.
 */

test('should load contact us component', () => { 
    render(<Contact />)
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test('should load button', () => { 
    render(<Contact />)
    const button = screen.getByRole("button");
    // assertion
    expect(button).toBeInTheDocument();
})

test('should load button with text Submit', () => { 
    render(<Contact />)
    const button = screen.getByText("Submit");
    // assertion
    expect(button).toBeInTheDocument();
})

test('should load input fields', () => { 
    render(<Contact />)
    const inputs = screen.getAllByRole("textbox");
    // assertion
    console.log(inputs.length);
    expect(inputs.length).toBe(3);
})

test('should load input fields', () => { 
    render(<Contact />)
    const inputs = screen.getAllByRole("textbox");
    // assertion
    console.log(inputs.length);
    expect(inputs.length).not.toBe(5);
})