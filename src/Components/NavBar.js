import carrito from '../img/carrito.png'

const NavBar = () => {
  return (
    <div className = 'bg-rose-500 font-sans p-10 '>
        <div className ='container mx-auto flex justify-between items-center'>
            <h1 className ='text-6xl font-bold text-neutral-50'>E-Commerce</h1>

            <img className='hover:cursor-pointer' src={carrito}/>

            <nav className =' flex gap-10 '>
            <a  className ='text-4xl text-neutral-50 hover:cursor-pointer'>Inicio</a>
            <a  className ='text-4xl text-neutral-50 hover:cursor-pointer'>Productos</a>
            <a  className ='text-4xl text-neutral-50 hover:cursor-pointer'>Contacto</a>
            </nav>
        </div>
    </div>
  )
}
export default NavBar
