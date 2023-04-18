import axios from 'axios';

export const setUsers = (users) => {
  return {
    type: 'SET_USERS',
    payload: users
  };
};

export const removeUser = (userId) => {
  console.log('userId', userId)
  return {
    type: 'REMOVE_USER',
    payload: userId
  };
};
export const fetchUsers = () => {
    return (dispatch) => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          const users = response.data;
          dispatch(setUsers(users));
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };