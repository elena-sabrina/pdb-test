'use strict';

const express = require('express');

const Order = require('./../models/order');

const router = new express.Router();

router.get('/', (req, res, next) => {
  res.json({ type: 'success', data: { title: 'Hello World' } });
});

//Create Order
router.post('/', async (req, res, next) => {
  console.log('data');

  const { type, wheel } = req.body;
  console.log(type, wheel);

  try {
    const order = await Order.create({
      name: '',
      email: '',
      adress: '',
      type: type,
      typeprice: 200000,
      wheel: wheel,
      wheelprice: 60000,
      totalprice: 260000
    });
    console.log(order);

    res.json({ order });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//Load Order for Completion
router.get('/checkout/:id', async (req, res, next) => {
  try {
    console.log('checkout/:id passes');
    const order = await Order.findById(req.params.id);
    console.log(order);
    res.json({ order });
  } catch (error) {
    next(error);
  }
});

//Submitt Complete Order
router.patch('/checkout/:id', async (req, res, next) => {
  const { type, wheel, name, email, adress } = req.body;

  try {
    const order = await Order.findByIdAndUpdate(req.params.id, {
      name: name,
      email: email,
      adress: wheel,
      type: type,
      typeprice: 200000,
      wheel: wheel,
      wheelprice: 60000,
      totalprice: 260000
    });
    console.log(order);

    res.json({ order });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//Confirm Order
router.get('/confirmation/:id', async (req, res, next) => {
  try {
    console.log('confirmation/:id passes');
    const order = await Order.findById(req.params.id);
    console.log(order);
    res.json({ order });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

/* console.log('sendemail going to run');
     await sendEmail({
    receiver: `${daredemail}`,
    subject: `You've been dared for a good cause`,
    body: `
    <h1> Hi ${daredname}, ${donorName} has dared you for a good cause.  </h1>
    <p> Fullfill your dare and ${donorName} pays ${price} Euros to ${charity}. </p>
    `,
    domain: process.env.APP_DOMAIN,
    path: `/dare/${dare._id}/dared`,
    linkdescription: `Fullfill your Dare`
  });*/
