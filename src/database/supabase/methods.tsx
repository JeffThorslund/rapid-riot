import { RawFestival, RawNewReport, ReportSubmissionLite } from "../../types";
import { getCoordinates } from "./getCoordinates";
import { SubmissionFormState } from "../../components/modal/submission/useSubmissionFormState";
import { supabase } from ".";

export const insertSubmission = async (submission: SubmissionFormState) => {
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

export const insertReport = (report: string) => {
  const dataToSend: ReportSubmissionLite = { report };
  return supabase.from<RawNewReport>("new_reports").insert([dataToSend]);
};
