import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('testing Header', () => {
  it('snapshot for the header ', () => {
    const tree = renderer.create(<Router><Header /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('testing Header component renders correctly', () => {
    render(<Router><Header /></Router>);
    expect(screen.getByText('My Profile')).toBeInTheDocument();
  });
});
