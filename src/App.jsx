import Navbar from "./components/navbar/Navbar";

export default function App () {
  return (
    
    <div>
      <Navbar/>
      
      <section className="home">
        <div className="home-content">
          <h1>Olá, eu sou Lucas</h1>
          <h3>Fullstack Developer</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, placeat laboriosam nobis illo recusandae aspernatur ipsum quaerat atque consequuntur. Quae libero quasi quos laboriosam accusamus? Illum, quos?</p>
          <button>Contato</button>
        </div>        
      </section>
    </div>
  )
}