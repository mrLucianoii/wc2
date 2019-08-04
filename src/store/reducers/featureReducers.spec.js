import reducer from './featureReducer';

describe('featureReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        isLoading: false,
      }
    )
  })
})