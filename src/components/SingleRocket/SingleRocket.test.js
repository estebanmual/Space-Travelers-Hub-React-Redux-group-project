import renderer from 'react-test-renderer';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../Redux/storeSetUp';
import SingleRocket from './SingleRocket';

describe('testing Header', () => {
  it('snapshot for the header ', () => {
    const tree = renderer.create(
      <Provider store={store}><SingleRocket /></Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('testing Header component renders correctly', () => {
    render(<Provider store={store}><SingleRocket /></Provider>);
    expect(screen.getByText('Reserve Rocket')).toBeInTheDocument();
  });
  it('Clicking the button to reserve', () => {
    const mockhandler = jest.fn();
    const button = render(<Provider store={store}><SingleRocket /></Provider>).getByTestId('reserve-btn');

    if (fireEvent.click(button)) {
      mockhandler();
    }

    expect(mockhandler).toHaveBeenCalledTimes(1);
  });
  it('click button to leave rocket', () => {
    const rocket = {
      id: '',
      name: '',
      type: '',
      flickrImages: '',
      description: '',
      reserved: true,
    };
    const button = render(<Provider store={store}><SingleRocket rocket={rocket} /></Provider>).getByText('Cancel Reservation');
    const mockhandler = jest.fn();
    if (fireEvent.click(button)) { mockhandler(); }

    expect(mockhandler).toHaveBeenCalledTimes(1);
  });
});
