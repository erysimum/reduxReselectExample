const INITIAL_STATE = {
  users: [],
  userName: '',
  search: ''
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, state.userName]
      };
    case 'CHANGE_USER':
      return {
        ...state,
        userName: action.payload
      };
    case 'SEARCH_USER':
      return {
        ...state,
        search: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
