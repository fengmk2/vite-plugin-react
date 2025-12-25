import { expect, test } from '@voidzero-dev/vite-plus/test'
import { page } from '~utils'

test('should work', async () => {
  expect(await page.textContent('h1')).toMatch('Hello Vite + React')
})
