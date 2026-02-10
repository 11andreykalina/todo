import styled from "styled-components";


export const StyledInput = styled.input`
  flex: 1;
  min-width: 0;

  padding: 6px 8px;

  max-height: 36px;
  font-size: 14px;

  border-radius: 6px;
`;

const IconButton = styled.button`
  min-width: 44px;
  min-height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  line-height: 1;

  border-radius: 8px;
  cursor: pointer;

  white-space: nowrap;
`;


export const SaveButton = styled(IconButton)`
  margin-left: 8px;
`;


export const CancelButton = styled(IconButton)``;

export const Styled = {
  Input: StyledInput,
  SaveButton,
  CancelButton,
};
