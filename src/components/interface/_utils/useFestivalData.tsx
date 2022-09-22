import { useEffect, useState } from "react";
import { RawFestival } from "../../../types";
import { supabaseMethods } from "../../../database/supabase";

export const useFestivalData = () => {
  const [festivals, setFestivals] = useState<RawFestival[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    const festivals = await getFestivalData();
    setIsLoading(false);
    setFestivals(festivals);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { festivals, isDataFetching: isLoading };
};

const getFestivalData = async (): Promise<RawFestival[]> => {
  try {
    const { data: festivals } =
      process.env.NODE_ENV === "production"
        ? await supabaseMethods.readApprovedFestivals()
        : await supabaseMethods.readAllFestivals();
    if (!festivals) throw new Error();
    return festivals;
  } catch {
    return [];
  }
};
