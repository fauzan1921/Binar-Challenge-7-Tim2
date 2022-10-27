const Landing = () => {
    return(
        <div>
            <nav class="navbar d-flex nav-style bg-secondary">
                <div class="col-2 px-5 py-3">
                    <a href="#"><p class="logo fs-5 fw-bold text-light no-underline">GAME WEB</p></a>
                </div>
                <div class="col-4 offset-2 d-flex justify-content-around px-5">
                    <a href="#"><p class="nav-item fs-5 fw-bold mx-3 text-light no-underline">REGISTER & LOGIN</p></a>
                    <a href="#"><p class="nav-item fs-5 fw-bold mx-3 text-light no-underline">PROFILE</p></a>
                </div>
            </nav>

            <div className="container mt-5">
                <h1 className="bold">Game List</h1>
                <ul>
                    <li><button>Rock, Paper, Scissors</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Landing