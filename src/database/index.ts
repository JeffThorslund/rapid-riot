import { supabaseMethods } from "./supabase";
import { definitions } from "../types/supabase";

export const getFestivalData = async (): Promise<
  definitions["festivals"][]
> => {
  const festivals = await supabaseMethods.readAllFestivals();

  if (!festivals) return [];

  return festivals;
};
