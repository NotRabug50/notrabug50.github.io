import React from 'react'

const about = () => {
  return (
    <div>
      <header>
        <h1 className='rainbow'>@rabugdev</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <select>
              <option value="tr">tr</option>
              <option value="en">en</option>
            </select>
          </ul>
        </nav>
      </header>

      <section className="content">
        <h2>About Me:</h2>
        <div className="about-info">
          <img src="pp.jpg" alt="Buğra Altun" className='pp'/>
          <p className='aboutdesc'>
            Hi, I'm Buğra Altun, also known as <a className='rainbow'>@therabug</a> in youtube. I enjoy bringing my dreams to life.
          </p>
          <p>
            With a strong background in web development and a keen eye for design, I strive to deliver engaging and user-friendly experiences. My expertise includes HTML, CSS, JavaScript, and various front-end frameworks.
          </p>
          <p>
            Feel free to explore my projects and get in touch with me for any collaboration or inquiries. Let's create something amazing together!
          </p>
        </div>
      </section>

      <footer>
        <p>Made with ♥ by <span className='rainbow'>@rabugdev</span></p>
      </footer>
    </div>
  )
}

export default about