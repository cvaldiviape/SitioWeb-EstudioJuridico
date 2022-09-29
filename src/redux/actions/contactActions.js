import mrmFetch from '../../util/fetchUtil';

export const CONTACT_SENDEMAIL = "CONTACT_SENDEMAIL";
const sendEmailResponse = (response) => {
  return {
    type: CONTACT_SENDEMAIL,
    response
  }
}


export const sendEmail = (requestDto, callback) => {
    mrmFetch(`/api/Notification`, 'post', JSON.stringify(requestDto)).then((resp) => { 
          if( typeof callback === 'function'){
            callback(resp);  
          }
          
          sendEmailResponse(resp);
        })
      .catch( e => {
        console.log(`EndEmail fail ${e}`);
        const responseError= {
              isValid: false,
              message: "El mensaje no se puedo enviar, intente nuevamente en unos minutos gracias."
          };
          if( typeof callback === 'function'){
            callback(responseError);
          }
      });

};