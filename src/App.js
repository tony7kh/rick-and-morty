import './App.css';

import data from "./films.json";
import dataPersons from "./persons.json";

const dataOfCharacters = dataPersons.data.characters.results;

const Character = ({ person: { name, gender, image, episode } }) => (
  <div class="person">
    <img src={image} />
    <div class="info">
      <h2 class="name">{name}</h2>
      <p class="gender">{gender}</p>
      <ul class="listOfEpisodes">
        {" "}
        {episode.map((episode) => (
          <li key={episode.id}>
            {episode.name}
            {episode.air_date}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Characters = ({ persons = dataOfCharacters }) => (
  <div class="persons">
    {persons.map((person) => (
      <Character key={person.id} person={person} />
    ))}
  </div>
);

const dataOfProducts = data.data.episodes.results;

const Person = ({ character: { id, image, name } }) => {
  return (
    <>
      <div class="person" key={id}>
        {name}
        <img src={image} />
      </div>
    </>
  );
};
const Episode = ({ product: { id, name, date, characters } }) => (
  <div className="episode">
    <h1>{name}</h1>
    <strong>{date}</strong>
    <div class="persons">
      {characters.map((character) => (
        <Person key={id} character={character}></Person>
      ))}
    </div>
  </div>
);

const Episodes = ({ products = dataOfProducts }) => (
  <div className="Episodes">
    {products.map((product) => (
      <Episode key={product.id} product={product} />
    ))}
  </div>
);



function App() {
  return (
    <>
      <Characters />
      <Episodes />
    </>
  );
}

export default App;
