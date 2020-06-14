const { doPost, doGet, doDel } = require('../utils/requestsUtils');

class SendController {
  async calcProductFreight(token, data) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/calculate`;
    const header = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };

    const data = {
      from: {
        postal_code: '96020360',
      },
      to: {
        postal_code: '01018020',
      },
      options: {
        receipt: false,
        own_hand: false,
      },
      services: '1,2',
      products: [
        {
          id: 'x',
          width: 11,
          height: 17,
          length: 11,
          weight: 0.3,
          insurance_value: 10.1,
          quantity: 1,
        },
        {
          id: 'y',
          width: 16,
          height: 25,
          length: 11,
          weight: 0.3,
          insurance_value: 55.05,
          quantity: 2,
        },
        {
          id: 'z',
          width: 22,
          height: 30,
          length: 11,
          weight: 1,
          insurance_value: 30,
          quantity: 1,
        }
      ],
    };

    const result = await doPost(url, data, header);
    return result;
  }

  async calcPackageFreight(token, data) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/calculate`;
    const header = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const data = {
        from: {
            postal_code: "01002001"
        },
        to: {
            postal_code: "90570020"
        },
        package: {
            height: 4,
            width: 12,
            length: 17,
            weight: 0.3
        },
        options: {
            insurance_value: 1180.87,
            receipt: false,
            own_hand: false
        },
        services: "1,2,3,4,7,11"
    };
    const result = await doPost(url, data, header);
    return result;
  }

  async insertFreightsInCart(token) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/cart`
    const header = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };

    const data = {
      service: 3,
      agency: 100,
      from: {
          name: "Nome do remetente",
          phone: "53984470102",
          email: "contato@melhorenvio.com.br",
          document: "16571478358",
          company_document: "89794131000100",
          state_register: "123456",
          address: "Endereço do remetente",
          complement: "Complemento",
          number: "1",
          district: "Bairro",
          city: "São Paulo",
          country_id: "BR",
          postal_code: "01002001",
          note: "observação"
      },
      to: {
          name: "Nome do destinatário",
          phone: "53984470102",
          email: "contato@melhorenvio.com.br",
          document: "25404918047",
          company_document: "89794131000101",
          state_register: "123456",
          address: "Endereço do destinatário",
          complement: "Complemento",
          number: "2",
          district: "Bairro",
          city: "Porto Alegre",
          state_abbr: "RS",
          country_id: "BR",
          postal_code: "90570020",
          note: "observação"
      },
      products: [
          {
              name: "Papel adesivo para etiquetas 1",
              quantity: 3,
              unitary_value: 1000
          },
          {
              name: "Papel adesivo para etiquetas 2",
              quantity: 1,
              "unitary_value": 1000
          }
      ],
      volumes: [
          {
              height: 43,
              width: 60,
              length: 70,
              weight: 30
          },
          {
              height: 30,
              width: 40,
              length: 50,
              weight: 10
          }
      ],
      "options": {
          insurance_value: 4000,
          receipt: false,
          own_hand: false,
          reverse: false,
          non_commercial: false,
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
    const result = await doPost(url, data, header);
    return result;
  }

  async listCart(token) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/cart/6e1c864a-fe48-4ae7-baaa-d6e4888bafd2`;
    const header = {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const result = await doGet(url, header);
    return result;
  }

  async removeCartItems(token) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/cart/6e1c864a-fe48-4ae7-baaa-d6e4888bafd2`;
    const header = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const result = await doDel(url, header)
    return result;

  }

  async orderCheckout(token) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/checkout`;
    const header = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const data = {
      orders: [
        "9af0b6fd-9ce2-46fe-afa7-5ce4f3f31149"
      ]
    };
    const result = await doPost(url, data, header);
    return result;
  }

  async previewTicket(token) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/preview`;
    const header = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const data = {
      orders: [
          "9af0b6fd-9ce2-46fe-afa7-5ce4f3f31149"
      ]
    };
    const result = await doPost(url, data, header);
    return result;
  }

  async generateTicket(token, data) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/generate`;
    const header = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const data = {
      orders: [
        "9af0b6fd-9ce2-46fe-afa7-5ce4f3f31149"
      ]
    };
    const result = await doPost(url, data, header);
    return result;
  }

  async printTicket(token) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/print`;
    const header = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const data = {
      mode: "public",
      orders: [
        "8943bd4e-42a4-4b26-a7d8-41c8a78649ca",
        "c2e5eb04-db51-467b-b63e-aae7ba76ae59"
      ]
    };
    const result = await doPost(url, data, header);
    return result;
  }

  async searchTicket(token) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/orders/search?q={id|protocol|tracking|authorization_code|self_tracking}`;
    const header = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const result = await doGet(url, header);
    return result;
  }

  async cancelTicket(token) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/cancel`;
    const header = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const data = {
      order: {
          id: "9af0b6fd-9ce2-46fe-afa7-5ce4f3f31149",
          reason_id: "2",
          description: "Descrição do cancelamento"
      }
    };
    const result = await doPost(url, data, header);
    return result;
  }

  async verifyTicketCanceability(ordersIds) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/cancellable`;
    const header = {
      "Accept": "application/json",
      "Content-Type": "application/json",
    }
    const data = {
      orders: ordersIds,
    };
    const result = await doGet(url, header);
    return result;
  }

  async trackShipment(token, ordersIds) {
    const url = `${process.env.MELHOR_ENVIO_URL}/api/v2/me/shipment/tracking`;
    const header = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };
    const data = {
        orders: ordersIds,
    };
    const result = await doPost(url, data, header);
    return result;
  }
}

module.exports = new SendController();
