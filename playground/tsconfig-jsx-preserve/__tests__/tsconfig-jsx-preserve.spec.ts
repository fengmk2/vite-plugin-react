import { expect, test } from '@voidzero-dev/vite-plus/test'
import { page } from '~utils'

test('override tsconfig jsx preserve', async () => {
  await expect.poll(() => page.textContent('#app')).toBe('ok')
})
