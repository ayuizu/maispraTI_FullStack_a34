import classes from "./Hero.module.css"

function Hero(){
    return(
        <div className={classes.hero}>
            <div></div>
            <div><img src="../src/assets/banner.jpg" alt="Hero-Image" /></div>
            <div></div>
        </div>
    )
}

export default Hero