import { createSelector } from 'reselect';

export const usersSelector = (state) => state.users.users;
export const userNameSelector = (state) => state.users.userName;

export const searchSelector = (state) => state.users.search;

export const filteredUsersSelector = createSelector(
  (state) => state.users.users,
  (state) => state.users.search,
  (users, search) => {
    console.log('Filtering.................');
    return users.filter((user) => {
      return user.includes(search);
    });
  }
);
