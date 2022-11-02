import Card from '../card/card'

const Cards = () => {
    return (
        <div>
            <h2>My Cards</h2>
            <div>
                <Card>
                    <h3>titulo card 1</h3>
                    <p>esse é um texto do card 1</p>
                    <button className='btn'>aceitar</button>
                </Card>
                <Card>
                    <h3>titulo card 2</h3>
                    <p>esse é um texto do card 2</p>
                    <button className='btn'>outros</button>
                </Card>
                <Card>
                    <h3>titulo card 3</h3>
                    <p>esse é um texto do card 3</p>
                    <button className='btn'>cancelar</button>
                </Card>
            </div>

        </div>
    )
}

export default Cards