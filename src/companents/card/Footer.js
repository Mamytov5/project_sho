import React from 'react';
import Vector from "../img/Vector.svg"
import Vector1 from "../img/Vector (1).svg"
import Vector2 from "../img/Vector (2).svg"
import Vector3 from "../img/Vector (3).svg"
import "../style/Footer.css"

const Footer = () => {
    return (
        <footer id='footer'>
            <div className='container'>
                <div className='footer'>

                    <div className='title'>
                        <h3>Способ оплаты</h3>
                        <h3>Условия доставки</h3>
                        <h3>Правила покупки</h3>
                    </div>
                    <div className='title'>
                        <h3>FAQ</h3>
                        <h3>О нас</h3>
                    </div>

                    <div className='title'>
                        <h1>Связаться с нами:</h1>
                        <h3>+996 222 533 735</h3>
                        <h3>+996 222 533 735</h3>
                        <h3>+996 222 533 735</h3>

                        <div className='icon__inst'>
                            <a href="https://www.instagram.com/"> <img src={Vector} alt=""/></a>
                            <a href="https://web.telegram.org/k/"><img src={Vector1} alt=""/></a>
                            <a href="https://web.whatsapp.com/"><img src={Vector2} alt=""/></a>
                            <img src={Vector3} alt=""/>

                        </div>
                    </div>
                    <div className='title'>
                        <h1>Адрес</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur<br/>
                            adipiscing elit. Varius in dolor viverra feugiat<br/>
                            neque, sed in. Mattis volutpat malesuada<br/>
                            velit parturient aliquam, est. Mauris vitae velit<br/>
                            laoreet faucibus nec amet velit.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;