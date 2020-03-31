import React, { useState, useEffect } from 'react';

export default function App() {

  // const [repositories, setRepositories]  = useState([
  //   { "id" : 1, name: "repo-1"},
  //   { "id" : 2, name: "repo-2"},
  //   { "id" : 3, name: "repo-3"},
  // ]);

  const [repositories, setRepositories]  = useState([
    { "id" : 1, name: "repo-1"},
    { "id" : 2, name: "repo-2"},
    { "id" : 3, name: "repo-3"},
  ]);

  useEffect(async () => {
    const response = await fetch('https://api.github.com/users/p5f8/repos');
    const data = await response.json();
    setRepositories(data);
  }, [])

  useEffect(() => {
    const countFavorites = repositories.filter(repo => repo.favorite).length;
    document.title = `Você têm ${countFavorites} favoritos`;

  }, [repositories]);


  function handleAddRepository() {
    setRepositories([...repositories, { id : Math.random(), name : "React é foda demais!"}]);

  }

  let addFavorite = (id) => {
    console.log('favoritando ', id);

    const newRepositories = repositories.map(repo => {
      return repo.id === id ? {...repo, favorite : !repo.favorite } : repo;
    });

    setRepositories(newRepositories);
  }

  return (
    <>
      <div className="App">
              <h1>Olá Pablo</h1>

            <ul>
              { repositories.map(r => (
                <li key={r.id}>
                  {r.name} - {r.favorite && <span>Favorito</span>}
                  <button onClick={() => addFavorite(r.id)}>Favoritar</button>
                </li>
              ))}
            </ul>
            <button onClick={handleAddRepository}>Adicionar</button>
            
      </div>
    </>
  );
}
