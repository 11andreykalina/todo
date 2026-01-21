import styled from 'styled-components';


export const StyledInput = styled.input`  
  max-width: 110px;
  max-height: 36px;
`;

export const SaveButton = styled.button`
  margin-left: 8px;
  max-width: 98px;
  max-height: 36px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-size: 12px;
`;  
export const CancelButton = styled.button`
  max-width: 98px;
  max-height: 36px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-size: 12px;

`;  

export const Styled = {
  Input: StyledInput,
  SaveButton: SaveButton,
  CancelButton: CancelButton,
};