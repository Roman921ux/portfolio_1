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
              <a className='link'>House</a>
              <a className='link'>Street</a>
              <a className='link'>Garden</a>
            </div>
            <div className="strip"></div>
          </div>
          <div className="health">
            <div className="title">Ornamental plants</div>
            <div className="text">They will give your home a unique beauty and comfort, does not need care, it is enough only to wipe the dust occasionally during wet cleaning. In the assortment there are many types of some plants, which will help to pick up the plant you like for any interior
            </div>
            <button className='button'>Choose now</button>
            <div className="icons">
              <a className='icon-link' href='#'><LiaFacebookF className='icon' /></a>
              <a className='icon-link' href='#'><AiOutlineTwitter className='icon' /></a>
              <a className='icon-link' href='#'><AiFillInstagram className='icon' /></a>
            </div>
          </div>
          <img className="img-tree" src='imgs/tree.png' />
          
        </div>
        <div className="section-their">
          <img className="img-leaf" src='imgs/fear_1.png' />
          <div className="text-block">
            <div className="title">It's time to upgrade your garden!
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
          <span>Where is it more <br/> convenient for you to <br/> buy it?</span>
          <div className="text-block">
            <div className="title">Show the place on the map</div>
            <div className="text">
            The map will show the nearest stores near you
            </div>
          </div>
          <div className="text-block">
            <div className="title">Come at a convenient time</div>
            <div className="text">We work in a convenient schedule</div>
          </div>
          <div className="text-block">
            <div className="title">Buy !</div>
            <div className="text">We will make a discount)</div>
          </div>
          <button>Find Now</button>
          <iframe className='card' src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa8bebd70ed8c5d89f28e0004a37f9205ee09b52c678fb77153d4de411012d9b0&amp;source=constructor" width="1000" height="800" frameborder="0"></iframe>
        </div>
        <div className="section-flower">
          <div className="block-text">
            <div className="title">Flowers are wonderful, do not forget about it</div>
            <div className="text">You will smell the flowers and life will become much easier, try it or we will refund the money            </div>
            <a className='link'>More Qured</a>
          </div>
          <img className='img-flower' src='imgs/flower_1.png' />
          
          
        </div>
        <div className="section-glass">
          <img className="img-glass" src='/imgs/glass_1.png' />
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