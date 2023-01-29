
const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className='welcoming-title'>COSMOS</h1>
                <h2 className="welcoming-subtitle">Beer Pub</h2>
            </header>
            <div className="app-explanation">
                <h2 className="exp-title">Welcome!</h2>
                <p className="texts">This is an interactive digital menu, order like an online shop and once you're ready, your waiter will approach to take the payment. <br /> Don't forget to add the table number.</p>
                <h3 className="exp-bye">Let's get started!</h3>
            </div>
            <div className="app-options">
                <div className="options menu">
                    <h2 className="option-text">Our Beers</h2>
                </div>
                <div className="options locals">
                    <h2 className="option-text">Locations</h2>
                </div>
            </div>
        </div>
    );
}

export default Home