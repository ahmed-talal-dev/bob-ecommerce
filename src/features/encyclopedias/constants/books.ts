import { MOCK_ENCYCLOPEDIAS } from "../mock-data";

// Extracted catalog section slices to module scope to prevent reallocation on every render cycle.
export const LATEST_RELEASES = MOCK_ENCYCLOPEDIAS.slice(0, 4);
export const AWTAD_BOOKS = MOCK_ENCYCLOPEDIAS.slice(2, 6);

export const PUBLIC_LAW_BOOKS = [
  MOCK_ENCYCLOPEDIAS[0],
  MOCK_ENCYCLOPEDIAS[2],
  MOCK_ENCYCLOPEDIAS[4],
  MOCK_ENCYCLOPEDIAS[5],
];

export const PRIVATE_LAW_BOOKS = [
  MOCK_ENCYCLOPEDIAS[1],
  MOCK_ENCYCLOPEDIAS[3],
  MOCK_ENCYCLOPEDIAS[4],
  MOCK_ENCYCLOPEDIAS[0],
];

export const LEGAL_CULTURE_BOOKS = [
  MOCK_ENCYCLOPEDIAS[3],
  MOCK_ENCYCLOPEDIAS[5],
  MOCK_ENCYCLOPEDIAS[1],
  MOCK_ENCYCLOPEDIAS[2],
];

export const ENCYCLOPEDIAS = MOCK_ENCYCLOPEDIAS.slice(1, 5);
