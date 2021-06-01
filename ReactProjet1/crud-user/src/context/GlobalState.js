import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initiale State
const initialeState={
    users:[]   
};

//create Context
export const GlobalContext= createContext(initialeState);


//profider Component
export const GlobalProvider=({ children})=>{
    const [state, dispatch]=useReducer(AppReducer, initialeState);
    
    //action 
const removeUser= (id) =>{
    dispatch({
        type:'REMOVE_USER',
        payload:id
    })
}

const addUser= (user) =>{
    dispatch({
        type:'ADD_USER',
        payload:user
    })
}

const editUser=(user)=>{
    dispatch({
        type:'EDIT_USER',
        payload:user
    })
}

    return (
        <GlobalContext.Provider value={{ 
            users: state.users, 
            removeUser, addUser, editUser
        }}> 
        {children}
        </GlobalContext.Provider>
    )
}





{ 
/*const GlobalState = () => {
    return (
        <div>
            
        </div>
    );
};

export default GlobalState;*/}