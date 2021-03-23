import { rest } from 'msw';

import jsonData from './data.json';

export const handlers = [
  rest.get('/api/productItems', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: JSON.stringify(jsonData),
        success: true
      })
    );
  }),

  rest.post('/api/promocode', (req, res, ctx) => {
    const PROMOCODES = [
      { 'name': 'SBORKA', 'discount': '15' },
      { 'name': '99%', 'discount': '99' },
    ];

    const result = PROMOCODES.filter(promo => promo.name === req.body.promocode);

    if (result.length) {
      return res(
        ctx.status(200),
        ctx.body(JSON.stringify({
          result: result[0].discount,
          message: 'OK'
        }))
      );
    }

    return res(
      ctx.status(401),
      ctx.body(JSON.stringify({
        result: null,
        message: 'ERROR'
      }))
    );
  }),
];
