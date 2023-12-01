import { Title, CardWrapper, RegisterButton, Img } from "../style";
import { google, facebook } from "@assets";

export default function SignUpCard() {
  return (
    <CardWrapper>
      <Title>Sign up</Title>
      <RegisterButton>
        <Img src={google} />
        Continue with Google
      </RegisterButton>
      <RegisterButton>
        <Img src={facebook} />
        Continue with Facebook
      </RegisterButton>
    </CardWrapper>
  );
}
