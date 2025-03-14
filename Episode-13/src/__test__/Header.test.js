import Header from '../Header';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('Header Component', () => { 
    test('should render header component', () => { 
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        const header = screen.getByRole('banner');
        expect(header).toBeInTheDocument();
    })

    it('should render header component login button', () => { 
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })
})

test('should render header component login button specifically', () => { 
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const button = screen.getByRole('button', {name: 'Login'}); // name is the text inside the button
    expect(button).toBeInTheDocument();
})

test('should login button to logout on click', () => { 
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    const loginButton = screen.getByRole('button', {name: 'Login'}); // name is the text inside the button
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole('button', {name: 'Logout'}); // name is the text inside the button
    expect(logoutButton).toBeInTheDocument();
})