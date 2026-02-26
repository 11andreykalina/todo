import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;

export const InfoBlock = styled.div`
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.card};

  font-size: 14px;
  line-height: 1.6;
`;

export const Label = styled.div`
  opacity: 0.7;
  font-size: 13px;
`;

export const Value = styled.div`
  font-weight: 500;
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: ${({ theme }) => theme.border};
  margin: 8px 0;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  height: 48px;
  padding: 0 14px;

  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.border};

  background: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};

  font-size: 14px;

  transition: border 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const Button = styled.button`
  height: 48px;

  border-radius: 12px;
  border: none;

  background: ${({ theme }) => theme.primary};
  color: #fff;

  font-weight: 600;
  cursor: pointer;

  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.p`
  color: #ff4d4f;
  font-size: 14px;
`;

export const SuccessText = styled.p`
  color: #52c41a;
  font-size: 14px;
`;