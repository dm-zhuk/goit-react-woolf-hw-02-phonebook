import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightblue;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

export const SubTitle = styled.h2`
  color: white;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  width: 320px;
`;

export const Label = styled.label`
  width: 320px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
  margin: 8px 0 12px;
  border-radius: 4px;
  border: 1px solid lightgray;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SubmitButton = styled.button`
  display: block;
  color: #ffffff;
  border-radius: 4px;
  border: none;
  padding: 8px 24px;
  background-color: rgb(183, 183, 185);
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
