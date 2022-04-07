import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../Redux/storeSetUp';
import Missions from './Missions';

describe('testing Header', () => {
  it('snapshot for the header ', () => {
    const tree = renderer.create(<Provider store={store}><Missions /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('testing Header component renders correctly', () => {
    render(<Provider store={store}><Missions /></Provider>);
    expect(screen.getByText('Mission')).toBeInTheDocument();
  });
});
