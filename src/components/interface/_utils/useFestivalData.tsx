import { useEffect, useState } from "react";
import { Festival } from "../../../types";
import { getFestivalData } from "../../../database";

export const useFestivalData = () => {
  const [festivals, setFestivals] = useState<Festival[]>([]);

  useEffect(() => {
    const festivals = getFestivalData();
    setFestivals(festivals);
  }, []);

  return festivals;
};
