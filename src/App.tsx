import { FC } from 'react'
import { Button, Typography } from '@mui/material'

import { ReactComponent as ReactLogo } from '@Assets/react.svg'
import { ReactComponent as ViteLogo } from '@Assets/vite.svg'
import useCounter from '@Hooks/counter/useCounter'

import * as styles from './styles'

/**
 * This component is used in the App.stories.tsx file
 */
const App: FC = () => {
  const { count, increment, decrement, incrementByAmount } = useCounter()

  return (
    <div css={styles.app}>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <ViteLogo css={styles.logo} />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <ReactLogo css={[styles.logo, styles.reactLogo]} />
        </a>
      </div>
      <Typography variant="h2" component="h1" align="center">
        Vite + React + TypeScript + Storybook + MUI
      </Typography>
      <div css={styles.card}>
        <div css={styles.button}>
          <Button onClick={() => incrementByAmount(-10)} variant="outlined">
            - 10
          </Button>
          <Button onClick={decrement} variant="outlined">
            - 1
          </Button>
          <Typography variant="h5">count is {count}</Typography>
          <Button onClick={increment} variant="outlined">
            + 1
          </Button>
          <Button onClick={() => incrementByAmount(10)} variant="outlined">
            + 10
          </Button>
        </div>
        <Typography>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Typography>
      </div>
      <Typography css={styles.readTheDocs}>Click on the Vite and React logos to learn more</Typography>
    </div>
  )
}

export default App
