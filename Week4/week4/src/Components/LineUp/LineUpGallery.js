import React from 'react';
import LineUpArtist from './LineUpArtist';
import ArtistasInfo from '../../Assets/ArtistasInfo.json';

function LineUpGallery() {
  return (
    <div>
      <h2>Artistas Confirmados</h2>
      {ArtistasInfo.map((artista, index) => (
          <LineUpArtist
              key={index}
              nome={artista.nome}
              imagem={artista.imagem}
              estilo={artista.estilo}
              descricao={artista.descricao}
              uriVideo={artista.uriVideo}
              data={artista.data}
              hora={artista.hora}
          />
      ))}
    </div>
)
  ;
}

export default LineUpGallery;