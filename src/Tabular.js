import React from 'react';
import { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {removeUser,fetchUsers } from './actions/userAction';
import { showModal,hideModal } from './actions/showModalAction';
import selectedUserAction from "./actions/selectedUserAction";



export default function Tabular(){

  const dispatch = useDispatch();

    // const [users, setusers] = useState([])
    // const [showModal, setshowModal] = useState(false) // for close button display
    // const [selectedUser, setselectedUser] = useState(null)
    
    useEffect(()=>{
      dispatch(fetchUsers());
    }, [dispatch]);

    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then((response)=>{
    //         const res = response.data
    //         setusers(res)
    //         console.log(users)
    //     })
       
    // },[])

      // Get the list of users from the Redux store
  const users = useSelector(state => state.userList);

  // Get the showModal state from the Redux store
  const showModalState = useSelector(state => state.showModal);

  // Get the selectedUser state from the Redux store
  const selectedUserState = useSelector(state => state.selectedUser);
  

   const handleClick=(user)=>{
     const message = `${user.address.street} ${user.address.city} ${user.address.zipcode}`
     alert(message)
     dispatch(selectedUserAction(user));
     dispatch(showModal());
    //  setshowModal(true)
    //  setselectedUser(user)
     document.body.classList.add('body-scroll-lock');

   }
  //  const handleClose=()=>{
  //   dispatch(removeUser(selectedUser.id));
  //   dispatch(hideModal());
  //   dispatch(selectedUserAction(null));
    // setusers(users.filter(user => user.id !== selectedUser.id));
    // setshowModal(false)
    // setselectedUser(null)
    const handleClose = (id) => {
      if (selectedUserAction) {
        dispatch(removeUser(id));
        dispatch(selectedUserAction(null));
      }
      dispatch(hideModal());
      document.body.classList.remove('body-scroll-lock');
    };
    

   
   const handleModalClick=(e)=>{
    if(e.target.classList.contains('body-scroll-lock')) {
      if( e.keyCode===27){
        handleClose()
      }
    }
  }

  console.log("state",selectedUserState )
  useEffect(() => {
    document.addEventListener("keydown", handleModalClick);
    return () => {
      document.removeEventListener("keydown", handleModalClick);
    };
  }, [showModalState, selectedUserState]);

    return(
  
  <table className="table">
  <thead>
    <tr>
      <th>id</th>
      <th>username</th>
      <th>name</th>
      <th>email</th>
    </tr>
  </thead>

  <tbody>
    {users.map(user =>(
      <React.Fragment  key={user.id} >
    <tr onClick={()=>handleClick(user)}>
        <td>{user.id}</td>
        <td>{user.username}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    {showModalState && selectedUserState && selectedUserState?.selectedUser?.id===user?.id &&(
    <tr className='body-scroll-lock'onClick={handleModalClick} >
      <td>
      <span type="button" className="btn btn-danger" onClick={()=>handleClose(user?.id)} onKeyDown={handleModalClick}>Close</span>
      </td>
    </tr>
    )}
    </React.Fragment>
    ))}
  </tbody>
</table>
    
    )
}
