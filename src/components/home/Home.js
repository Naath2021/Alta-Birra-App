
const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className='welcoming-title'>Alta Birra</h1>
            </header>
            <div className="app-explanation">
                <h2 className="exp-title">¡BIENVENIDO!</h2>
                <p className="texts">Este es un menú digital interactivo, realizá tu pedido como si fuera una compra online y una vez listo, tu mesero se acercará para tomarte el pago. Recordá colocar tu número de mesa en el carrito.</p>
                <h3 className="exp-bye">¡Que disfrutes!</h3>
            </div>
            <div className="app-options">
                <div className="options menu">
                    <h2 className="option-text">Cervezas</h2>
                </div>
                <div className="options locals">
                    <h2 className="option-text">Locales</h2>
                </div>
            </div>
        </div>
    );
}

export default Home