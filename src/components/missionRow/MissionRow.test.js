import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../Redux/storeSetUp';
import MissionRow from './MissionRow';

describe('testing Header', () => {
  it('snapshot for the header ', () => {
    const tree = renderer.create(
      <Provider store={store}><table><tbody><MissionRow /></tbody></table></Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('testing Header component renders correctly', () => {
    render(<Provider store={store}><MissionRow /></Provider>);
    expect(screen.getByText('NOT A MEMBER')).toBeInTheDocument();
  });
  it('click button', () => {
    const button = render(<Provider store={store}><MissionRow /></Provider>).getByText('Join Mission');
    const mockhandler = jest.fn();

    if (fireEvent.click(button)) {
      mockhandler();
    }

    expect(mockhandler).toHaveBeenCalledTimes(1);
  });
  it('click Leave mission', () => {
    const mission = {
      id: '',
      name: '',
      description: '',
      reserved: true,
    };
    const button = render(<Provider store={store}><MissionRow mission={mission} /></Provider>).getByText('Leave Mission');
    const mockhandler = jest.fn();
    if (fireEvent.click(button)) { mockhandler(); }

    expect(mockhandler).toHaveBeenCalledTimes(1);
  });
});
