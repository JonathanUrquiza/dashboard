import Style from './usuarios.module.css'

export default function Usuarios() {
    return (
        <div className={Style.component}>
            <p className="mt-1 text-center">Total Usuarios Activos</p>
            <div className={Style.cardComponent}>
            
            <div className={Style.usuariosCard}>
            <p className='card-title'>Compradores</p>
            <p className='card-text fw-bold'>50</p>
            </div>
            <div className={Style.usuariosCard}>
            <p className='card-title'>Vendedores</p>
            <p className='card-text fw-bold'>44</p>
            </div>
            <div className={Style.usuariosCard}>
            <p className='card-title'>Inmobiliarias</p>
            <p className='card-text fw-bold'>10</p>
            </div>
    
        </div>
        </div>
      )
}
