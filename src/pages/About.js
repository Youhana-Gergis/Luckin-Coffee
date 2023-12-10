import React from 'react'
import ph1 from '../assets/ph1.svg';
import ph2 from '../assets/ph2.svg';
import ph3 from '../assets/ph3.svg';
import ph4 from '../assets/ph4.svg';
import im1 from '../assets/im1.jpg';
import im2 from '../assets/im2.jpg';
import im3 from '../assets/im3.jpg';
import ic1 from '../assets/ic1.svg';
import ic2 from '../assets/ic2.svg';
import ic3 from '../assets/ic3.svg';
import ic4 from '../assets/ic4.svg';
import '../styles/About.css';
function About() {
  return (
    <div className='about'>
      <div className='titlePage'>
        <img src={ph2} alt='img' />
        <p>luckin coffee is a new leading retail coffee company. Pioneering new technology-driven retail model, luckin coffee aims to provide high quality coffee and products with great affordability, and convenience to our customers.</p>
      </div>
      <div className='Value-Proposition'>
        <h1>luckin coffee’s Value Proposition</h1>
          <div class="Value-Proposition-all">
              <div class="Value-Proposition-element">
                  <img src={ph4} alt=''/>
                  <span>HIGH QUALITY</span>
              </div>
              <div class="Value-Proposition-element">
                  <img src={ph1} alt=''/>
                  <span>HIGH AFFORDABILITY</span>
              </div>
              <div class="Value-Proposition-element">
                  <img src={ph3} alt=''/>
                  <span>HIGH CONVENIENCE</span>
              </div>
          </div>
      </div>
      <div className='photo-content'>
        <div className='div-photo-left1'>
          <h1>HIGH QUALITY</h1>
          <p>Our coffee beans come directly from top coffee producing regions, and we have won the gold medal of IIAC for five consecutive years. Every batch of our coffee is carefully blended by our team of the WBC champions. Our coffee is selected from more than 180 blending formulas that highly matches the taste of customers.</p>
        </div>
        <div className='div-photo-right'>
          <img className='responsive' src={im1} alt=''/>
        </div>
      </div>
      <div class="photo-content">
          <div class="div-photo-right">
            <img className='responsive' src={im2} alt=''/>
          </div>
          <div class="div-photo-left2">
              <h1>HIGH AFFORDABILITY</h1>
              <p>We advocate a more convenient and rapid “new retail” experience. Users can purchase, pick up and take out coffee through our mobile app, completely changing the traditional coffee business mode. Experience the ultimate convenience with every cup of coffee carefully crafted and freshly made, just for you.</p>
          </div>
      </div>
      <div class="photo-content">
          <div class="div-photo-left3">
              <h1>HIGH CONVENIENCE</h1>
              <p>Our mobile app and presence on other third-party platforms cover the entire customer purchase process, offering our customers a 100% cashier-less environment. This enhances our customer experience, improves our operating efficiency, and allows us to stay connected with our customers and engage with them anytime, anywhere.</p>
          </div>
          <div class="div-photo-right">
            <img className='responsive' src={im3} alt=''/>
          </div>
      </div>
      <div className='icon-comunication'>
        <div className='icon-contact'>
          <img src={ic1} alt=''/>
          <span>Company：LUCKIN COFFEE (SGP) PTE. LTD.</span>
        </div>
        <div className='icon-contact'>
          <img src={ic2} alt=''/>
          <span>Address：6 SHENTON WAY #37-03</span>
        </div>
        <div className='icon-contact'>
          <img src={ic3} alt=''/>
          <span>E-mail：joonjiet.kok@luckincoffee.com</span>
        </div>
        <div className='icon-contact'>
          <img src={ic4} alt=''/>
          <span>Office Tel：+65-69912393</span>
        </div>
      </div>
    </div>
  )
}

export default About
