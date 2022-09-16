import { createClient } from "@supabase/supabase-js";
import {
  NewFestival,
  NewFestivalSubmission,
  NewReport,
  NewReportSubmission,
} from "../../types";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "";
const supabasePublicKey = process.env.REACT_APP_SUPABASE_PUBLIC_KEY || "";

const supabase = createClient(supabaseUrl, supabasePublicKey);

export const supabaseMethods = {
  insertSubmission: async (submission: NewFestivalSubmission) =>
    await supabase.from<NewFestival>("new_festivals").insert([submission]),
  insertReport: async (report: string) => {
    const dataToSend: NewReportSubmission = { report };
    await supabase.from<NewReport>("new_reports").insert([dataToSend]);
  },
};
