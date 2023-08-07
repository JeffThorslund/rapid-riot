import { RawFestival } from "../../../types";
import { isAdminMode } from "../../_utils/isAdminMode";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../database/supabase";

export const useFestivalData = () => {
  return useQuery({
    queryKey: ["festivals"],
    queryFn: getFestivalData,
  });
};

const getFestivalData = async (): Promise<RawFestival[]> => {
  try {
    const { data: festivals, error } = isAdminMode
      ? await readAllFestivals()
      : await readApprovedFestivals();

    if (error) throw new Error(error.message);

    if (!festivals) throw new Error("No festivals returned");

    return festivals;
  } catch {
    throw new Error("500 error");
  }
};

const readAllFestivals = () => {
  return supabase.from<RawFestival>("festivals").select("*");
};

const readApprovedFestivals = () => {
  return readAllFestivals().match({ approved: true });
};
