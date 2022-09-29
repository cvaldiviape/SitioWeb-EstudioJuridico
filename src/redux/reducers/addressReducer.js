import { GET_LIST_ADDRESS, ADD_CURRENT_ADDRESS } from '../actions/addressAction';
import { dataInitial } from '../states';

// reducer
export default function addressReducer(state = dataInitial, action){
    switch(action.type){
        case GET_LIST_ADDRESS:
            return {...state, 
                        arrayAddress: action.payload
                    };
        case ADD_CURRENT_ADDRESS:
            return {...state, 
                        curretAddress: action.payload
                    };
        default:
            return state;    
    }
}

