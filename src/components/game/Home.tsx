import { useNavigate } from "react-router-dom";
import Container from "./Container";
import Options from "./Options";
import Option from "./Option";

const options = [
  { name: "Capitals", url: "/capitals" },
  { name: "Flags", url: "/flags" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Options>
        {options.map(({ name, url }, i) => {
          return (
            <Option onClick={() => navigate(url)} key={i}>
              {name}
            </Option>
          );
        })}
      </Options>
    </Container>
  );
}
