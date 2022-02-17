import styled from "styled-components";

export const Section = styled.section`
  margin-top: 72px;
  padding: 32px;
  background: ${({ theme }) => theme.colors.boxBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  transition: background 0.3s;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 48px;
    padding: 16px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 30px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.textPrimary};
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding-bottom: 12px;
    font-size: 18px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px 32px;
  list-style: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
    margin-top: 12px;
    font-size: 14px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  line-height: 1.4;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    line-height: 1.2;
  }
  &:before {
    color: ${({ theme }) => theme.colors.primary};
    content: "●";
    margin-right: 8px;
  }
`;
