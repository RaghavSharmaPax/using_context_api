export const initialState = {
  titleOne: "Title for level one component",
  titleTwo: "Title for level two component",
  titleThree: "Title for level three component",
  titleFour: "Title for level four component",
};

const reducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export type StateType = typeof initialState;
export type ReducerType = typeof reducer;

export type ContextType = {
  state: StateType;
  reducer: ReducerType;
};

export default reducer;
