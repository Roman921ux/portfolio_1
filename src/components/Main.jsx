import { useState } from 'react'
import { LiaFacebookF } from 'react-icons/lia';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';

//AiOutlineTwitter AiFillInstagram BsArrowRight
function Main() {

  return (
    <main className="main">
      <div className="container">
        <div className="section-health">
          <div className="title-column">
            <div className="list-title">
              <a className='link'>Consern</a>
              <a className='link'>Voder</a>
              <a className='link'>Hoduos</a>
            </div>
            <div className="strip"></div>
          </div>
          <div className="health">
            <div className="title">Health Plants Happy Homes</div>
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nobis soluta ut earum saepe numquam quasi sunt in distinctio harum officia!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nobis soluta ut earum saepe numquam quasi sunt in distinctio harum officia!
              sunt in distinctio harum officia!
            </div>
            <button className='button'>Buy now</button>
            <div className="icons">
              <a className='icon-link' href='#'><LiaFacebookF className='icon' /></a>
              <a className='icon-link' href='#'><AiOutlineTwitter className='icon' /></a>
              <a className='icon-link' href='#'><AiFillInstagram className='icon' /></a>
            </div>
          </div>
          <img className="img-tree" src='imgs/tree.jpg' />
          <BsArrowRight className="arrow" />
        </div>
        <div className="section-their">
          <img className="img-leaf" src='imgs/fear.jpg'/>
          <div className="text-block">
            <div className="title">The I wrepit Evering
              Mydougs I redmer our let
            </div>
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas architecto autem doloribus,
              pariatur quam repellat nostrum illo quod voluptate sint.
            </div>
            <a className='link'>Show more</a>
          </div>
          <BsArrowRight className='arrow'/>
        </div>
      </div>
    </main>
  )
}

export default Main