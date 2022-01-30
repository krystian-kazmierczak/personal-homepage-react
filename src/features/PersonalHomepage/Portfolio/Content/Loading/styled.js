import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;
export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  margin-top: 88px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 17px;
    margin-top: 32px;
  }
`;

export const StyledSpinner = styled(Spinner)`
  margin-top: 48px;
  animation: ${rotate} 3s linear infinite;
  color: ${({ theme }) => theme.colors.primary};
  height: auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-top: 32px;
    width: 60px;
  }
`;
