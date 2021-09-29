import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -10rem;

  div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    background: var(--shape);
    padding: 1.5rem 4rem 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    margin: 1rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: normal;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }
`;
