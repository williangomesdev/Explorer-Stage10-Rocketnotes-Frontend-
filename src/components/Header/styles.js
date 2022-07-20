import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 6.5625rem;
  width: 100%;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
  background: red;
`;
