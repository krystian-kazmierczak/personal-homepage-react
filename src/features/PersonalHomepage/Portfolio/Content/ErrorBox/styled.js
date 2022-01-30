import styled from "styled-components";

export const Wrapper = styled.article`
  margin-top: 96px;
  display: grid;
  justify-items: center;
  grid-gap: 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-gap: 24px;
  }
`;

export const Header = styled.header`
  font-weight: 700;
  font-size: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 17px;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 1.4;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-gap: 16px;
  }
`;
export const ButtonLink = styled.a`
  padding: 12px 16px;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.buttonLink.text};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  background: ${({ theme }) => theme.colors.primary};
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.buttonLink.shadow};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 18px;
  }
`;
