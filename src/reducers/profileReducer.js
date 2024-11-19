// type ProfileState = {
//   name: string,
//   age: number,
//   email: string,
// }

const initialState = {
  name: 'John Doe',
  age: 25,
  email: "john@example.com",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name,
      };
    case 'CHANGE_AGE':
      return {
        ...state,
        age: action.age,
      };
    case 'CHANGE_EMAIL':
      return {
        ...state,
        email: action.email,
      };
    default:
      return state;
  }
}

export default profileReducer;
