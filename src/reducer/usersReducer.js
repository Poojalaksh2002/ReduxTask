

const initialState = [];

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return action.payload;
    case 'REMOVE_USER':
      return state.filter(user => user.id !== action.payload);
    default:
      return state;
  }
};

export default usersReducer;
