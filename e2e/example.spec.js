// @ts-check
const { test, expect } = require('@playwright/test');

/* test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
}); */

test('expected page title', async ({ page }) =>
{
  await page.goto('localhost:3000/');
  await expect(page).toHaveTitle(/Simple todo/);
});

test('test workflow', async({ page }) =>
{
  await page.goto('localhost:3000');
  const newTodo = page.getByTestId('add-todo-input');
  const addButton = page.getByTestId('add-todo-btn');

  const testText="En aio tehdä tänään mitään :3";
  await newTodo.fill(testText);
  await addButton.click();

  // is our text contained somewhere within the todo list?
  await expect(page.getByTestId('todo-list')).toContainText(testText);

  // does the list contain two items?
  await expect(page.getByTestId('todo-title')).toHaveCount(2); 

  
});
