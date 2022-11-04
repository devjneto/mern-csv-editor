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
} from '@chakra-ui/react';
import { formatDate } from '../helpers/date-helper';

export default function DocumentsTable({ documents }) {
  return (
    <Box display="flex" justifyContent="center">
      <TableContainer>
        <Table variant="striped" colorScheme="gray" size="md">
          <TableCaption>Uploaded files</TableCaption>
          <Thead>
            <Tr>
              <Th>Filename</Th>
              <Th isNumeric>Uploaded At</Th>
              <Th isNumeric>Num lines</Th>
              <Th isNumeric>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {documents.map((document, index) => (
              <Tr key={index}>
                <Td>{document.filename}</Td>
                <Td>Date: {formatDate(document.upload_at)}</Td>
                <Td isNumeric>{document.numLines}</Td>
                <Td>
                  <Link href={`/doc/${document.id}`}>
                    <Button colorScheme="blue" size="sm">
                      View
                    </Button>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
