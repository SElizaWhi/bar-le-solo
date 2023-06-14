import React from 'react'
import './aboutInfo.css'

const AboutInfo = () => {
  return (
    <div className="section">
      <div className="container grid-container">
        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquet ut nibh sed tincidunt. Maecenas vulputate augue eget mi
              rhoncus volutpat.
            </h2>
            <h4>gdflkjdbl;gsgnk f.jbdkjebf lkjdbf legfujhvef ishf</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquet ut nibh sed tincidunt.{" "}
              <span className="special-word">Maecenas</span> vulputate augue
              eget mi rhoncus volutpat. Fusce vitae arcu id est porttitor
              sagittis. Vestibulum porta pellentesque pulvinar. Etiam et mi id
              mi sagittis tincidunt non vel ipsum. Nullam sagittis risus mattis
              efficitur vestibulum. Nunc id efficitur ligula.
            </p>
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquet ut nibh sed tincidunt. Maecenas vulputate augue eget mi
              rhoncus volutpat. Fusce vitae arcu id est porttitor sagittis.
              Vestibulum porta pellentesque pulvinar. Etiam et mi id mi sagittis
              tincidunt non vel ipsum. Nullam sagittis risus mattis efficitur
              vestibulum. Nunc id <span className='special-word'> efficitur </span>ligula. Praesent gravida, est in
              tempor mollis, odio urna rutrum nisl, in molestie est justo nec
              mauris. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutInfo
