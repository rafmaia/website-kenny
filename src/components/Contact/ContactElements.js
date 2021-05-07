import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
  position: static;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    #bf8d58 0%,
    #e4a96a 100%
  );
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  margin-bottom: 32px;
  text-decoration: none;
  color: #f4e8de;
  font-weight: 700;
  font-size: 24px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #442c23;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 50px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 25px;
  color: #f4e8de;
  font-size: 22px;
  font-weight: 200;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  color: #f4e8de;
`;
export const FormInput = styled.input`
  background-color: #f4e8de;
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
`;

export const Textarea = styled.textarea`
  background-color: #f4e8de;
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
`;

export const FormButton = styled.button`
  background: #e4a96a;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #442c23;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;