import {Link} from 'react-router-dom';
import { Card } from './Card';
//import {Wallpaper}from "./images/wallpaper.png";
import "../styles/home.css";


export const Home = () => {
    return (
    <div className='homePage' >        
     
      <Card name="HOME" className='card'></Card>
      <h1 className='Header'> THE CAKE WORLD </h1>
      <div className='HomeDescription'>The Cake World is a charming and inviting place where customers can indulge in a variety of delicious cakes and baked treats. From classic cakes like chocolate and vanilla to more unique flavors like matcha and red velvet, the shop offers a wide range of options to satisfy any sweet tooth. The shop is typically decorated with an assortment of cakes on display, and the aroma of freshly baked goods fills the air. Friendly staff members are always on hand to assist customers in selecting the perfect cake or dessert for their occasion, whether it's a birthday, wedding, or simply a sweet treat to enjoy on a lazy afternoon. Overall, It is a delightful destination for anyone with a love of baked goods and a desire for a little indulgence.
      </div> 
      <img src="/images/Oreo Cake.png" alt="" className='img1' /> 
      <img src="/images/Strawberry Cake.png" alt="" className='img1' />
      <img src="/images/Red Velvet Cake.png" alt="" className='img1' />
      <div className="Contact Footer">
             <footer className="footer">&copy;The Cake World, All Rights Reserved</footer> 
      </div>
      
                                                                          
      
    </div>

    )
}
