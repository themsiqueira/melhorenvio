const Yup = require('yup');

const validate = async (data) => {
    const schema = Yup.object.shape({
        firstname: Yup.string().required(),
        lastname: Yup.string().required(),
        document: Yup.string().required(),
        birthdate: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required(),
        phone_mobile: Yup.string().required(),
        phone_fixed: Yup.string().required(),
        company: Yup.string().required(),
        coupon: Yup.string().required(),
        terms: Yup.string().required(),
        address: Yup.object.shape({
            label: Yup.string().required(),
            postal_code: Yup.string().required(),
            address: Yup.string().required(),
            number: Yup.string().required(),
            complement: Yup.string().required(),
            district: Yup.string().required(),
            city: Yup.string().required(),
            state_abbr: Yup.string().required(),
            country: Yup.string().required(),
        }),
    });


    if (!(await schema.isValid(data))) {
        return false;
    }
    return true;
}


const validate = async (data) => {
    const schema = Yup.object.shape({
        gateway: Yup.string().required(),
        redirect: Yup.string().required(),
        value: Yup.number().required(),
    });


    if (!(await schema.isValid(data))) {
        return false;
    }
    return true;
}


