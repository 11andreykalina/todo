import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const Modal = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 24px;
  max-width: 300px;
  width: 90%;
  color: ${({ theme }) => theme.text};
`;

export const Title = styled.h3`
  margin-bottom: 12px;
`;

export const Content = styled.p`
  white-space: pre-wrap;
  line-height: 1.4;

  word-break: break-word;
  overflow-wrap: anywhere;
`;

export const CloseModal = styled.button`
  margin-top: 16px;
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;
