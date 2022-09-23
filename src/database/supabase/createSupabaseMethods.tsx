import {
  RawFestival,
  RawNewReport,
  ReportSubmissionLite,
  RawFestivalLite,
} from "../../types";
import { SupabaseClient } from "@supabase/supabase-js";

export const createSupabaseMethods = (supabase: SupabaseClient) => {
  const readAllFestivals = () => {
    return supabase.from<RawFestival>("festivals").select("*");
  };

  const readApprovedFestivals = () => {
    return readAllFestivals().match({ approved: true });
  };

  const insertSubmission = (submission: RawFestivalLite) => {
    const fullSubmission = {
      ...submission,
      approved: false,
      lat: 0,
      lng: 0,
    };

    return supabase.from<RawFestival>("festivals").insert([fullSubmission]);
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
