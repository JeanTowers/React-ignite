import { useState } from 'react'
import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { defaultTHeme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTHeme}>
      <Button variant="primary"/>
      <Button variant="secondary"/>
      <Button variant="danger"/>
      <Button variant="success"/>
      <Button/>
    </ThemeProvider>
  )
}


