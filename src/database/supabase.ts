import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://stfgvlsypyfagayfvchx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzgwMTI3NiwiZXhwIjoxOTM5Mzc3Mjc2fQ.SdKp-fWPim9DFYQQFUVMDr6WOXbAxDCMtxnPbkbuGVA'
)
