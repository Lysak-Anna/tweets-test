import Gallery from "../Gallery";
import { Icon, Main, StyledLink } from "./MainSection.styled";

export default function MainSection() {
  return (
    <Main>
      <StyledLink to="/tweets">
        Let's follow your favorite heroes <Icon />
      </StyledLink>

      <Gallery />
    </Main>
  );
}
