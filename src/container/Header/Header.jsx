import React from 'react';
import { SubHeading } from '../../components';
import { images} from "../../constants"
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="chase the New Flavour " />
      <h1 className='app__header-h1'>The Key of Fine Dining</h1>
      <p className='p__opensans' style={{margin: "2rem"}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores debitis, vitae repellendus quis adipisci alias in atque deleniti reprehenderit veritatis, eu </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
    <img src={images.welcome2}/>    
    
    </div>
  </div>
);

export default Header;
