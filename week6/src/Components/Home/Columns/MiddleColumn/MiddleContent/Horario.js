import "../../../../../Assets/Style.css";
import React from "react";

function horario() {
  return (
      <article>
        <h2 className="middle_h2">Horário</h2>
        <table className="table">
            <thead>
            <tr>
                <th>Data</th>
                <th>Artista</th>
                <th>Hora</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td rowSpan="5"><b> 21 Agosto </b></td>
                <td>Amália Hoje</td>
                <td>21:00</td>
            </tr>
            <tr>
                <td>Delfins * GNR</td>
                <td>21:30</td>
            </tr>
            <tr>
                <td>The Legendary</td>
                <td>22:00</td>
            </tr>
            <tr>
                <td>Tigerman</td>
                <td>22:30</td>
            </tr>
            <tr>
                <td>Fogo Frio</td>
                <td>23:00</td>
            </tr>
            </tbody>
        </table>
        <br/>

          <table className="table">
              <thead>
              <tr>
                  <th>Data</th>
                  <th>Artista</th>
                  <th>Hora</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td rowSpan="5"><b>22 Agosto</b></td>
                  <td>The Cult</td>
                  <td>21:00</td>
              </tr>
              <tr>
                  <td>Xutos & Pontapés</td>
                  <td>21:30</td>
              </tr>
              <tr>
                  <td>Soulfly</td>
                  <td>22:00</td>
              </tr>
              <tr>
                  <td>Moonspell</td>
                  <td>22:30</td>
              </tr>
              <tr>
                  <td>Ramp</td>
                  <td>23:00</td>
              </tr>
              </tbody>
          </table>
          <br/>

          <table className="table">
              <thead>
              <tr>
                  <th>Data</th>
                  <th>Artista</th>
                  <th>Hora</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td rowSpan="5"><b>23 Agosto</b></td>
                  <td>Die Antwoord</td>
                  <td>21:00</td>
              </tr>
              <tr>
                  <td>Ornatos Violeta</td>
                  <td>21:30</td>
              </tr>
              <tr>
                  <td>Crystal Fighters</td>
                  <td>22:00</td>
              </tr>
              <tr>
                  <td>Capitão Fausto</td>
                  <td>22:30</td>
              </tr>
              <tr>
                  <td>Sulfur Giant</td>
                  <td>23:00</td>
              </tr>
              </tbody>
          </table>

          <br/>

          <table className="table">
              <thead>
              <tr>
                  <th>Data</th>
                  <th>Artista</th>
                  <th>Hora</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td rowSpan="5"><b>24 Agosto</b></td>
                  <td>The Darkness</td>
                  <td>21:00</td>
              </tr>
              <tr>
                  <td>The Libertines</td>
                  <td>21:30</td>
              </tr>
              <tr>
                  <td>The Waterboys</td>
                  <td>22:00</td>
              </tr>
              <tr>
                  <td>David Fonseca</td>
                  <td>22:30</td>
              </tr>
              <tr>
                  <td>Vapors of Morphone</td>
                  <td>23:00</td>
              </tr>
              </tbody>
          </table>

      </article>
);
}

export default horario;
