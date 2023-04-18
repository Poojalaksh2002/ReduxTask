export const SET_SELECTED_USER = 'SET_SELECTED_USER';
const selectedUserAction = (user) => {
  return {
    type: SET_SELECTED_USER,
    payload: user
  };
};
export default selectedUserAction ;