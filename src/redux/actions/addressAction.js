// types
export const GET_LIST_ADDRESS = 'GET_LIST_ADDRESS';
export const ADD_CURRENT_ADDRESS = 'ADD_ADDRESS';

//actions
export const getListAddressActionRedux = (id, token) => async (dispatch, getState) =>{
    
}

export const addCurrentAddressActionRedux = (address) => async (dispatch, getState) =>{
    try{
        dispatch({ 
            type: ADD_CURRENT_ADDRESS,
            payload: address, 
        });
        console.log("OK ADD_CURRENT_ADDRESS")
    }catch(error){
        console.log("erro: 2");
    }
}


