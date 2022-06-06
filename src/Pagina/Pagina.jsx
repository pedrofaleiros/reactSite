import { useState } from 'react'
import { Footer } from '../footer/Footer'
import { Menu } from '../Menu/Menu'
import { Produtos } from '../Produtos/Produtos'
import './style.css'

export function Pagina() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Menu />
      <Produtos />
      <Footer />
    </div>
  )
}
