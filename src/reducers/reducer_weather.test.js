import { Reducer } from 'redux-testkit';
import uut from './reducer_weather.js';

const initialState = [];

describe('reducers/reducer_weather', () => {

  it('should have initial state', () => {
    expect(uut()).toEqual(initialState);
  });

  it('should not affect state', () => {
    Reducer(uut).expect({ type: 'NOT_EXISTING' }).toReturnState(initialState);
  });

  it('should add new cities', () => {
    const newCity = { city: { name: 'Boston' }, list: [] };
    const action = { type: 'FETCH_WEATHER', payload: { data: newCity } };
    Reducer(uut).expect(action).toReturnState([ newCity, ...initialState ]);
  });

});
