import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import CharacterCard from '../CharacterCard/CharacterCard';

const Container = ({cards}) => {
  console.log(cards)
  let allCards = cards.map(card => {
    if (card.title) {
      return <MovieCard key={card.episode} movie={card}/>
    }
    return <CharacterCard key={card.name} character={card} />
  })

  return(<section>
    {allCards}
  </section>)
}

export default Container;