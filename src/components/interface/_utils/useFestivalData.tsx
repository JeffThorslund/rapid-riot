import { useEffect, useState } from "react";
import { getFestivalData } from "../../../database";
import { definitions } from "../../../types/supabase";

export const useFestivalData = () => {
  const [festivals, setFestivals] = useState<definitions["festivals"][]>([]);

  useEffect(() => {
    (async () => {
      const festivals = await getFestivalData();
      setFestivals(festivals);
    })();
  }, []);

  return festivals;
};
