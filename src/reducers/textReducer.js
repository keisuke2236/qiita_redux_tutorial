const initialState = "";

const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return action.text;
    case 'ADD_TODO':
      return initialState;
    default:
      return state;
  }
}

export default textReducer
