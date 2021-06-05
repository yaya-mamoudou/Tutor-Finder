import React from 'react';
import './style.css';
import Img1 from '../../assets/img/2.jpg';
import Img2 from '../../assets/img/3.jpg';

function Profile() {
  return (
    <div>
      <div class="header">
        <h3>Classroom</h3>
        <input type="search" name="" id="" placeholder="Search..." />
        <p>
          <a href="#">Create new Classroom</a>
        </p>
      </div>
      <section class="cards">
        <article class="card">
          <picture class="thumbnail">
            <img class="category" src={Img1} alt="" />
            <div class="course">
              <h3>Course id: ENG101</h3>
              <h4>Basics of English language</h4>
            </div>
            <div class="person">
              <img src={Img2} height="100px" width="100px" />
              <h4>John Doe</h4>
            </div>
          </picture>
        </article>
        <article class="card">
          <picture class="thumbnail">
            <img class="category" src={Img1} alt="" />
            <div class="course">
              <h3>Course id: ENG101</h3>
              <h4>Basics of English language</h4>
            </div>
            <div class="person">
              <img src={Img2} height="100px" width="100px" />
              <h4>John Doe</h4>
            </div>
          </picture>
        </article>
        <article class="card">
          <picture class="thumbnail">
            <img class="category" src={Img1} alt="" />
            <div class="course">
              <h3>Course id: ENG101</h3>
              <h4>Basics of English language</h4>
            </div>
            <div class="person">
              <img src={Img2} height="100px" width="100px" />
              <h4>John Doe</h4>
            </div>
          </picture>
        </article>
        <article class="card">
          <picture class="thumbnail">
            <img class="category" src={Img1} alt="" />
            <div class="course">
              <h3>Course id: ENG101</h3>
              <h4>Basics of English language</h4>
            </div>
            <div class="person">
              <img src={Img2} height="100px" width="100px" />
              <h4>John Doe</h4>
            </div>
          </picture>
        </article>
        <article class="card">
          <picture class="thumbnail">
            <img class="category" src={Img1} alt="" />
            <div class="course">
              <h3>Course id: ENG101</h3>
              <h4>Basics of English language</h4>
            </div>
            <div class="person">
              <img src={Img2} height="100px" width="100px" />
              <h4>John Doe</h4>
            </div>
          </picture>
        </article>
        <article class="card">
          <picture class="thumbnail">
            <img class="category" src={Img1} alt="" />
            <div class="course">
              <h3>Course id: ENG101</h3>
              <h4>Basics of English language</h4>
            </div>
            <div class="person">
              <img src={Img2} height="100px" width="100px" />
              <h4>John Doe</h4>
            </div>
          </picture>
        </article>
        <article class="card">
          <picture class="thumbnail">
            <img class="category" src={Img1} alt="" />
            <div class="course">
              <h3>Course id: ENG101</h3>
              <h4>Basics of English language</h4>
            </div>
            <div class="person">
              <img src={Img2} height="100px" width="100px" />
              <h4>John Doe</h4>
            </div>
          </picture>
        </article>
      </section>
    </div>
  );
}

export default Profile;
