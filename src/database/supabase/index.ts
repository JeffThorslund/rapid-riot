import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabasePublicKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY || "";

export const supabase = createClient(supabaseUrl, supabasePublicKey);
