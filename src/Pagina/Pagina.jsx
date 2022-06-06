import { useState } from 'react'
import { Footer } from '../footer/Footer'
import { Menu } from '../Menu/Menu'
import { Principal } from '../Principal/Principal'
import './style.css'

export function Pagina() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Menu />
      <Principal />
      <Footer />
    </div>
  )
}
