import { render, screen, cleanup } from '@testing-library/react';
// import Login from '../screens/Login';
// import { MemoryRouter } from 'react-router-dom';
import HomePages from '../../home/HomePages';


test('should render home component', ()=> {
    render(<HomePages/>);
    const homeElement = screen.getByTestId('home-1');
    expect(homeElement).toHaveTextContent('Hello');
})
