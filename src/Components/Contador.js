import { useState } from "react"

const Contador = () => {

    const [valor, setValor] = useState(0)

    const Sumar = () => { setValor (valor + 1) }

    const Restar = () => { setValor(valor - 1) }

  return (
    <div className="text-center container mx-auto">
    <button onClick={Restar}>-</button>
    <p> {valor} </p>
    <button onClick={Sumar}>+</button>

    </div>
  )
}
export default Contador