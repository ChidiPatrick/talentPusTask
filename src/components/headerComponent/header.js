import React from 'react'
import styles from './header.module.scss'
import { HiArrowUpRight } from 'react-icons/hi2'
import { ButtonFull, ButtonTransparent } from '../Buttons/buttons'
//

const header = () => {
  return (
    <header className={styles.headerWrapper}>
      <nav className={styles.nav}>
        <figure className={styles.logo}>
          <img
            src='files/images/techTime.png'
            className={styles.logoImage}
            alt='logo'
          />
        </figure>
        <div className={styles.dropDownContainer}>
          <div className={styles.dropDownBar}></div>
          <div className={styles.dropDownBar}></div>
          <div className={styles.dropDownBar}></div>
        </div>
      </nav>
      <h1 className={styles.headerHeading}>
        Grow your skills to advance your career path
        <div className={styles.headingSmall}>
          Build Your Future With Our Quality Education. The Best And Largest
          All-In-One. Online Tutoring Platform In The World
        </div>
      </h1>
      {/* <div className={styles.btnContainer}> */}
      <ButtonTransparent>
        <span>Get Started Now</span>
        <HiArrowUpRight className={styles.arrowRight} />
      </ButtonTransparent>
      <button className={[styles.btnFull, styles.btn].join(' ')}>
        Enroll Now
      </button>
      {/* </div> */}
      <div className={styles.previewImagesWrapper}>
        <div className={styles.imageWrapper}>
          <figure className={[styles.imageFigure, styles.figure1].join(' ')}>
            <img src='/files/images/Frame 95.png' alt='previewer' />
          </figure>
          <figure className={[styles.imageFigure, styles.figure2].join(' ')}>
            <img src='/files/images/Frame 96.png' alt='previewer' />
          </figure>

          <figure className={[styles.imageFigure, styles.figure3].join(' ')}>
            <img src='/files/images/Frame 97.png' alt='previewer' />
          </figure>

          <figure className={[styles.imageFigure, styles.figure4].join(' ')}>
            <img src='/files/images/Frame 98.png' alt='previewer' />
          </figure>

          <figure className={[styles.imageFigure, styles.figure5].join(' ')}>
            <img src='/files/images/Frame 99.png' alt='previewer' />
          </figure>
        </div>
        <div className={styles.previewWrapper}>
          <div className={styles.previews}>255K+</div>
          <span className={styles.previewSpan}>Previews</span>
        </div>
      </div>
      {/* <div className={styles.curlyArrow}> */}
      {/* </div> */}
      <div className={styles.heroImageContainer}>
        <figure className={styles.curlyArrowRight}>
          <img
            src='files/images/Vector (11).png'
            alt='curly arrow'
            className={styles.curlyArrowImage}
          />
        </figure>
        <img
          src='files/images/Visual Studio Code - jpeg.png'
          alt='logo'
          className={styles.vsCode}
        />
        <img
          src='files/images/Vector (2).png'
          alt='logo'
          className={styles.triangleVector}
        />
        <figure className={styles.wLogoWrapper}>
          <img
            src='files/images/path22.png'
            className={styles.Wlogo}
            alt='logo'
          />
        </figure>
        <img
          src='files/images/Induction-Hub-Artwork_Admin-and-IT 1.png'
          alt='logo'
          className={styles.lightBulb}
        />
        <img
          src='files/images/Vector (3).png'
          className={styles.smallCircle}
          alt='logo'
        />
        <img
          src='files/images/Frame 88.png'
          className={styles.secondLogo}
          alt='logo'
        />
        <img
          src='files/images/Vector (12).png'
          className={styles.smallestCircleLogo}
          alt='logo'
        />
        <img
          src='files/images/Vector (13).png'
          className={styles.swigglyLineLogo}
          alt='logo'
        />
        <figure className={styles.heroFigure}>
          <img
            src='files/images/HERO IMAGEE (1).png'
            className={styles.heroImage}
            alt='Hero'
          />
        </figure>
      </div>
    </header>
  )
}
export default header
