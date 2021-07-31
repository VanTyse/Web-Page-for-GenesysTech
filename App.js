import './App.css';
import React from 'react';
import ReactDOM from 'react-dom'
import { directive } from '@babel/types';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <body>
        <Header/>
        <Favs/>
        <Feed/>
      </body>
      
    )
  }
}

function Header(){
  return(
    <header className="header">
        <p>Bo<b>ww</b>ow</p>
        <div className="search-container">
          <form action="">
            <button type="submit"><i className="fa fa-search"></i></button>
              <input type="text" placeholder=""/>
          </form>
        </div>
    </header>
  )
}

function Favs(){
  return(
    <aside className="side-bar">
            <h4 className="favs">Favs</h4>
            <ul>
                <li>System design</li>
                <li>Machine Learning</li>
                <li>Business Events</li>
                <li>Econimics</li>
            </ul>
            <div className="container">
                <span className="material-icons">
                expand_more
                </span><span className="more">5 more</span>
            </div>

            <div className="my-bowws">
                <h4>My Bowws</h4>
                <div className="container-bowws">
                    <div className="block-img blue"></div>
                    <div className="text-bowws">
                      <h4>What kind <br/> of knowledge?</h4>
                      <p>Business Events</p>
                    </div>
                </div>
                <div className="container-bowws">
                    <div className="block-img orange"></div>
                    <div className="text-bowws">
                        <h4>KKR case <br/> study</h4>
                        <p>Economics</p>    
                    </div>
                </div>
                <div className="container1">
                    <span className="material-icons">
                    expand_more
                    </span><span className="more">10 more</span>
                </div>
            </div>            
        </aside>
  )
}

function Feed(){
  return(
  <main className="feed">
      <h4>Feed</h4>
      <div className="feed-items">
      <div className="item1">
        <div className="feed-info">
          <p className="w">Today at 1:52pm</p>
          <p className="u">Machine Learning</p>
      </div>
      <h3>Machine <br/> Learning Notes</h3>
        <p>
          Machine learning is a method of data analysis that automates analytical model building.
          <br/><br/>
              It is a branch of artificial intelligence based on the idea that systems...
          <br/>
        </p>
        <a href="" class="read-more1"><b>Read More</b></a>
        <form action="">
          <button id="item-1" type="submit">Make a boww</button>
        </form>

      </div>
      <div class="item2">
        <div class="feed-info">
          <p class="w">Today at 1:52pm</p>
          <p class="u">Business Events</p>
        </div>
        <h3>What kind <br/> of Knwoledge?</h3>
        <p>
          William Albert Ackman an American investor,
          hedgefund manager & philanthropist
          <br/><br/>
          He is the founder and CEO of Pershing Square Capitol...
        </p>
        <a href="" class="read-more2"><b>Read More</b></a>
        <form action="">
          <button id="item-2" type="submit">Bowwow!</button>
        </form>


        </div>
          <div class="item3">
            <div class="feed-info">
                    <p class="w">Today at 1:52pm</p>
                    <p class="u">Business</p>
            </div>
            <h3>Employee Ownership</h3>
                
            <a href="" class="read-more2"><b>Read More</b></a>
            <form action="">
              <button id="item-3" type="submit">Make a boww</button>
            </form>
      
          </div>
        </div>
      </main>
  )
}

{/*function Profile(){
  return(
    
  )
}
*/}


export default App;
