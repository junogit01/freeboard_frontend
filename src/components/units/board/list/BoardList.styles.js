import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
  display: flex;
  flex-direction: column;
`;

export const Twrap = styled.div`
  width: 100%;
  margin-bottom: 25px;
`;

export const Table = styled.table`
  border-top: 3px solid gray;
  border-bottom: 3px solid gray;
  border-collapse: collapse;
`;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 14 14 14 16px;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: right;
  width: 75%;
`;

export const THNumber = styled.th`
  width: 10%;
  text-align: center;
  border-bottom: 1px solid lightgray;
  padding: 10px;
`;

export const THTitle = styled.th`
  width: 70%;
  text-align: center;
  border-bottom: 1px solid lightgray;
  padding: 10px;
`;

export const THWriter = styled.th`
  width: 10%;
  text-align: center;
  border-bottom: 1px solid lightgray;
  padding: 10px;
`;

export const ThCreatedAt = styled.th`
  width: 10%;
  text-align: center;
  border-bottom: 1px solid lightgray;
  padding: 10px;
`;

export const TdNumber = styled.td`
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;

export const TdTitle = styled.td`
  text-align: center;
  border-bottom: 1px solid lightgray;
`;

export const TdWriter = styled.td`
  text-align: center;
  border-bottom: 1px solid lightgray;
`;

export const TdCreatedAt = styled.td`
  text-align: center;
  border-bottom: 1px solid lightgray;
`;
