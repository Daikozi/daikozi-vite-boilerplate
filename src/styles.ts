import { css, keyframes } from '@emotion/react'
import { rem } from 'polished'

const logoSpin = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
})

export const app = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'center',
  width: '100%',
})

export const logo = css({
  '&:hover': {
    filter: 'drop-shadow(0 0 2em #646cffaa)',
  },
  height: rem(96),
  padding: rem(24),
  transition: 'filter 0.3s ease-in-out',
  width: rem(96),
  willChange: 'filter',
})

export const reactLogo = css({
  '&:hover': {
    filter: 'drop-shadow(0 0 2em #61dafbaa)',
  },
  animation: `${logoSpin} infinite 20s linear`,
})

export const card = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  padding: rem(32),
})

export const button = css({
  alignItems: 'center',
  display: 'flex',
  gap: rem(16),
  marginBottom: rem(32),
})

export const readTheDocs = css({
  color: '#888',
})
