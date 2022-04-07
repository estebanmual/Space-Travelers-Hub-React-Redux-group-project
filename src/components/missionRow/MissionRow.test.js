import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../Redux/storeSetUp';
import MissionRow from './MissionRow';

describe('testing Header', () => {
  it('snapshot for the header ', () => {
    const tree = renderer.create(<Provider store={store}><MissionRow /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('testing Header component renders correctly', () => {
    render(<Provider store={store}><MissionRow /></Provider>);
    expect(screen.getByText('NOT A MEMBER')).toBeInTheDocument();
  });
});
