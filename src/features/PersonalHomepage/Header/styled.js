import styled from "styled-components";
import { ReactComponent as EnvelopeIcon } from "./envelope.svg";
import { ButtonLink } from "./../ButtonLink/styled";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  align-items: center;
  text-align: justify;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}px) {
    grid-gap: 32px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr;
  }
`;

export const Images = styled.img`
  width: 358px;
  margin-top: 100px;
  border-radius: 10em;
`;

export const Iam = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: initial;
`;

export const Name = styled.h1`
  font-size: 38px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 12px 0 0 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 18px;
    margin-top: 8px;
  }
`;

export const Description = styled.section`
  margin-left: 66px;
  margin-top: 70px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 0;
  }
`;

export const Summary = styled.p`
  font-size: 20px;
  letter-spacing: 0.05em;
  line-height: 140%;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 16px;
    max-width: 570px;
  }
`;

export const StyledButton = styled(ButtonLink)`
  display: inline-flex;
  align-items: center;
  margin-top: 32px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-top: 24px;
  }
`;

export const ButtonIcon = styled(EnvelopeIcon)`
  margin-right: 16px;
`;
