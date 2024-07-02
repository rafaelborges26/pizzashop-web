import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { SignInMock } from './sign-in-mock'

export const worker = setupWorker(SignInMock)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start() // quando startar os mocks todas as request seram interceptadas
}
