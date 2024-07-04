import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParam,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrdersDetailMock = http.get<
  GetOrderDetailsParam,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '132535353',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 3000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza Calabreza' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 2000,
        product: { name: 'Pizza Mussarela' },
        quantity: 2,
      },
    ],
  })
})
