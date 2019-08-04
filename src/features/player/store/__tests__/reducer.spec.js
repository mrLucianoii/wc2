import reducer from "../reducer";

describe("Player Reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      selectedMovie: "ELeMaP8EPAA",
      segmentStart: 0,
      segmentEnd: null
    });
  });
  it('Should update segment start', () => {
    const testAction = {
        type: 'weCliques-app/movies/MARK_IN',
        timeStamp: 200
      };

    expect(reducer(undefined, testAction)).toEqual({
        selectedMovie: "ELeMaP8EPAA",
        segmentStart: 200,
        segmentEnd: null
      });
})
});
