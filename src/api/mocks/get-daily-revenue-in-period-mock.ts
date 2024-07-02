import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '20/06/2024', receipt: 2000 },
    { date: '21/06/2024', receipt: 800 },
    { date: '22/06/2024', receipt: 7000 },
    { date: '23/06/2024', receipt: 5500 },
    { date: '24/06/2024', receipt: 3000 },
    { date: '25/06/2024', receipt: 2500 },
    { date: '26/06/2024', receipt: 4000 },
  ])
})
