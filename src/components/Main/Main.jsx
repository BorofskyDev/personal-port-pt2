import React from 'react'
import './Main.scss'
import astro5 from '../../images/astro5.jpg'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Main() {
  return (
    <div className='Main' id='home'>
      <div className='Main__container'>
        <h1 className='Main__container-header'>Joel Borofsky</h1>
        <p className='Main__container-header2'>I Design Web Experiences</p>
        <h6 className='Main__container-header__content'> Front End Developer | 10+ Years Sales 
        | 10+ Years Customer Service | 10+ Years Client Management | 10+ Years Leadership | 
        8 Years Business Development | 8 Years Banking/Finance</h6>
        <h6 className='Main__container-header__content_bottom'>I Develop More Than Websites and Apps</h6>
        <p className='Main__container-header2_bottom'>I Develop Businesses</p>
        <div className='Main__container-button-box'>
          <a className='Main__container-btn' href='#contact'> <button type='button'>Hire Me</button></a>
        </div>
        <div className='Header-content__social'>
          <button className='Header-content__social_media'><a href='https://github.com/solovyovsdom' rel='noreferrer' target='_blank'><FaGithub className='Header-content__social_icon'/></a></button>
          <button className='Header-content__social_media'> <a href='https://twitter.com/solovyovdev' rel='noreferrer' target='_blank'><FaTwitter className='Header-content__social_icon' /></a></button>
                    <button className='Header-content__social_media'><FaLinkedin className='Header-content__social_icon'/></button>
                </div>
      </div>
      <div className='Main__container-image Main__container-image__shadow'>
        <img src={astro5} alt='astronat with glowing space jellyfish' />
      </div>
    </div>
  )
}

export default Main