import selectedUserAction from "../actions/selectedUserAction";
import { SET_SELECTED_USER } from "../actions/selectedUserAction";
const initialState = null ;
  
  function selectedUserReducer(state = initialState, action) {
    switch (action.type) {
      case SET_SELECTED_USER:
        return {
          ...state,
          selectedUser: action.payload,
        };
      default:
        return state;
    }
  }
  
  export default selectedUserReducer;