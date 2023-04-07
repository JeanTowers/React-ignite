import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayourContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayourContainer>
      <Header />
      <Outlet />
    </LayourContainer>
  )
}
