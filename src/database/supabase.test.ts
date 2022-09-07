import { supabase } from './supabase'

test('is session active', async () => {
  await supabase.auth.signOut()
  const data = await supabase.auth.session()
  expect(data).toBe(null)
})

export {}
