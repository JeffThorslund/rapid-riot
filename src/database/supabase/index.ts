import { createClient } from "@supabase/supabase-js";
import {
  FestivalSubmissionLite,
  RawNewFestival,
  RawNewReport,
  ReportSubmissionLite,
} from "../../types";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "";
const supabasePublicKey = process.env.REACT_APP_SUPABASE_PUBLIC_KEY || "";

const supabase = createClient(supabaseUrl, supabasePublicKey);

export const supabaseMethods = {
  insertSubmission: async (submission: FestivalSubmissionLite) =>
    await supabase.from<RawNewFestival>("new_festivals").insert([submission]),
  insertReport: async (report: string) => {
    const dataToSend: ReportSubmissionLite = { report };
    await supabase.from<RawNewReport>("new_reports").insert([dataToSend]);
  },
};
