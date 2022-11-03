import * as readline from 'readline';
import * as stream from 'stream';
export const parseCsvUploaded = async (csvData: string): Promise<any> => {
  if (!csvData) {
    return null;
  }

  const csvBuffer = Buffer.from(csvData, 'utf-8');
  const bufferStream = new stream.PassThrough();
  bufferStream.end(csvBuffer);

  const fileRead = readline.createInterface({
    input: bufferStream,
  });

  return new Promise((resolve, reject) => {
    const lines = [];

    fileRead.on('line', (line) => {
      lines.push(line);
    });

    fileRead.on('close', () => {
      const columns = lines[0].split(',');
      resolve({ columns, lines: lines.slice(1) });
    });
  });
};
