const sgMail = require('@sendgrid/mail');
const controller = {}

controller.index = (request, response) => {
    response.send("Conexion establecida desde index.controller.js")
}

const bodyHtml = (name, email, message) => {
    return (`<table><tbody><tr><td>Nombres:</td><td>${name}</td></tr><tr><td>Correo:</td><td>${email}</td></tr><tr><td>Mensaje:</td><td>${message}</td></tr></tbody></table>`)
};

controller.sendEmail = (request, response, next) => {
    try {         
         const {name, email, message} = request.body;
         const myHtml = bodyHtml(name, email, message);
         console.log(myHtml);
         sgMail.setApiKey('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');
         const msg = {
             to: ['sathielx9@gmail.com', 'centrodeconciliacionexlege@asociacionscmc.org','cnvillch@gmail.com'], 
             from: 'centrodeconciliacionexlege@asociacionscmc.org', 
             subject: 'Mesa de partes virtual - Pagina Web',
             text: 'Content',
             html: myHtml,
         }
        sgMail.send(msg).then(resp=>{
            console.log(resp);
        }).catch((error) => {
              console.error(error)
        })

        response.status(200).json({isValid: true});
    }
    catch(e){
        next(err);
    }
}

module.exports = controller;