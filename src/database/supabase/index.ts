import { createClient } from "@supabase/supabase-js";
import { createSupabaseMethods } from "./createSupabaseMethods";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "";
const supabasePublicKey = process.env.REACT_APP_SUPABASE_PUBLIC_KEY || "";

const supabase = createClient(supabaseUrl, supabasePublicKey);
export const supabaseMethods = createSupabaseMethods(supabase);
