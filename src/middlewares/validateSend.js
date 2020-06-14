const Yup = require('yup');

const validationCalcProductFreight = async (data) => {
  const schema = Yup.object().shape({
    from: Yup.object.shape({
      postal_code: Yup.string().required(),
    }),
    to: Yup.object.shape({
      postal_code: Yup.string().required(),
    }),
    options: Yup.object.shape({
      receipt: Yup.boolean().required(),
      own_hand: Yup.boolean().required(),
    }),
    services: Yup.string().required(),
    products: Yup.array.of(Yup.object.shape({
      id: Yup.string().required(),
      width: Yup.number().required(),
      height: Yup.number().required(),
      length: Yup.number().required(),
      weight: Yup.number().required(),
      insurance_value: Yup.number().required(),
      quantity: Yup.number().required(),
    }))
  });

  if (!(await schema.isValid(data))) {
    return false;
  }

  return true;
};

const validationCalcPackageFreight = async (data) => {
  const schema = Yup.object().shape({
    from: Yup.object.shape({
      postal_code: Yup.string().required(),
    }),
    to: Yup.object.shape({
      postal_code: Yup.string().required(),
    }),
    options: Yup.object.shape({
      insurance_value: Yup.number().required(),
      receipt: Yup.boolean().required(),
      own_hand: Yup.boolean().required(),
    }),
    services: Yup.string().required(),
    package: Yup.array.of(Yup.object.shape({
      width: Yup.number().required(),
      height: Yup.number().required(),
      length: Yup.number().required(),
      weight: Yup.number().required(),
    }))
  });

  if (!(await schema.isValid(data))) {
    return false;
  }

  return true;
};

const validationInsertFreightsInCart = async (data) => {
  const schema = Yup.object().shape({
    service: Yup.number().required(),
    agency: Yup.number().required(),
    from: Yup.object().shape({
      name: Yup.string().required(),
      phone: Yup.string().required(),
      email: Yup.string().required(),
      document: Yup.string().required(),
      company_document: Yup.string().required(),
      state_register: Yup.string().required(),
      address: Yup.string().required(),
      complement: Yup.string().required(),
      number: Yup.string().required(),
      district: Yup.string().required(),
      city: Yup.string().required(),
      country_id: Yup.string().required(),
      postal_code: Yup.string().required(),
      note: Yup.string().required()
    }).required(),
    to: Yup.object().shape({
      name: Yup.string().required(),
      phone: Yup.string().required(),
      email: Yup.string().required(),
      document: Yup.string().required(),
      company_document: Yup.string().required(),
      state_register: Yup.string().required(),
      address: Yup.string().required(),
      complement: Yup.string().required(),
      number: Yup.string().required(),
      district: Yup.string().required(),
      city: Yup.string().required(),
      country_id: Yup.string().required(),
      postal_code: Yup.string().required(),
      note: Yup.string().required()
    }).required(),
    products: Yup.array().of(Yup.object({
      name: Yup.string().required(),
      quantity: Yup.number().required(),
      unitary_value: Yup.number().required(),
    })).required(),
    volumes: Yup.array().of(Yup.object({
      height: Yup.number().required(),
      width: Yup.number().required(),
      length: Yup.number().required(),
      weight: Yup.number().required(),
    })).required(),
    options: Yup.array().of(Yup.object({
      insurance_value: Yup.number().required(),
      receipt: Yup.boolean().required(),
      own_hand: Yup.boolean().required(),
      reverse: Yup.boolean().required(),
      non_commercial: Yup.boolean().required(),
      invoice: Yup.array().of(Yup.object({
        key: Yup.string().required(),
      })),
      platform: Yup.string().required(),
      tags: Yup.array().of(Yup.object({
        tag: Yup.string().requires(),
        url: 
      })).required(),
    })).required(),
  });

  if(!(await schema.isValid(data))) {
    return false;
  }

  return true;
};

const data = {
  "options": {

      invoice: {
          key: "31190307586261000184550010000092481404848162"
      },
      platform: "Nome da Plataforma",
      tags: [
          {
              tag: "Identificação do pedido na plataforma, exemplo: 1000007",
              url: "Link direto para o pedido na plataforma, se possível, caso contrário pode ser passado o valor null"
          }
      ]
  }
}