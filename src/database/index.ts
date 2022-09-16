import { Festival } from "../types";
import { dataProvider } from "./data";
import { mockDataProvider } from "./mock";
import { createClient } from "@supabase/supabase-js";

export const getFestivalData = (): Festival[] => {
  if (process.env.NODE_ENV === "production") {
    return dataProvider();
  }

  return mockDataProvider();
};

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "";
const supabasePublicKey = process.env.REACT_APP_SUPABASE_PUBLIC_KEY || "";

export const supabase = createClient(supabaseUrl, supabasePublicKey);
