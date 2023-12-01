import { Stack, Divider } from "@mui/material";
import { Wrapper, Title, CardWrapper, RegisterButton, Img } from "../style";
import { google, facebook } from "@assets";

export default function SignUpCard() {
  return (
    <Wrapper>
      <CardWrapper>
        <Title>Sign up</Title>
        <RegisterButton>
          <Img src={google} />
          Continue with Google
        </RegisterButton>
        <RegisterButton second="true">
          <Img src={facebook} />
          Continue with Facebook
        </RegisterButton>
        <Divider>OR</Divider>
      </CardWrapper>
    </Wrapper>
  );
}
