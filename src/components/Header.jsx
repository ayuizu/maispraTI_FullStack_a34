// import "./Header.module.css"
import classes from "./Header.module.css"


function Header(){
    return (

        <header>
            <nav>
                <div id="logo" >
                    <a href="#"><img src="../src/assets/logo.PNG" alt="lynch." /></a>
                </div>
                <div id="name">
                    <h1>lynch.</h1>
                </div>
                <div id="menuHrz">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Biography</a></li>
                        <li><a href="#">Discography</a></li>
                        <li><a href="#">Live</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div>

            </div>

        </header>

    )
}

export default Header