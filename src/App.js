import './App.css';

function App() {

//OTHER IDEAS
  //put the photo of the bar in the header




//Maria
  //We live and learn
  let mariaItwhatitis = new Audio("/mariaItwhatitis.m4a")
  //good for you
  //be careful
  //good night
  //Luuuuuk
  let mariaJoder = new Audio("/mariaJoder.m4a")
  //BWEERR
  let mariaQuetonta = new Audio("/mariaQuetonta.m4a")
  let mariaOkokok = new Audio("/mariaOkokok.m4a")
  //Anyways ... fun times
  //oh gosh
  let mariaTired  = new Audio("/mariaTired.m4a")

//Tom
  let tomWetwipe = new Audio("/tomWetwipe.m4a")
  let tomBecareful = new Audio("/tomBecareful.m4a")
  let tomCrymeariver = new Audio("/tomCrymeariver.m4a")
  let tomSkiDrink = new Audio("/tomSkiDrink.m4a")
  //Are you funcking dumb
  //His name is pedro
  //I'm nacked
  //the dogs's bollocks
  //game changer
  //Oh for fuck sake
  //Lost the plot
  //good night
  //I tell you what
  //Bish Bash Bosh

//Piero
  //(what's for dinner?) Fish and vegs
  //Mate
  let pieroIbelieveicanfly = new Audio("/pieroIbelieveicanfly.m4a");
  let pieroLikenotomorrow = new Audio("/pieroLikenotomorrow.m4a");
  let pieroHeyMan = new Audio("/pieroHeyMan.m4a");
  let pieroSkiPain = new Audio("/pieroSkiPain.m4a");
  //Aaahhh euuh
  //good night
  //Let's go Mario
  //oh yes man, only the best
  //The problem is
  //Oh yes man
  //The problem is...

//Mathias
  let mathiasSometimes = new Audio("/mathiasSometimes.m4a");
  //Wocestershire sauce
  //Tommy boy!! what you doing?
  let mathiasOhshiet = new Audio("/mathiasOhshiet.m4a");
  //Naaah ... I don't know
  let mathiasTommyBoy = new Audio("/mathiasTommyBoy.m4a");
  let mathiasSorryWhat = new Audio("/mathias-sorryWhat.m4a") //can't be arsed to cook
  //Goodnight
  //I'm so fucking tired man
  let mathiasSorray = new Audio("/mathiasSorray.m4a");
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
        <div className="soundbox" onClick={() => {start(mariaJoder)}}> Maria's swear </div>
        <div className="soundbox" onClick={() => {start(mariaOkokok)}}> Maria's got an idea </div>
        <div className="soundbox" onClick={() => {start(pieroIbelieveicanfly)}}> Piero's singing </div>
        <div className="soundbox" onClick={() => {start(tomBecareful)}}> Be careful, be careful!</div>
        <div className="soundbox" onClick={() => {start(mariaItwhatitis)}}> Maria dealing with life </div>
        <div className="soundbox" onClick={() => {start(tomWetwipe)}}> Tom wetwipe </div>
        <div className="soundbox" onClick={() => {start(mathiasSorryWhat)}}> Sorry what?!?</div>
        <div className="soundbox" onClick={() => {start(mathiasSorray)}}> Sorray! </div>
        <div className="soundbox" onClick={() => {start(mariaQuetonta)}}> Maria beating herself </div>
        <div className="soundbox" onClick={() => {start(mathiasOhshiet)}}> Mathias screwed up </div>
        <div className="soundbox" onClick={() => {start(pieroHeyMan)}}> Hey man! </div>
        <div className="soundbox" onClick={() => {start(mathiasSometimes)}}> Sometimes </div>
        <div className="soundbox" onClick={() => {start(tomCrymeariver)}}> Cry me a river </div>
        <div className="soundbox" onClick={() => {start(tomSkiDrink)}}> What time is it? </div>
        <div className="soundbox" onClick={() => {start(pieroSkiPain)}}> Don't be touching </div>
      </div>
    </div>
  );
}

export default App;
