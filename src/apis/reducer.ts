export const initialState = {
  loading: true,
  error: undefined,
  data: undefined,
};

export function apiReducer(state: any, action: {type: string; payload?: any}) {
  switch (action.type) {
    case 'DATA_FETCH_START':
      return {...state, loading: true};
    case 'DATA_FETCH_FAILURE':
      return {...state, loading: false, error: action.payload};
    case 'DATA_FETCH_SUCCESS':
      return {...state, loading: false, data: action.payload};
    default:
      return state;
  }
}
