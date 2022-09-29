import { CONTACT_SENDEMAIL } from '../actions/contactActions';


const contactSendMailReducers = (state = { response: {} }, action) => {
  switch (action.type) {
    case CONTACT_SENDEMAIL:
      return Object.assign({}, state, { response: action.response});
    default:
      return state;
  }
};

export default contactSendMailReducers;