import styled from "styled-components";

const CardWrapper = styled.div`
  max-width: 430px;
  height: 695px;
  padding: 48px 28px;
  box-shadow: 0px 4px 32px 0px rgba(51, 51, 51, 0.04);
  border-radius: 12px;
`;

const RegisterButton = styled.button`
  width: 374px;
  display: flex;
  padding: 10px 24px;
  justify-content: center;
  border: 1px solid var(--foundation-grey-grey-900, #151515);
  cursor: pointer;
  align-items: center;
  gap: 16px;
  align-items: center;
  border-radius: 4px;
`;

const Img = styled.img`
  height: 24px;
  width: 24px;
`;

const Title = styled.h2`
  color: var(--foundation-grey-grey-900, #151515);
  font-family: Mulish;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export { CardWrapper, Img, RegisterButton, Title };
