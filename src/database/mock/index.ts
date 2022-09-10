import { Festival } from "../../types";
import { createMockFestivals } from "../createMockFestivals";

export const getMockData = (): Festival[] => createMockFestivals(40);
