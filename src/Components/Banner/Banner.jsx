import './Banner.css'

export default function Banner() {


    return (
        <>
            <div className="container">
                <div className='colunaPadrao'>
                    <div className="coluna1">
                        <div className="colunaprincipal cards">
                            <div id='tituloPrincipal'>
                                <p>Presidente nos EUA</p>
                            </div>
                            <div id='textoPrincipal'>
                                <h1>Biden visita Manaus e anuncia recursos para proteção da Floresta Amazônica</h1>
                                <ul>
                                    <li>Escolta do presidente dos EUA terá PRF, Exército e Serviço Secreto</li>
                                    <li>Biden estará na cúpula do G20: veja lista de líderes que vem ao Rio</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="coluna2">
                        <div className="colunapequena1 cards">
                            <div>
                                <p>Evento no México</p>
                            </div>
                            <div>
                                <h1>Candidata da Dinamarca vence o concurso Miss Universo 2024</h1>
                            </div>
                        </div>
                        <div className="colunapequena2 cards">
                            <div>
                                <p>🍷​</p>
                            </div>
                            <div>
                                <h1>Conheça a única vinícola brasileira em lista de 100 melhores do mundo</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
