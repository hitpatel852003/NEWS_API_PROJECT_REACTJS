import React from 'react'
import './About.css'
import Todolist from './Todolist'
import { useSelector } from 'react-redux';

function About() {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <div className={`bg-${theme === "dark" ? "light" : "dark"}`}>
      <div>
        <h1 className='text-align-center p-5'>About</h1>
      </div>
      <div className="container">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Ancient History of News:</h2>
            <p className="lead">
            <ul>
              <li>Oral Tradition:</li>
              <p>Long before writing systems, news was passed on by word of mouth in communities. Town criers and storytellers shared local news, events, and warnings.</p>
              <li>Ancient Civilizations:
                <ul>
                  <li>Rome (59 BC): The Acta Diurna ("Daily Acts") was a daily government bulletin carved on stone or metal and posted in public places.</li>
                  <li>China (Han Dynasty, ~200 BC): The government circulated written reports called tipao among officials, a very early form of government newsletters.</li>
                </ul>
              </li>
            </ul>
            </p>
          </div>
          <div className="col-md-5">
            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
            <img src="https://th.bing.com/th/id/OIP.flobbC1oUYiAIibsSPMtogHaEz?w=260&h=180&c=7&r=0&o=5&pid=1.7" alt="" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/>
          </div>
        </div>
        <hr className="featurette-divider"></hr>
        <div className="row featurette">

          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">The Birth of Print News (15th–17th Century):</h2>
            <p className="lead">
              <ul>
                <li>Printing Press (1440): Invented by Johannes Gutenberg, it revolutionized mass communication and laid the foundation for printed newspapers.</li>
                <li>First Printed Newspapers:
                  <ul>
                    <li>Relation aller Fürnemmen und gedenckwürdigen Historien (Germany, 1605) is considered the world’s first newspaper.</li>
                    <li>By the 17th century, newspapers were being printed regularly in Europe (e.g., The London Gazette, 1665).</li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0YRHsIHrCQpXdp0OOpBrTJisgoYt4-LSNZA&s" alt="" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/>
          </div>
        </div>
        <hr className="featurette-divider"></hr>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Growth of Newspapers (18th–19th Century):</h2>
            <p className="lead">
              <ul>
                <li>Newspapers became more common and began focusing on political events, wars, business, and society.</li>
                <li>The rise of journalism as a profession began in this era.</li>
                <li>Inventions like the telegraph (1830s–40s) made it possible to send news across long distances quickly.</li>
              </ul>
            </p>
          </div>
          <div className="col-md-5">
          <img src="https://th.bing.com/th/id/OIP.J3FHfhK23j9MuGFhClGJDQHaEK?w=319&h=180&c=7&r=0&o=5&pid=1.7" alt="" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/>
            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
          </div>
        </div>
        <hr className="featurette-divider"></hr>
        <div className="row featurette">

          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">News in the 20th Century: Radio & Television:</h2>
            <p className="lead">
              <ul>
                <li>Radio News (1920s): People could hear real-time updates from around the world. It was revolutionary during events like World War II.</li>
                <li>Television News (1940s–50s): Introduced visuals to storytelling. Anchors like Walter Cronkite became household names.</li>
                <li>24-hour news channels (like CNN, founded in 1980) changed how news was consumed.</li>
              </ul>
            </p>
          </div>
          <div className="col-md-5 order-md-1">
          <img src="https://th.bing.com/th/id/OIP.RfXCcLeJYdT4RuLRjpHNWQHaFT?w=170&h=181&c=7&r=0&o=5&pid=1.7" alt="" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/>
            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
          </div>
        </div>
        <hr className="featurette-divider"></hr>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Digital News & the Internet Era (1990s–Today):</h2>
            <p className="lead">
              <ul>
                <li>1990s: News organizations started publishing online.</li>
                <li>2000s–Present:
                  <ul>
                    <li>Rise of social media (Facebook, Twitter, Instagram) allowed real-time citizen journalism and instant news sharing.</li>
                    <li>News became on-demand, mobile-first, and algorithm-driven.</li>
                    <li>Challenges arose, like fake news, echo chambers, and misinformation.</li>
                  </ul>
                </li>

              </ul>
            </p>
          </div>
          <div className="col-md-5">
          <img src="https://th.bing.com/th/id/OIP.yQfj7l0Pi3oMN_bb7RmXmgHaDp?w=329&h=172&c=7&r=0&o=5&pid=1.7" alt="" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/>
            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
          </div>
        </div>
        <hr className="featurette-divider"></hr>
        <div className="row featurette">

          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">The Future of News:</h2>
            <p className="lead">
              <ul>
                <li>AI & Automation:
                  AI tools are writing basic news stories (e.g., sports results, stock updates). Personalization will improve using machine learning.
                </li>
                <li>Voice & Smart Devices:
                  People are getting news via voice assistants like Alexa and Google Assistant.</li>
                <li>Augmented & Virtual Reality (AR/VR):
                  Immersive storytelling is being tested for documentaries and breaking news coverage.</li>
                <li>Decentralized News & Blockchain:
                  These technologies may help fight fake news and improve transparency.</li>
                <li>Subscription & Micro-Payment Models:
                  As ad revenue declines, many news outlets are shifting to paid subscriptions, premium content, and micro-payments.</li>
              </ul>
            </p>
          </div>
          <div className="col-md-5 order-md-1">
          <img src="https://th.bing.com/th/id/OIP.68DnYoaAmzOS1XVhQibthwHaEO?w=284&h=180&c=7&r=0&o=5&pid=1.7" alt="" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/>
            {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
          </div>
        </div>
        <hr className="featurette-divider"></hr>
        <Todolist></Todolist>
      </div>

    </div>
  )
}

export default About
