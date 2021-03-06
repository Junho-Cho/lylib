import Link from "next/link";
import styled from "@emotion/styled";

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 10px 40px;
  top: 0;
  z-index: 10;
`;

const Title = styled.div`
  font-size: 30px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <Container>
      <Link href="/">
        <Title>LYLIB</Title>
      </Link>
      <Link href="https://github.com/Junho-Cho/lylib" passHref>
        <a target="_blank">
          <img src="/icon_github.png" />
        </a>
      </Link>
    </Container>
  );
};

export default Header;
