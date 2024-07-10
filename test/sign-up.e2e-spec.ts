import { expect, test } from '@playwright/test'

test('sign up success', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' }) // aguardar todas requests disparar

  await page.getByLabel('Seu nome').fill('Rafael Borges') // preencher input
  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop') // preencher input
  await page.getByLabel('Seu celular').fill('13996540961') // preencher input
  await page.getByLabel('Seu e-mail').fill('test@example.com') // preencher input

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click() // clicar no botao

  const toast = page.getByText('Restaurante cadastrado com sucesso') // buscar

  await expect(toast).toBeVisible() // esteja na tela
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' }) // aguardar todas requests disparar

  await page.getByLabel('Seu nome').fill('Rafael Borges') // preencher input
  await page.getByLabel('Nome do estabelecimento').fill('Wrong Shop') // preencher input
  await page.getByLabel('Seu celular').fill('13996540961') // preencher input
  await page.getByLabel('Seu e-mail').fill('test@example.com') // preencher input

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click() // clicar no botao

  const toast = page.getByText('Erro ao cadastrar restaurante') // buscar

  await expect(toast).toBeVisible() // esteja na tela
})

test('navigate to new sign up page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' }) // aguardar todas requests disparar

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('sign-in') // verificar se a rota mudou
})
