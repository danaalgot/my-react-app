import { useEffect, useReducer } from 'react';
import './App.css';
import mountain from './images/mountain-image.jpg';

function Header({name, emoji}) {
  return (
    <header>
      <h1>{name}'s site {emoji}</h1>
    </header>
  )
}

const items = [
  "Pizza",
  "Burger and Fries",
  "Steak and Broccoli",
  "Cheese Soup"
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}));

function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
      <button onClick={onStatus}>{openStatus ? "Close" : "Open"} site</button>
      <h2>The site is currently {openStatus ? "open" : "closed"}.</h2>
      <main>
        <img src={mountain} height={400} alt="Mountain view" />
        <ul>
          { dishes.map((dish) => (
            <li key={dish.id}>{ dish.title }</li>
          )) }
        </ul>
      </main>
    </>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}

function App() {
  const [status, toggle] = useReducer(
    (status) => !status, 
    true
  );

  useEffect(() => {
    console.log(`The site is ${status ? "open" : "closed"}`)
  }, []);

  return (
    <div>
      <Header 
        name="Dana" 
        emoji="🌻" />
      <Main 
        dishes={dishObjects} 
        openStatus={status} 
        onStatus={toggle} />
      <Footer 
        year={new Date().getFullYear()} />
    </div>
  )
}

export default App
