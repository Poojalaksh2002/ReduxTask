import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import showModalReducer from "./showModalReducer";
import selectedUserReducer from "./selectedUserReducer";


const rootReducer = combineReducers({
    userList: usersReducer,
    showModal: showModalReducer,
    selectedUser : selectedUserReducer
  });

  // const store = createStore(rootReducer);

export default rootReducer;