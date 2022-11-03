import * as Papa from 'papaparse';

export const parseCsvUploaded = (csvData: string) => {
  const csv = Papa.parse(csvData, { header: true });
  return csv.data;
};
