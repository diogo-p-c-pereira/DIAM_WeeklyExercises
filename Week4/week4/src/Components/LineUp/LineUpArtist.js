import React from 'react';

function LineUpArtist({ nome, imagem, estilo, descricao, uriVideo, data, hora }) {
  return (
      <div>
          <h2>{nome}</h2>
          <p>Atuação: {data} às {hora}</p>
          <img src={imagem} alt={nome} onClick={() => showVideo(nome)} width="90%"/>
          <iframe id={nome} hidden={true} width="90%" src={uriVideo}
                  title="YouTube video player"
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <p>Estilo musical: {estilo}</p>
          <p>{descricao}</p>
      </div>
  );
}


function showVideo(nome) {
    const iframe = document.getElementById(nome)

    //.getElementById(nome).hidden = !document.getElementById(nome).hidden;
    iframe.hidden = !iframe.hidden;

    if (!iframe.hidden) {
        iframe.style.width = '90%';
        iframe.style.height = '30vh';
    }

}

export default LineUpArtist;