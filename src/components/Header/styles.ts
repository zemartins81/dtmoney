import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1120px;
  margin: auto;
  padding: 0 1rem 10rem;

  img {
    margin-top: 2rem;
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    margin-top: 2rem;
    height: 4rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
