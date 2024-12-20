import './App.css'

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

function Main({ dishes }) {
  return (
    <ul>
      { dishes.map((dish) => (
        <li key={dish.id}>{ dish.title }</li>
      )) }
    </ul>
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
  return (
    <div>
      <Header name="Dana" emoji="🌻" />
      <Main dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()} />
    </div>
  )
}

export default App
