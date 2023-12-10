import React from 'react'
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';
import firstImg from '../assets/firstImg.svg';
import secondImg from '../assets/secondImg.svg';
import thirdImg from '../assets/thirdImg.svg';
import imgBeans from '../assets/imgBeans.jpg';
import imgCoffee from '../assets/imgCoffee.jpg';
import imgCoffeeSvg from '../assets/imgCoffee.svg';
import endPhoto from '../assets/endPhoto.jpg';
import '../styles/Home.css';

var counter = 1;
setInterval(function (){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3 ){
        counter = 1;
    }
},5000)


function Home() {
  return (
    <div className='home'>
        <section className='section'>
            <div className='slider'>
                <div className='slides'>
                    <input type='radio' name='radio-btn' id='radio1'/>
                    <input type='radio' name='radio-btn' id='radio2'/>
                    <input type='radio' name='radio-btn' id='radio3'/>
                    <div className='image first'>
                        <img src={slider2} alt=''/>
                        <div className='btn'>
                            <button>Download App</button>
                        </div>
                    </div>
                    <div className='image'>
                        <img src={slider1} alt=''/>
                    </div>
                    <div className='image'>
                        <img src={slider3} alt=''/>
                    </div>
                    <div className='navigationAuto'>
                        <div className='autoBtn1'></div>
                        <div className='autoBtn2'></div>
                        <div className='autoBtn3'></div>
                    </div>
                </div>
                <div className='navigationManual'>
                    <label for='radio1' className='manualBtn'></label>
                    <label for='radio2' className='manualBtn'></label>
                    <label for='radio3' className='manualBtn'></label>
                </div>
            </div>
        </section>
        <div className='explore'>
            <h1>Explore Our Coffee World</h1>
            <div className='threeExplore'>
                <div className='singleExplore'>
                    <img src={firstImg} alt=''/>
                    <h5>HIGH QUALITY ARABICA BEANS</h5>
                    <p>At luckin coffee, we pride ourselves on using only the finest Arabica beans sourced directly from top coffee producing regions.</p>
                </div>
                <div className='singleExplore'>
                    <img src={secondImg} alt=''/>
                    <h5>BLENDED BY THE WBC CHAMPIONS</h5>
                    <p>Every batch of our coffee is carefully tested and blended by our team of the WBC champions, hailing from Poland, Italy, Japan, Australia and China.</p>
                </div>
                <div className='singleExplore'>
                    <img src={thirdImg} alt=''/>
                    <h5>FRESHLY ROASTED FRESHLY GROUND</h5>
                    <p>We guarantee that every cup of our coffee is made fresh just for you, ensuring that you experience the full depth of flavor and aroma with every sip.</p>
                </div>
            </div>
        </div>
        <div className='imgBeans'>
            <div className='img'>
                <img src={imgBeans} alt='' style={{width:"100%"}}/>
            </div>
            <div className='textPhotoBeans'>
                <h1>We are proud to present you high-quality Arabica beans</h1>
                <p>Our coffee is selected from more than 180 blending formulas that highly matches the taste of consumers.</p>
            </div>
        </div>
        <div className='wbc'>
            <div className='Champions'>
                <h1>Blended by the WBC Champions</h1>
                <div class="line"></div>
                <p>Every batch of our coffee is carefully tested and blended by our team of the WBC champions, hailing from Poland, Italy, Japan, Australia and China.</p>
            </div>
        </div>
        <div className='FreshlyRoasted'>
            <div className='imgCoffee'>
                <img src={imgCoffee} alt=''/>
            </div>
            <div className='textFreshlyRoasted'>
                <img src={imgCoffeeSvg} alt=''/>
                <h1>Freshly Roasted
                </h1>
                <div class="line"></div>
                <p>We use state-of-the-art SCHAERER coffee machines from Switzerland in all of our outlets. By adopting internationally advanced technology and equipment to roast and grind our high quality coffee beans, to truly achieving“freshly roasted and freshly grounded”.</p>
            </div>
        </div>
        <div className='photoGirl'>
            <div className='imgGirl'>
                <img src={endPhoto} alt='' style={{width:"100%"}}/>
            </div>
            <div className='textGirl'>
                <h1>Break through the frame and stay innovative with luckin coffee.</h1>
                <h1>Connect with a community of like-minded young and daring individuals who share your passion for coffee and adventure.”</h1>
            </div>
        </div>
        <div className='coffeeStore'>
            <div className='textCoffee'>
                <h1>luckin coffee Stores</h1>
                <div class="line"></div>
                <p>8000+ stores in China, covering 240+ cities across China.</p>
            </div>
        </div>
    </div>
  )
}

export default Home
