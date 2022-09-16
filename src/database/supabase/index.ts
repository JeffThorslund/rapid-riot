import { createClient } from "@supabase/supabase-js";
import { NewFestival, NewFestivalSubmission } from "../../types";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "";
const supabasePublicKey = process.env.REACT_APP_SUPABASE_PUBLIC_KEY || "";

const supabase = createClient(supabaseUrl, supabasePublicKey);

export const supabaseMethods = {
  insert: async (submission: NewFestivalSubmission) =>
    await supabase.from<NewFestival>("new_festivals").insert([submission]),
};
