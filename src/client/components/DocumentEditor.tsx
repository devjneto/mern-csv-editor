import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Link,
} from '@chakra-ui/react';
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';

export default function DocumentEditor({ document }) {
  const changedInput = (row, col) => {
    return (value) => {
      console.log('changed', row, col, value);
    };
  };

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="gray" size="md">
        <TableCaption>View e edit file</TableCaption>
        <Thead>
          <Tr>
            {document.columns.map((header) => (
              <Th>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {document.lines.map((line, lineIndex) => {
            const lineSplitted = line.split(',');

            return (
              <Tr key={lineSplitted[0]}>
                {lineSplitted.map((cell, cellIndex) => (
                  <Td>
                    <Editable
                      defaultValue={cell}
                      onChange={changedInput(lineIndex, cellIndex)}
                    >
                      <EditablePreview />
                      <EditableInput />
                    </Editable>
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
