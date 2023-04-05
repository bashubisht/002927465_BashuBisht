import { Card } from "./Card"
import "../styles/about.css";

export const About = () => {

    return (
    <div class="container">
        <Card name="ABOUT US"/> 
        <h1 className="container_header">
          The Cake World
        </h1>
        <h1 className='aboutUs'>
          Here at The Cake World, baking is our passion! Every cake is delicious and freshly baked with high quality ingredients. <br/>
          We offer variety of flavours with custom for every occasion.
        </h1>
        <div className="Contact Footer">
             <footer className="footer">&copy;The Cake World, All Rights Reserved</footer> 
        </div>
        

    </div>  )
}