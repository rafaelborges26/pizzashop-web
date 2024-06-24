import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it('should display the rigth text when order status is pending', () => {
    /* Pending */
    const wrapper = render(<OrderStatus status="pending" />)

    // wrapper.debug() // mostra o HTML gerado

    const statusText = wrapper.getByText('Pendente')
    // console.log(statusText.outerHTML) // consolar o elemento

    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-slate-400')
  })

  it('should display the rigth text when order status is canceled', () => {
    /* Canceled */
    const wrapper = render(<OrderStatus status="canceled" />)

    const statusText = wrapper.getByText('Cancelado')
    // console.log(statusText.outerHTML) // consolar o elemento

    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-rose-500')
  })

  it('should display the rigth text when order status is delivering', () => {
    /* Canceled */
    const wrapper = render(<OrderStatus status="delivering" />)

    const statusText = wrapper.getByText('Em entrega')
    // console.log(statusText.outerHTML) // consolar o elemento

    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display the rigth text when order status is processing', () => {
    /* Canceled */
    const wrapper = render(<OrderStatus status="processing" />)

    const statusText = wrapper.getByText('Em preparo')
    // console.log(statusText.outerHTML) // consolar o elemento

    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display the rigth text when order status is delivered', () => {
    /* Canceled */
    const wrapper = render(<OrderStatus status="delivered" />)

    const statusText = wrapper.getByText('Entregue')
    // console.log(statusText.outerHTML) // consolar o elemento

    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-emerald-500')
  })
})
