import { RawFestival, RawNewReport, ReportSubmissionLite } from "../../types";
import { SupabaseClient } from "@supabase/supabase-js";
import { getCoordinates } from "./getCoordinates";
import { SubmissionFormState } from "../../components/modal/submission/useSubmissionFormState";

export const createSupabaseMethods = (supabase: SupabaseClient) => {
  const readAllFestivals = () => {
    return supabase.from<RawFestival>("festivals").select("*");
  };

  const readApprovedFestivals = () => {
    return readAllFestivals().match({ approved: true });
  };

  const insertSubmission = async (submission: SubmissionFormState) => {
    const { lat, lng } = await getCoordinates(
      submission.city,
      submission.state,
      submission.country
    );

    const fullSubmission = {
      ...submission,
      approved: false,
      lat: lat,
      lng: lng,
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
