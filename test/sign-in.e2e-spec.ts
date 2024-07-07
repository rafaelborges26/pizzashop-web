import { expect, test } from '@playwright/test'

test('sign in success', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' }) // aguardar todas requests disparar

  await page.getByLabel('Seu e-mail').fill('johndoe@example.com') // preencher input

  await page.getByRole('button', { name: 'Acessar painel' }).click() // clicar no botao

  const toast = page.getByText(
    'Enviamos um link de autenticação para o seu e-mail',
  ) // buscar

  expect(toast).toBeVisible() // esteja na tela
})

test('sign in with srong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' }) // aguardar todas requests disparar

  await page.getByLabel('Seu e-mail').fill('wrong@example.com') // preencher input

  await page.getByRole('button', { name: 'Acessar painel' }).click() // clicar no botao

  const toast = page.getByText('Credenciais inválidas') // buscar

  expect(toast).toBeVisible() // esteja na tela
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' }) // aguardar todas requests disparar

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  expect(page.url()).toContain('sign-up') // verificar se a rota mudou
})
