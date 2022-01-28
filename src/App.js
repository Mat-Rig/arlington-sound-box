import './App.css';

function App() {

//OTHER IDEAS
  //put the photo of the bar in the header




//Maria
  //We live and learn
  //it is what it is
  //good for you
  //be careful
  //good night
  //Luuuuuk
  let mariaTired  = new Audio("/mariaTired.m4a")

//Tom
  let tomWetwipe = new Audio("/tomWetwipe.m4a")
  //cry me a river
  //Are you funcking dumb
  //I'm nacked
  //good night
  //I tell you what
  //Bish Bash Bosh

//Piero
  //(what's for dinner?) Fish and vegs
  //I believe I can fly
  let pieroLikenotomorrow = new Audio("/pieroLikenotomorrow.m4a");
  //hey maan!
  //Aaahhh euuh
  //good night
  //oh yes man, only the best
  //Oh yes man
  //The problem is...

//Mathias
  //Sometaaaimes
  //Tommy boy!! what you doing?
  //Naaah ... I don't know
  let mathiasTommyBoy = new Audio("/mathiasTommyBoy.m4a");
  let mathiasSorryWhat = new Audio("/mathias-sorryWhat.m4a") //can't be arsed to cook
  //Goodnight
  //I'm so fucking tired man
  mathiasSorray
  let mathiasCba = new Audio("/mathiasCba.m4a") //can't be arsed to cook




  const start = (audio) => {
          audio.play()
          }

  return (
    <div className="App">
      <header className="App-header">
        Arlington Sound Box
      </header>
      <div className="main">
        <div className="soundbox" onClick={() => {start(pieroLikenotomorrow)}}> ...like no tomorrow  </div>
        <div className="soundbox" onClick={() => {start(mathiasTommyBoy)}}> Tommy Boy! </div>
        <div className="soundbox" onClick={() => {start(mariaTired)}}> Maria is tired </div>
        <div className="soundbox" onClick={() => {start(mathiasCba)}}> Mathias CBA </div>
        <div className="soundbox" onClick={() => {start(tomWetwipe)}}> Tom wetwipe </div>
        <div className="soundbox" onClick={() => {start(mathiasSorryWhat)}}> Sorry what?!?</div>
      </div>
    </div>
  );
}

export default App;
