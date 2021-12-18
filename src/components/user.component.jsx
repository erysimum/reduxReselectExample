import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../redux/action';
import { changeUser, searchUser } from '../redux/action';
import { usersSelector, userNameSelector, searchSelector, filteredUsersSelector } from '../redux/selector';
import { createStructuredSelector } from 'reselect';

export const User = ({ addUser, changeUser, searchUser, users, userName, search, filteredUsers }) => {
  //   const changeHandler = (e) => {
  //     console.log('e', e.target.value);
  //     changeUser(e.target.value);
  //   };
  console.log('Users in User()', users);
  console.log('UserName in User()', userName);
  console.log('Search in User()', search);
  console.log('Filtered Users()', filteredUsers);
  return (
    <div>
      <input type='text' value={users.userName} onChange={(e) => changeUser(e.target.value)} />
      <button onClick={() => addUser()}>Add User</button>
      <input type='text' onChange={(e) => searchUser(e.target.value)} />
      <br />
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   users: usersSelector(state)
// });

const mapStateToProps = createStructuredSelector({
  //   const filteredUsers = usersSelector(state).filter((user) => {
  //     console.log('Filteringgggggggg...');
  //     return user.includes(state.users.search);
  //   });

  users: usersSelector,
  userName: userNameSelector,
  search: searchSelector,
  filteredUsers: filteredUsersSelector
});

export default connect(mapStateToProps, { addUser, changeUser, searchUser })(User);
