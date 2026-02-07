import styled from 'styled-components';


export const StyledInput = styled.input`  
  max-width: 90px;
  max-height: 36px;
`;

export const SaveButton = styled.button`
  margin-left: 8px;
  width: 36px;
  height: 36px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center
`;  
export const CancelButton = styled.button`
  max-width: 36px;
  max-height: 36px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center
`;  

export const Styled = {
  Input: StyledInput,
  SaveButton: SaveButton,
  CancelButton: CancelButton,
};