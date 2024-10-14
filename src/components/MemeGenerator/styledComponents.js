import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: #ffffff;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 60px;
  font-family: 'Roboto';

  @media screen and (max-width: 577px) {
    padding: 26px;
  }
`

export const Heading = styled.h1`
  color: #35469c;
  font-size: 42px;
  font-weight: 600;

  @media screen and (max-width: 577px) {
    font-size: 26px;
    align-self: center;
  }
`
export const MemeGeneratorSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 577px) {
    flex-direction: column;
  }
`

export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 358px;

  @media screen and (max-width: 577px) {
    width: 100%;
    order: 1;
  }
`

export const Label = styled.label`
  color: #7e858e;
  font-size: 14px;
  margin-bottom: 5px;
`

export const InputElement = styled.input`
  width: 100%;
  height: 36px;
  border: solid 1px #d7dfe9;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500px;
  color: #5a7184;
  padding: 7px 13px;
  margin-bottom: 16px;

  &:focus {
    outline: none;
  }
`

export const FontSizeSelection = styled.select`
  width: 100%;
  height: 36px;
  border: solid 1px #d7dfe9;
  border-radius: 6px;
  background-color: #ffffff
  font-size: 16px;
  color: #1e293b;
  padding: 7px 13px;
  margin-bottom: 16px;

  &:focus {
    outline: none;
  }
`

export const MemeGeneratorButton = styled.button`
  height: 40px;
  width: 50%;
  background-color: #0b69ff;
  border-width: 0;
  border-radius: 6px;
  color: #ffffff;
  font-size: 17px;
  font-weight: 500;
  margin-top: 20px;
`

export const MemeContainer = styled.div`
  background-image: ${props => props.bgImage};
  background-size: cover;
  width: 50%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 577px) {
    width: 100%;
    order: 0;
    min-height: 228px;
    margin-bottom: 30px;
  }
`

export const MemeTaglines = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize};
  font-weight: 500;
  text-align: center;
  margin: 0;
`
