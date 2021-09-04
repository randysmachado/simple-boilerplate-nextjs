import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #1e2235;
  color: #fff;
  width: 100%;
  height: 100%;

  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem;
`

export const Title = styled.h1`
  font-size: 3rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(40rem, 100%);
`
