export const addUser = () => ({
  type: 'ADD_USER'
});

export const changeUser = (userName) => {
  console.log('e changeuser action');
  return {
    type: 'CHANGE_USER',
    payload: userName
  };
};

export const searchUser = (userName) => {
  console.log('e search action');
  return {
    type: 'SEARCH_USER',
    payload: userName
  };
};
