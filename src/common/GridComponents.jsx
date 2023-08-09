import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: calc(100% - 3rem);
  height: calc(100% - 3rem);
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`

export const DimmedLayer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: black;
  opacity: 0;
  pointer-events: none;
`

export const Card = styled(motion.div)`
  background-color: var(--bg-color-alt);
  border: 2px solid var(--color);
  border-radius: 1.5rem;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:nth-child(1) {
    grid-column: 1;
    grid-row: 1 / span 2;
  }

  &:nth-child(2) {
    grid-column: 2;
    grid-row: 1;
  }

  &:nth-child(3) {
    grid-column: 3;
    grid-row: 1;
  }

  &:nth-child(4) {
    grid-column: 2;
    grid-row: 2;
  }

  &:nth-child(5) {
    grid-column: 3;
    grid-row: 2;
  }

  ${(props) =>
    props.opened &&
    css`
      color: var(--color);
      border: 2px solid var(--color);
      border-radius: 1.5rem;
      cursor: pointer;
      height: calc(100vh - 7rem);
      width: calc(100vw - 7em);
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      z-index: 10;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: column;

      > div {
        background-color: var(--bg-color-alt);
        height: 100%;
        width: 100%;
        border-radius: 1.5rem;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }
    `}
`
