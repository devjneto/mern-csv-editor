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
  Box,
  Stack,
} from '@chakra-ui/react';
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDocumentEditions } from '../features/documentEditorSlice';
import { addDocumentUpdate, saveDocumentUpdates } from '../features/documents';

export default function DocumentEditor({ document }) {
  const { _id: id } = document;
  const dispatcher = useDispatch<any>();

  useEffect(() => {
    if (!id) {
      return;
    }
    const editions = dispatcher(getDocumentEditions(id));
  }, [id, dispatcher]);

  const changedInput = (row, col) => {
    let editionTimeout;
    return (value) => {
      if (editionTimeout) {
        clearTimeout(editionTimeout);
      }
      editionTimeout = setTimeout(() => {
        dispatcher(addDocumentUpdate({ id, row, col, value }));
      }, 1000);
    };
  };

  const saveChanges = () => {
    dispatcher(saveDocumentUpdates({ id }));
  };

  return (
    <Box display="grid" gridGap={2} gridAutoFlow="row dense">
      <Stack spacing={4} direction="row-reverse">
        <Button onClick={saveChanges} colorScheme="blue" size="sm">
          Save changes
        </Button>
        <Link href={'/'}>
          <Button colorScheme="gray" size="sm">
            Back to documents
          </Button>
        </Link>
      </Stack>

      <TableContainer>
        <Table variant="striped" colorScheme="gray" size="md">
          <TableCaption>View e edit file</TableCaption>
          <Thead>
            <Tr>
              {document.columns.map((header, headerIndex) => (
                <Th key={headerIndex}>{header}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {document.lines.map((line, lineIndex) => {
              const lineSplitted = line.split(',');

              return (
                <Tr key={lineIndex}>
                  {lineSplitted.map((cell, cellIndex) => (
                    <Td key={cellIndex}>
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
    </Box>
  );
}
