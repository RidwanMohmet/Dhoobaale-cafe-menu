import React from 'react';

import image1 from '../assets/img/chilling-cafe-13.jpg';
import image2 from '../assets/img/chilling-cafe-11.jpg';
import image3 from '../assets/img/chilling-cafe-12.jpg';
function home() {
  return (
    <React.Fragment>
      <div class="tm-container">
        <div class="tm-text-white tm-page-header-container">
          <i class="fas fa-mug-hot fa-2x tm-page-icon"></i>
          <h1 class="tm-page-header">Doobaale Cafe</h1>
        </div>
        <div class="tm-main-content">
          <div id="tm-intro-img"></div>
          <section class="tm-section">
            <h2 class="tm-section-header">Coffee Menu</h2>
            <div class="tm-responsive-table">
              <table>
                <tr class="tm-tr-header">
                  <th>&nbsp;</th>
                  <th>Hot</th>
                  <th>Iced</th>
                  <th>Blended</th>
                </tr>
                <tr>
                  <td class="tm-text-left">Americano</td>
                  <td>$10</td>
                  <td>$15</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td class="tm-text-left">Cuppucino</td>
                  <td>$15</td>
                  <td>$18</td>
                  <td>$20</td>
                </tr>
                <tr>
                  <td class="tm-text-left">Fresh Latte</td>
                  <td>$10</td>
                  <td>$18</td>
                  <td>$20</td>
                </tr>
                <tr>
                  <td class="tm-text-left">Mocha</td>
                  <td>$15</td>
                  <td>$18</td>
                  <td>$20</td>
                </tr>
                <tr>
                  <td class="tm-text-left">Espresso</td>
                  <td>$10</td>
                  <td>$15</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td class="tm-text-left">Black Coffee</td>
                  <td>$15</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td class="tm-text-left">Double Shot Expresso</td>
                  <td>$20</td>
                  <td>$20</td>
                  <td>-</td>
                </tr>
              </table>
            </div>
          </section>


          <section class="tm-section">
            <h2 class="tm-section-header">Tea Menu</h2>
            <div class="tm-responsive-table">
              <table>
                <tr class="tm-tr-header">
                  <th>&nbsp;</th>
                  <th>Hot</th>
                  <th>Iced</th>
                  <th>Addon</th>
                </tr>
                <tr>
                  <td class="tm-text-left">Pure White Milk</td>
                  <td>$5</td>
                  <td>$10</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td class="tm-text-left">Hong Kong Tea</td>
                  <td>$8</td>
                  <td>$12</td>
                  <td>$4</td>
                </tr>
                <tr>
                  <td class="tm-text-left">Taiwan Tea</td>
                  <td>$4</td>
                  <td>$10</td>
                  <td>$4</td>
                </tr>
                <tr>
                  <td class="tm-text-left">Bubble Tea</td>
                  <td>$8</td>
                  <td>$12</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td class="tm-text-left">Mixed Fruit Tea</td>
                  <td>$10</td>
                  <td>$10</td>
                  <td>$8</td>
                </tr>
                <tr>
                  <td class="tm-text-left">Original Tea</td>
                  <td>$12</td>
                  <td>$12</td>
                  <td>-</td>
                </tr>
              </table>
            </div>
          </section>


          <section class="tm-section">
            <h2 class="tm-section-header">Special Items</h2>
            <div class="tm-special-items">
              <figure class="tm-special-item">
                <img src={image1} alt="Image2" class="tm-special-item-img" />
                <figcaption>
                  <span class="tm-item-name">Soft Deli Cup</span>
                  <span class="tm-item-price">$25</span>
                </figcaption>
              </figure>
              <figure class="tm-special-item">
                <img src={image2} alt="Image2" class="tm-special-item-img" />
                <figcaption>
                  <span class="tm-item-name">Coffee Art</span>
                  <span class="tm-item-price">$30</span>
                </figcaption>
              </figure>
              <figure class="tm-special-item">
                <img src={image3} alt="Image2" class="tm-special-item-img" />
                <figcaption>
                  <span class="tm-item-name">Speciality Tea</span>
                  <span class="tm-item-price">$35</span>
                </figcaption>
              </figure>
            </div>
          </section>
          <hr />

          <section class="tm-section tm-section-small">
            <h2 class="tm-section-header">About our cafe</h2>
            <p>
              Doobaale Hotels and Resorts has been making a distinguished impact on the global hospitality market for more than two decades
            </p>
            <p class="tm-mb-0">
              Placing the guest at the centre of all we do is a top priority. A current focus is to elevate the already exceptional standards, which are at the heart of Doobaale.
            </p>
          </section>
          <hr />
          <section class="tm-section tm-section-small">
            <h2 class="tm-section-header">Talk to us</h2>
            <p class="tm-mb-0 text-center">
              Reach us via
              <a href="mailto:info@example.com" class="tm-contact-link"> Email </a>
            </p>
          </section>
        </div>
        <footer>
          <p class="tm-text-white tm-footer-text">
            Copyright &copy; 2021 BigilTech
          </p>
        </footer>
      </div>
    </React.Fragment>
  )
}

export default home
