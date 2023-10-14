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
          <img className="img-leaf" src='imgs/fear.jpg' />
          <div className="text-block">
            <div className="title">The I wrepit Evering
              Mydougs I redmer our let
            </div>
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas architecto autem doloribus,
              pariatur quam repellat nostrum illo quod voluptate sint.
            </div>
            <a className='link'>Show more</a>
          </div>
          <BsArrowRight className='arrow' />
        </div>
        <div className="section-card">
          <p>Choose</p>
          <span>Let`s get <br /> acquailed</span>
          <div className="text-block">
            <div className="title">Show us</div>
            <div className="text">
              Lorem ipsum dolor sit amet
              consectetur adipisicing
              eveniet quam
            </div>
          </div>
          <div className="text-block">
            <div className="title">In rench</div>
            <div className="text">Growen text</div>
          </div>
          <div className="text-block">
            <div className="title">Letrosen</div>
            <div className="text">Feared fier</div>
          </div>
          <button>Change now</button>
          <iframe className='card' src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa8bebd70ed8c5d89f28e0004a37f9205ee09b52c678fb77153d4de411012d9b0&amp;source=constructor" width="1000" height="800" frameborder="0"></iframe>
        </div>
        <div className="section-flower">
          <div className="block-text">
            <div className="title">Lorem ipsum dolor sit ipsum dolor trom</div>
            <div className="text">Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Minima, reprehenderit minus. Fugit,
              illo a iste doloremque rerum culpa unde aperiam.
            </div>
            <a className='link'>More Qured</a>
          </div>
          <img className='img-flower' src='imgs/flower.jpg' />
          <a className='link-icon'>Next</a>
          <BsArrowRight className='icon' />
        </div>
        <div className="section-glass">
          <img className="img-glass" src='/imgs/glass.jpg' />
          <div className="text-block">
            <div className="title">Let me rogfert goutre coluort them</div>
            <div className="text-block_2">
              <div className="text">
                <p>Lorem ipsum dolor sit amet consectetur,
                  Quos debitis tempora quasi distinctio,
                  hic voluptas. Eveniet veritatis officiis.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur,
                  Quos debitis tempora quasi distinctio,
                  hic voluptas. Eveniet veritatis officiis.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur,
                  Quos debitis tempora quasi distinctio,
                  hic voluptas. Eveniet veritatis officiis.
                </p>
              </div>
              <div className="text">
                <p>Lorem ipsum dolor sit amet consectetur,
                  Quos debitis tempora quasi distinctio,
                  hic voluptas. Eveniet veritatis officiis.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur,
                  Quos debitis tempora quasi distinctio,
                  hic voluptas. Eveniet veritatis officiis.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur,
                  Quos debitis tempora quasi distinctio,
                  hic voluptas. Eveniet veritatis officiis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main