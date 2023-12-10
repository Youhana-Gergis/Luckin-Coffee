import React from 'react'
import titleImg from '../assets/titleImg.jpg';
import Qr from '../assets/QR.png';
import playStore from '../assets/PlayStore.png';
import AppStore from '../assets/AppStore.svg';
import Drink1 from '../assets/drink1.jpg';
import Drink2 from '../assets/drink2.jpg';
import Drink3 from '../assets/drink3.jpg';
import Drink4 from '../assets/drink4.jpg';
import DoubleFun from '../assets/DoubleFun.jpg';
import '../styles/GetStore.css';

function GetStore() {
  return (
    <div className='getStore'>
        <div className='firstDiv'>
          <div className='leftDiv'>
            <div className='title'>
              <span>Download</span>
              <span>luckin coffee APP Now</span>
              <div className='dolar'>Enjoy your first drink for only<span> $ 0.99</span></div>
            </div>
            <div className='buttons'>
              <div className='links'>
                <img src={playStore} alt=''/>
                <img src={AppStore} alt=''/>
              </div>
              <div className='QrCode'>
                <img src={Qr} alt='' style={{width:"100%"}} />
                <h6 class="QR">Scan QR code</h6>
              </div>
            </div>
          </div>
          <div className='rightDiv'>
            <img src={titleImg} alt='' style={{width:"100%"}} />
          </div>
        </div>
        <div className='secondDiv'>
          <h1>120+ million registered APP users</h1>
          <div className='items'>
            <div className='list'>
              <img src={Drink1} alt=''/>
              <span class="div">ORDER ON THE GO</span>
              <span>Skip the line, get your favourite coffee drinks quickly and easily with our mobile App.</span>
            </div>
            <div className='list'>
              <img src={Drink2} alt=''/>
              <span class="div">EXCLUSIVE DEALS AND VOUCHERS</span>
              <span>Surprising weekly discounts of vouchers and deals only with App</span>
            </div>
            <div className='list'>
              <img src={Drink3} alt=''/>
              <span class="div">SEAMLESS PAYMENT</span>
                <span>No more fumbling for cash or cards at the register. Pay for your order securely and easilyright from your phone.</span>
            </div>
            <div className='list'>
              <img src={Drink4} alt=''/>
              <span class="div">ORDER ON THE GO</span>
              <span>Skip the line, get your favourite coffee drinks quickly and easily with our mobile App.</span>
            </div>
          </div>
        </div>
        <div className='thirdDiv'>
          <div className='firendCheers'>
            <img src={DoubleFun} alt='' style={{width:"100%"}} />
          </div>
          <div className='firendCheersInfo'>
            <span>Refer a Friend to luckin coffee and each of your next drink is at only $0.99!</span>
        </div>
        </div>
    </div>
  )
}

export default GetStore
