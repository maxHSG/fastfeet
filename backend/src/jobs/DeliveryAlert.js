import Mail from '../lib/Mail';

class DeliveryAlert {
  get key() {
    return 'DeliveryAlert';
  }

  async handle({ data }) {
    const { product, deliveryman, recipient } = data;

    const { email } = deliveryman;

    await Mail.sendMail({
      to: `Email <${email}>`,
      subject: 'Nova Entrega',
      template: 'deliveryAlert',
      context: {
        product,
        deliveryman,
        recipient,
      },
    });
  }
}

export default new DeliveryAlert();
