import { CardWrapper, RegisterButton, Img } from "./style";
import { google, facebook } from "@assets";

export default function Card() {
  return (
    <CardWrapper>
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
