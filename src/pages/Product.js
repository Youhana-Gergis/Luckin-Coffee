import React from 'react'
import imageTitle from '../assets/imTitle.jpg';
import dr1 from '../assets/one.jpg';
import dr2 from '../assets/two.jpg';
import dr3 from '../assets/three.jpg';
import dr4 from '../assets/four.jpg';
import dr5 from '../assets/five.jpg';
import dr6 from '../assets/six.jpg';
import dr7 from '../assets/seven.jpg';
import dr8 from '../assets/eigth.jpg';
import dr9 from '../assets/nine.jpg';
import top1 from '../assets/top1.svg';
import top2 from '../assets/top2.svg';
import top3 from '../assets/top3.svg';
import imgInfo1 from '../assets/imgInfo1.jpg';
import imgInfo2 from '../assets/imgInfo2.jpg';
import imgInfo3 from '../assets/imgInfo3.jpg';
import imgInfo4 from '../assets/imgInfo4.jpg';
import '../styles/Product.css';

function Product() {
  return (
    <div className='product'>
      <div className='imgTitle'>
        <img src={imageTitle} alt='' style={{width:"100%"}} />
        <div className='textPhoto'>
            <p>High Quality Arabica Beans</p>
            <p>Our coffee beans are strictly selected from top coffee producing regions around the world, such as Ethiopia, Brazil, Colombia and Guatemala. Besides, we make sure each and every bean is Arabica.</p>
        </div>
      </div>
      <div className='textTypeDrink'>
        <h2>luckin coffee’s Best Sellers</h2>
        <p>The coffee bean’s formula is carefully blended by our team of WBC champions, hailing from Poland, Italy, Japan, Australia and China.</p>
    </div>
      <div className='typeDrinks'>
        <div className='drink'>
            <div className='imgDrink'>
                <img src={dr1} alt=''/>
                <img src={top1} alt=''/>
            </div>
            <div className='textDrink'>
                <p>Coconut Latte</p>
            </div>
        </div>
        <div className='drink'>
            <div className='imgDrink'>
                <img src={dr2} alt=''/>
                <img src={top2} alt=''/>
            </div>
            <div className='textDrink'>
                <p>Velvet Latte</p>
            </div>
        </div>
        <div className='drink'>
            <div className='imgDrink'>
                <img src={dr3} alt=''/>
                <img src={top3} alt=''/>
            </div>
            <div className='textDrink'>
                <p>Creamy Dreamy Latte</p>
            </div>
        </div>
        <div className='drink'>
            <img src={dr9} alt=''/>
            <p>Iced Minty Coconut Latte</p>
        </div>
        <div className='drink'>
            <img src={dr4} alt=''/>
            <p>Brown Sugar Velvet Latte</p>
        </div>
        <div className='drink'>
            <img src={dr5} alt=''/>
            <p>Americano</p>
        </div>
        <div className='drink'>
            <img src={dr6} alt=''/>
            <p>Latte</p>
        </div>
        <div className='drink'>
            <img src={dr7} alt=''/>
            <p>Caramel Macchiato</p>
        </div>
        <div className='drink'>
            <img src={dr8} alt=''/>
            <p>Cappuccino</p>
        </div>
      </div>
      <div className='infoDrinks'>
        <div className='theInfo'>
            <div className='rightInfoDrink'>
                <img src={imgInfo1} alt=''/>
            </div>
            <div className='leftInfoDrink'>
                <h1>Classic Coffee Series</h1>
                <p>Our Classic Coffee Series features a unique and mellow taste, created by our champion baristas who selected only the finest 100% Arabica coffee beans from top regions like Ethiopia, Brazil, Colombia, and Guatemala.</p>
            </div>
        </div>
        <div className='theInfo'>
            <div className='leftInfoDrink'>
                <h1>SOE Specialty Series</h1>
                <p>Our Single Origin Espresso (SOE) beans, which come from the Yirgacheffe and Hambella region of Ethiopia, are sustainably and meticulously sourced and picked, ensuring a fresh and flavourful experience.</p>
            </div>
            <div className='rightInfoDrink'>
                <img src={imgInfo2} alt=''/>
            </div>
        </div>
        <div className='theInfo'>
            <div className='rightInfoDrink'>
                <img src={imgInfo3} alt=''/>
            </div>
            <div className='leftInfoDrink'>
                <h1>Exfreezo™ & Fruit Drinks</h1>
                <p>Looking for a refreshing and indulgent treat? Try our luckin Exfreezo™! Our fruit-based coffee combines the bold taste of coffee with the sweet and juicy taste of fruit for a delightful and refreshing beverage.</p>
            </div>
        </div>
        <div className='theInfo'>
            <div className='leftInfoDrink'>
                <h1>Bakery & Snacks</h1>
                <p>Satisfy your cravings with our delicious freshly baked snacks and treats. Prefect pairing to our premium coffee blends.</p>
            </div>
            <div className='rightInfoDrink'>
                <img src={imgInfo4} alt=''/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Product
