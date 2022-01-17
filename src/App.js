import Header from "./components/Header"
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import "./generic.css";

import data from "./data";

function App() {

  return (
    <div className="card">
      <Header />
      <Landing />

      <Footer 
            twitter={data.social.twitter}
            facebook={data.social.facebook}
            instagram={data.social.instagram}
            linkedIn={data.social.linkedIn}
            github={data.social.github} 
      />
    </div>
  );
}

export default App;
