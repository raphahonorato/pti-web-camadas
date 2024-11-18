import './Header.css'
import Menu from './Menu/Menu'

export default function Header() {


    return (
        <>
            <div className='containerMain'>
                <div id='containerHeader'>
                    <div>
                        <ul className='listHeader'>
                            <li className='listItem item azul'><a href="#">globo.com</a></li>
                            <li className='listItem item vermelho'><a href="#">g1</a></li>
                            <li className='listItem item verde'><a href="#">ge</a></li>
                            <li className='listItem item laranja'><a href="#">gshow</a></li>
                            <li className='listItem item rosa'><a href="#">globoplay</a></li>
                            <li className='listItem item cinza'><a href="#">jornal nacional</a></li>
                            <li className='listItem item azulClaro'><a href="#">o globo</a></li>
                        </ul>
                    </div>
                    <div id='containerListHeader2'>
                        <ul className='listHeader listHeader2'>
                            <li className='user'>
                                <a href="#"> Assine Já </a>
                            </li>
                            <li className='user' id='iconUser'>
                                <a href="#">
                                    <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                    Conta Globo
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Menu />
        </>

    )
}