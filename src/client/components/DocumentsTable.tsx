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

export default function DocumentsTable({ documents }) {
  return (
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
          {documents.map((document) => (
            <Tr key={document.id}>
              <Td>{document.filename}</Td>
              <Td>Date: {}</Td>
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
  );
}
