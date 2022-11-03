import Card from '../card/card'

const cardsTitle = ['titulo card 1', 'titulo card 2', 'titulo card 3']

const showCardColor = (color) => {
    console.log(color)
}

const Cards = () => {
    return (
        <div>
            <h2>My Cards</h2>
            <div>
                {
                    cardsTitle.map((cardsTitle, index) => (
                        <Card key={index} showCardColor={showCardColor}>
                            <h3>{cardsTitle}</h3>
                            <p>esse é um titulo do card</p>
                        </Card>
                    ))
                }

                <Card color='blue' showCardColor={showCardColor}>
                    <h3>Card com fundo azul</h3>
                    <p>esse é um texto do card com fundo azul</p>
                </Card>
            </div>

        </div>
    )
}

export default Cards