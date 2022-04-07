import missionsReducer from './missions';
import { FETCH_MISSIONS, JOIN_MISSION } from '../../constants';

describe('testing missions reducer', () => {
  it('fetch missions test', () => {
    const missions = [
      {
        mission_id: '0',
        mission_name: 'Mission 1',
        description: 'lorem ipsum',
        reserved: false,
      },
      {
        mission_id: '0',
        mission_name: 'Mission 1',
        description: 'lorem ipsum',
        reserved: false,
      },
      {
        mission_id: '0',
        mission_name: 'Mission 1',
        description: 'lorem ipsum',
        reserved: false,
      },
    ];
    const action = { type: FETCH_MISSIONS, missions };
    const resolveMissions = [
      {
        id: '0',
        name: 'Mission 1',
        description: 'lorem ipsum',
        reserved: false,
      },
      {
        id: '0',
        name: 'Mission 1',
        description: 'lorem ipsum',
        reserved: false,
      },
      {
        id: '0',
        name: 'Mission 1',
        description: 'lorem ipsum',
        reserved: false,
      },
    ];
    expect(missionsReducer([], action)).toEqual(resolveMissions);
  });
  it('join missions test', () => {
    const missions = [
      {
        id: '0',
        name: 'Mission 1',
        description: 'lorem ipsum',
        reserved: false,
      },
      {
        id: '2',
        name: 'Mission 1',
        description: 'lorem ipsum',
        reserved: false,
      },
      {
        id: '3',
        name: 'Mission 1',
        description: 'lorem ipsum',
        reserved: false,
      },
    ];
    const resolveMissions = [
      {
        id: '0',
        name: 'Mission 1',
        description: 'lorem ipsum',
        reserved: false,
      },
      {
        id: '2',
        name: 'Mission 1',
        description: 'lorem ipsum',
        reserved: true,
      },
      {
        id: '3',
        name: 'Mission 1',
        description: 'lorem ipsum',
        reserved: false,
      },
    ];
    const action = { type: JOIN_MISSION, id: '2' };
    expect(missionsReducer(missions, action)).toEqual(resolveMissions);
  });
});
