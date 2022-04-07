import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../Redux/storeSetUp';
import MyProfile from './MyProfile';

describe('testing My Profile', () => {
  it('snapshot for the My profile ', () => {
    const tree = renderer.create(<Provider store={store}><MyProfile /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('testing My profile component renders correctly', () => {
    render(<Provider store={store}><MyProfile /></Provider>);
    expect(screen.getByText('My Missions')).toBeInTheDocument();
  });
});
