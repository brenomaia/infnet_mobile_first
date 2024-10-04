import styled from "styled-components";

const Tasks = styled.div`
  width: 100%;
  padding: 0 !important;
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

const TasksTable = styled.table`
  width: 70%;
  padding: 0 !important;
  border-collapse: collapse;

  tr, th, td {
    border: 1px solid;
  }
`;

export {
    Tasks,
    TasksTable
}