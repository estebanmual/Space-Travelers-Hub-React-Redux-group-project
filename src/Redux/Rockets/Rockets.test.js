import { FETCH_ROCKETS, RESERVE_ROCKET } from '../../constants';
import { rocketsReducer } from './Rockets';

describe('Rockets Reducers test', () => {
  it('test fetching rockets', () => {
    const rockets = [
      {
        id: '0',
        name: 'rocket',
        type: 'type',
        flickrImages: 'flickr_images',
        description: 'description',
        reserved: false,
      },
      {
        id: '1',
        name: 'rocket',
        type: 'type',
        flickrImages: 'flickr_images',
        description: 'description',
        reserved: false,
      },
      {
        id: '2',
        name: 'rocket',
        type: 'type',
        flickrImages: 'flickr_images',
        description: 'description',
        reserved: false,
      },
    ];
    const resolvedRockets = [
      {
        rocket_id: '0',
        rocket_name: 'rocket',
        rocket_type: 'type',
        flickr_images: ['flickr_images', 'flickr_images'],
        description: 'description',
        reserved: false,
      },
      {
        rocket_id: '1',
        rocket_name: 'rocket',
        rocket_type: 'type',
        flickr_images: ['flickr_images', 'flickr_images'],
        description: 'description',
        reserved: false,
      },
      {
        rocket_id: '2',
        rocket_name: 'rocket',
        rocket_type: 'type',
        flickr_images: ['flickr_images', 'flickr_images'],
        description: 'description',
        reserved: false,
      },
    ];
    const action = { type: FETCH_ROCKETS, payload: resolvedRockets };
    expect(rocketsReducer([], action)).toEqual(rockets);
  });
  it('test reserved rockets', () => {
    const rockets = [
      {
        id: '0',
        name: 'rocket',
        type: 'type',
        flickrImages: 'flickr_images',
        description: 'description',
        reserved: false,
      },
      {
        id: '1',
        name: 'rocket',
        type: 'type',
        flickrImages: 'flickr_images',
        description: 'description',
        reserved: false,
      },
      {
        id: '2',
        name: 'rocket',
        type: 'type',
        flickrImages: 'flickr_images',
        description: 'description',
        reserved: false,
      },
    ];
    const resolveRockets = [
      {
        id: '0',
        name: 'rocket',
        type: 'type',
        flickrImages: 'flickr_images',
        description: 'description',
        reserved: false,
      },
      {
        id: '1',
        name: 'rocket',
        type: 'type',
        flickrImages: 'flickr_images',
        description: 'description',
        reserved: true,
      },
      {
        id: '2',
        name: 'rocket',
        type: 'type',
        flickrImages: 'flickr_images',
        description: 'description',
        reserved: false,
      },
    ];
    const action = { type: RESERVE_ROCKET, id: '1' };
    expect(rocketsReducer(rockets, action)).toEqual(resolveRockets);
  });
});
