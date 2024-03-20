import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Select, Checkbox, Container, Heading } from "@chakra-ui/react";

const Index = () => {
  const [students, setStudents] = useState([
    { rollNumber: 1, name: "John Doe", grade: "A", subject: "Math", passed: true },
    { rollNumber: 2, name: "Jane Smith", grade: "B", subject: "Science", passed: false },
    { rollNumber: 3, name: "Mike Johnson", grade: "C", subject: "English", passed: true },
  ]);

  const handleSubjectChange = (index, subject) => {
    const updatedStudents = [...students];
    updatedStudents[index].subject = subject;
    setStudents(updatedStudents);
  };

  const handlePassedChange = (index, passed) => {
    const updatedStudents = [...students];
    updatedStudents[index].passed = passed;
    setStudents(updatedStudents);
  };

  return (
    <Container>
      <Heading as="h2" size="xl" textAlign="center" my={8}>
        Student Promotion Table
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Roll Number</Th>
            <Th>Name</Th>
            <Th>Grade</Th>
            <Th>Subject</Th>
            <Th>Passed</Th>
          </Tr>
        </Thead>
        <Tbody>
          {students.map((student, index) => (
            <Tr key={student.rollNumber}>
              <Td>{student.rollNumber}</Td>
              <Td>{student.name}</Td>
              <Td>{student.grade}</Td>
              <Td>
                <Select value={student.subject} onChange={(e) => handleSubjectChange(index, e.target.value)}>
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="English">English</option>
                </Select>
              </Td>
              <Td>
                <Checkbox isChecked={student.passed} onChange={(e) => handlePassedChange(index, e.target.checked)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default Index;
