import {
  FestivalSubmissionLite,
  RawFestival,
  RawNewFestival,
  RawNewReport,
  ReportSubmissionLite,
} from "../../types";
import { SupabaseClient } from "@supabase/supabase-js";

export const createSupabaseMethods = (supabase: SupabaseClient) => {
  const readAllFestivals = () => {
    return supabase.from<RawFestival>("festivals").select("*");
  };

  const readApprovedFestivals = () => {
    return readAllFestivals().match({ approved: true });
  };

  const insertSubmission = (submission: FestivalSubmissionLite) => {
    return supabase.from<RawNewFestival>("new_festivals").insert([submission]);
  };

  const insertReport = (report: string) => {
    const dataToSend: ReportSubmissionLite = { report };
    return supabase.from<RawNewReport>("new_reports").insert([dataToSend]);
  };

  return {
    readAllFestivals,
    readApprovedFestivals,
    insertSubmission,
    insertReport,
  };
};
