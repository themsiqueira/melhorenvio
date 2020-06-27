import { SendController } from '../app/controllers'


module.exports = app => {
    app.post('/send/product/calculate', SendController.calculateProduct);

    app.post('/send/freight/insert', SendController.insertFreights);

    app.get('/send/listCart', SendController.listCart);

    app.post('/send/package/calculate', SendController.calculatePackage);

    app.post('/send/checkout', SendController.checkout);

    app.post('/send/tags/preview', SendController.previewTags);

    app.post('/send/tags/generate', SendController.generateTags);

    app.post('/send/tags/print', SendController.printTags);

    app.post('/send/tags/cancellable', SendController.cacellable);

    app.post('/send/tags/cancel', SendController.cancelTag);

    app.post('/send/tags/tracking', SendController.trackingTag);
}
