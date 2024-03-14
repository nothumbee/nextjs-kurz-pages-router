import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const Heading = styled.h1`
  color: green;
`;

const Advanced = styled.p`
  ${({ $isBigger }) => $isBigger && "font-size: 32px;"};
`;

const StyledComponentsPage = () => (
  <Container>
    <Container />

    <Heading>Styled-components Example in Next.js</Heading>
    <p>This is a paragraph styled with styled-components.</p>

    <Advanced>This is a paragraph styled with styled-components.</Advanced>

    <Advanced $isBigger>
      This is a bigger paragraph styled with styled-components.
    </Advanced>

    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, color: "grey" }}>
        <p>This is a paragraph styled with styled-components.</p>
      </div>
      <div style={{ flex: 1 }}>
        <p>This is a paragraph styled with styled-components.</p>
      </div>
    </div>
  </Container>
);

export default StyledComponentsPage;
