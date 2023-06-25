import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <header>
        <h1 className='rainbow'>@rabugdev</h1>
        <nav className='stickynav'>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="/about">
                About
              </a>
            </li>
            <li>
              <a href="#">
                Contact
              </a>
            </li>
            <select id="language-select" onchange="">
              <option value="en">en</option>
              <option value="tr">tr</option>
            </select>
          </ul>
        </nav>
      </header>
      <section className='hero'>
        <div className='hero-content'>
          <h2>Welcome to the <a className='rainbow'>@rabugdev</a>'s Website!</h2>
        </div>
      </section>

      <section className='projects' id='projects'>
        <div className='project'>
          <img src=''></img>
          <h3>Project 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>







      <footer>
            <p>Made With &hearts; <a class="animated-title">@rabugdev</a></p>
      </footer>
    </main>
  );
}
