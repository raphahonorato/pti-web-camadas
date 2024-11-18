import './Card.css'

export default function Card({obs, titulo, li, autor, imagem}) {


    return (
        <>
            <div className='divCard'>
                <div className="principalDiv">
                    <div className="contImagem">
                        <img src={imagem} />
                    </div>
                    <div className="texto">
                        <p id='obs'>{obs}</p>
                        <h1 id='titulo'>{titulo}</h1>
                        <li id='itemLista'>{li}</li>
                        <p id='autor'>{autor}</p>
                    </div>
                </div>
            </div>
        </>
    )
}