// import React from 'react';
// import Navbar from './Component.js/Navbar';
// import './App.css';
// // import Home from './components/pages/Home';
// import { BrowserRouter as Router, Routes,Switch, Route } from 'react-router-dom';

// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path='/'/>
//           </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

// App.js
import React from 'react';
// import Card from './Web2/Card';
import './App.css';
import Web from './Web2/Web';

const App = () => {
  return (
    <div>
<Web/>
      {/* <h1>Card with Image Component</h1>
      <div className="card-container">
        <Card
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg"
          title="Card 1"
          description="This is the description of Card 1."
        />

        <Card
          imageUrl="https://example.com/image2.jpg"
          title="Card 2"
          description="This is the description of Card 2."
        />
      </div> */}
    </div>
  );
};

export default App;

