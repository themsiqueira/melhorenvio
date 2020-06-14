const Yup = require('yup');



const validateRegisterStore = async (data) => {
    const schema = Yup.object.shape({
        name: Yup.string.required(),
        email: Yup.string.required(),
        description: Yup.string.required(),
        company_name: Yup.string.required(),
        document: Yup.string.required(),
        state_register: Yup.string.required(),
    });


    if (!(await schema.isValid(data))) {
        return false;
    }
    
    return true;
}



const validateSaveAddress = async (data) => {

    const schema = Yup.object.shape({
        postal_code: Yup.string.required(),
        address: Yup.string.required(),
        number: Yup.string.required(),
        complement: Yup.string.required(),
        city: Yup.string.required(),
        state: Yup.string.required(),
    });



    if (!(await schema.isValid(data))) {
        return false;
    }
    return true;
}




const validateSavePhone = async (data) => {
    const schema = Yup.object.shape({
        type: Yup.string.required(),
        phone: Yup.string.required(),
    });

    if (!(await schema.isValid(data))) {
        return false;
    }
    
    return true;
}




const validateSendStorePicture = async (data) => {
    const schema = Yup.object.shape({
        //TODO file:
    });


    if (!(await schema.isValid(data))) {
        return false;
    }
    
    return true;
}





