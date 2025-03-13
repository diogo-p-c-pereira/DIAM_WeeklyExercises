import React from 'react';

function LineUpArtist({ nome, imagem, estilo, descricao, uriVideo, data, hora }) {
  return (
      <div>
          <h2>{nome}</h2>
          <p>Atuação: {data} às {hora}</p>
          <img src={imagem} alt={nome} onClick={() => showVideo(nome)} width="30%"/>
          <p>Estilo musical: {estilo}</p>
          <p>{descricao}</p>
          <iframe id={nome} hidden={true} width="560" height="315" src={uriVideo}
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
  );
}

function showVideo(nome) {
    document.getElementById(nome).hidden = !document.getElementById(nome).hidden;
}

export default LineUpArtist;