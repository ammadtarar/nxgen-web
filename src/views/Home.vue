<template>
  <div class="home">
    <section class="top">
      <!-- NAVIGATION -->
      <nav ref="navBar">
        <img class="logo" src="../assets/logo.png" alt="logo" />

        <div class="actions">
          <ul>
            <li><a href="#">About Us</a></li>
            <li><div class="spacer"></div></li>
            <li><a href="#">Services</a></li>
            <li><div class="spacer"></div></li>
            <li><a href="#">Contact</a></li>
            <li><div class="spacer"></div></li>
            <li><a href="#">Check Reports</a></li>
            <li><div class="spacer"></div></li>
            <li><a href="#">Rate List</a></li>
            <li><div class="spacer"></div></li>
            <li><a href="#">Login</a></li>
            <li><div class="spacer"></div></li>
            <li><a href="#">Register</a></li>
          </ul>
        </div>
      </nav>

      <!-- IMAGES -->
      <div class="carousel-wrapper">
        <agile :infinite="true" :autoplay-speed="5000" autoplay>
          <div class="slide">
            <span class="text">
              high quality,<br />
              low-cost ,<br />
              diagnostics ...</span
            >
            <img src="../assets/images/home_1.jpeg" alt="" />
            <div class="img-overlay"></div>
          </div>

          <div class="slide">
            <span class="text" style="left: 32%; text-align: center">
              eduacted and <br />
              qualified labatory <br />
              professionals ...</span
            >
            <img src="../assets/images/home_2.jpeg" alt="" />
            <div class="img-overlay"></div>
          </div>

          <div class="slide">
            <span class="text" style="left: 42%; text-align: right">
              high-tech ,<br />
              cutting edge<br />
              labatory equipment</span
            >
            <img src="../assets/images/home_3.jpg" alt="" />
            <div class="img-overlay"></div>
          </div>
        </agile>
      </div>

      <div class="buttons-wrapper">
        <div class="button-wrapper" style="margin-right: 1rem">
          <div class="button">
            <img src="../assets/icons/ic_book.png" alt="Book Appointment" />
            Book Appointment
          </div>
        </div>

        <div class="button-wrapper">
          <div class="button">
            <img src="../assets/icons/ic_whatsapp.png" alt="WhatsApp" />
            WhatsApp
          </div>
        </div>
      </div>
    </section>

    <section class="about">
      <div class="banner">
        <img src="../assets/images/about_top.png" alt="" />
        <span class="section-title title">About Us</span>
      </div>
      <p>
        With the growing population of the country and the emergence of chronic
        diseases, we feel it is important for community to have access to
        high-quality, low-cost diagnostic services. To achieve this goal, NxGen
        Labs was established in February 2021. We have a dedicated team at NxGen
        Lab that involves qualified laboratory professionals who are skilled in
        their fields and focused on delivering quality service. The lab applies
        strict quality control checks and quality assurance activities.
      </p>

      <div class="vision">
        <span class="section-title title">Our Vision</span>
        <div class="detail">
          <img src="../assets/images/about_left.png" alt="" />

          <ul>
            <li>
              To guarantee that every patient has access to good laboratory
              services at an affordable cost.
            </li>
            <li>To establish a lab people can Trust and rely on.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="services">
      <span class="section-title"> Our Services </span>

      <div class="services-wrapper">
        <div class="service" v-for="service in services" :key="service.title">
          <img :src="service.img" alt="service.name" />
          <span>{{ service.name }}</span>
          <p>{{ service.description }}</p>
        </div>
      </div>

      <div class="footer">
        <div class="cont">
          <img class="footer-logo" src="../assets/logo2.png" alt="logo" />
        </div>
        <div class="cont">
          <span class="title">Contact Us </span>
          <div class="ic-info">
            <img src="../assets/icons/ic_phone.png" alt="phone" />
            <span>+92 3 111 555 586</span>
          </div>
          <div class="ic-info">
            <img src="../assets/icons/ic_loc.png" alt="phone" />
            <span>2 Km, Defence Road, Off Raiwind Road, Lahore, Pakistan.</span>
          </div>
          <div class="ic-info">
            <img src="../assets/icons/ic_mail.png" alt="phone" />
            <span>info@nxgenlabs.com.pk</span>
          </div>
        </div>
        <div class="cont">
          <span class="title">Follow Us </span>

          <div class="social-icons">
            <img src="../assets/icons/ic_fb.png" alt="facebook" />
            <img src="../assets/icons/ic_insta.png" alt="instagram" />
            <img src="../assets/icons/ic_linkedin.png" alt="linked" />
          </div>

          <span class="social-desc"
            >Follow us on facebook , instagram and LinkedIn for latest updates
            and promotions</span
          >
        </div>
        <div class="cont">
          <span class="title">Subscribe to our newsletter</span>

          <input id="email" type="email" placeholder="Your email address" />
          <button for="email">Subscribe</button>
          <span class="social-desc"
            >Subscribe to our newsletter to stay updated with our promitions and
            news. We promise we won't span you.</span
          >
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { VueAgile } from "vue-agile";

export default {
  name: "Home",
  components: {
    agile: VueAgile,
  },
  data() {
    return {
      services: [
        {
          img: require("../assets/images/service_1.png"),
          name: "Hematology",
          description:
            "Facility for testing blood for a variety of blood disorders such as anemias, leukemias, and bleeding disorders.",
        },
        {
          img: require("../assets/images/service_2.png"),
          name: "Microbiology",
          description:
            "Our Microbiology section is involved in the detection of infective organisms and their sensitivity to drugs. ",
        },
        {
          img: require("../assets/images/service_3.png"),
          name: "Moleculat Biology",
          description:
            "This section deals with the molecular diagnosis of diseases for patients with cancer, viral infection, histocompatibility and genetic diseases.",
        },
        {
          img: require("../assets/images/service_4.png"),
          name: "Clinical Chemistry",
          description:
            "This section only helps in diagnosis but also plays a key role in the treatment of patients with endocrine, metabolic, and other hormonal disorders.",
        },
        {
          img: require("../assets/images/service_5.png"),
          name: "Histopathology",
          description:
            "This section involves the morphological examination of biopsies. It also involves special strains, immunohistochemistry (IHC) markers, along with cytology.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" >
.home {
  width: 100vw;
  display: flex;
  flex-direction: column;

  .top {
    width: 100%;
    height: 100vh;

    nav {
      height: 8rem;
      position: relative;
      z-index: 2;
      padding: 2rem 4rem;
      display: flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.8);
      margin: auto;

      .logo {
        height: 2.5rem;
      }

      .actions {
        margin-left: auto;

        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }

      ul {
        list-style-type: none;
        overflow: hidden;
        display: flex;
        align-items: center;

        .spacer {
          width: 0.2rem;
          height: 1rem;
          background: black;
        }

        li {
          float: left;
          padding: 0rem 0.5rem;
          margin-left: 1.5rem;

          a {
            height: 5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: black;
            text-align: center;
            padding: 1rem;
            text-decoration: none;
            font-size: 1.4rem;
            transition: 0.1s all ease-in;
            text-transform: uppercase;
            font-family: "P-500", sans-serif;

            &:hover {
              color: var(--clr-ylw);
              transform: scale(1.2);
            }
          }
        }
      }
    }

    .carousel-wrapper {
      z-index: 1;
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;

      .img-overlay {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
        position: absolute;
        top: 0;
        left: 0;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: none;
        object-position: center;
      }

      .agile__nav-button {
        background: transparent;
        border: none;
        color: var(--clr-ylw);
        cursor: pointer;
        font-size: 2.4rem;
        height: 100%;
        position: absolute;
        top: 0;
        transition-duration: 0.3s;
        width: 8rem;
      }
      .agile__nav-button:hover {
        transform: scale(1.4);
      }
      .agile__nav-button--prev {
        left: 0;
      }
      .agile__nav-button--next {
        right: 0;
      }
      .agile__dots {
        bottom: 2rem;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
        background: rgba(255, 255, 255, 0.5);
        border-radius: 0.2rem;
        padding: 1rem;
      }
      .agile__dot {
        margin: 0 1rem;
      }
      .agile__dot button {
        background-color: transparent;
        border: 0.1rem solid white;
        border-radius: 0.2rem;
        cursor: pointer;
        display: block;
        height: 1.2rem;
        width: 1.2rem;
        font-size: 0;
        line-height: 0;
        margin: 0;
        padding: 0;
        transition-duration: 0.3s;
      }
      .agile__dot--current button,
      .agile__dot:hover button {
        background-color: white;
      }

      .slide {
        display: block;
        height: 100vh;
        -o-object-fit: cover;
        object-fit: cover;
        width: 100%;
        position: relative;

        .text {
          color: white;
          text-shadow: 0.2rem 0.2rem rgba(0, 0, 0, 0.9);
          position: absolute;
          top: 30%;
          left: 10%;
          font-size: 8rem;
          font-family: "P-700", sans-serif;
          z-index: 4;
        }
      }
    }

    .buttons-wrapper {
      position: absolute;
      bottom: 10%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;
      display: flex;

      .button-wrapper {
        background: rgba(255, 255, 255, 0.9);
        padding: 0.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1rem;
        transition: 0.1s all ease-in-out;

        &:hover {
          padding: 0rem;
          border: 0.4rem solid var(--clr-ylw);

          .button {
            border: none;
            color: var(--clr-ylw);
          }
        }

        .button {
          border-radius: 1rem;
          font-family: "P-500", sans-serif;
          border: 0.2rem solid var(--clr-ylw);
          width: 22rem;
          height: 6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          text-align: center;
          img {
            width: 3rem;
            margin-right: 1rem;
          }
        }
      }
    }
  }

  .section-title {
    font-size: 3em;
    font-family: "P-600", sans-serif;
    color: white;
    text-shadow: 0rem 0rem 0.2rem var(--clr-ylw);
    border-bottom: 0.5rem solid var(--clr-ylw);
    padding-bottom: 1rem;
    text-transform: uppercase;
  }

  .about {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .banner {
      width: 100%;
      height: 40vh;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: none;
        object-position: center;
        z-index: 1;
      }

      .title {
        position: absolute;
        left: 50%;
        bottom: 0%;
        z-index: 2;
        transform: translate(-50%, 0);
      }
    }

    p {
      font-family: "P-400", sans-serif;
      font-size: 1.6rem;
      width: 50%;
      padding: 2rem 4rem;
    }

    .vision {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      .title {
        color: black;
        margin-top: 3rem;
        width: 20rem;
        text-shadow: none;
        text-align: center;
      }

      .detail {
        height: 40rem;
        display: flex;

        img {
          height: 30rem;
          margin-right: 10rem;
        }

        ul {
          width: 50rem;
          display: flex;
          flex-direction: column;
          padding-top: 6rem;
          li {
            padding: 2rem;
            font-family: "P-400", sans-serif;
            font-size: 1.6rem;
          }
        }
      }
    }
  }

  .services {
    width: 100%;
    background: linear-gradient(#ecebeb, #c4c4c4);
    display: flex;
    flex-direction: column;
    align-items: center;

    .section-title {
      color: black;
      margin: 8rem 0rem;
    }

    .services-wrapper {
      display: flex;
      flex-wrap: no-wrap;
      overflow-x: auto;
      padding: 1rem 4rem;
      justify-content: center;
      margin-bottom: 8rem;

      .service {
        flex: 0 0 auto;
        height: 40rem;
        width: 30rem;
        background: white;
        display: flex;
        flex-direction: column;
        margin-right: 5rem;
        border-bottom: 1rem solid var(--clr-ylw);
        box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem rgba(61, 61, 61, 0.1);
        border-radius: 0.4rem;
        overflow: hidden;
        transition: 0.15s all ease-in-out;
        &:hover {
          border-radius: 0.8rem;
          transform: scale(1.01);
        }
        img {
          width: 100%;
          height: 20rem;
        }

        span {
          text-align: center;
          padding: 1rem;
          font-family: "P-500", sans-serif;
          font-size: 1.8rem;
        }

        p {
          padding: 1rem;
          font-family: "P-400", sans-serif;
          font-size: 1.6rem;
        }

        &:nth-child(even) {
          margin-top: 8rem;
        }
      }
    }

    .footer {
      width: 100%;
      height: 30rem;
      background: linear-gradient(
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0.7),
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.9),
        rgba(255, 255, 255, 1)
      );
      display: flex;
      flex-wrap: wrap;

      .cont {
        flex: 1 1 25rem;
        height: 100%;
        display: flex;
        flex-direction: column;

        .footer-logo {
          width: 50%;
          margin: auto;
        }

        .title {
          font-size: 1.6rem;
          font-family: "P-600", sans-serif;
          color: black;
          margin-top: 3rem;
          margin-bottom: 3rem;
          margin: 3rem 2rem;
        }

        .ic-info {
          width: 90%;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 1rem 2rem;

          img {
            width: 1.5rem;
            height: 1.5rem;
            margin-right: 1rem;
          }

          span {
            font-size: 1.4rem;
            font-family: "P-500", sans-serif;
            color: black;
          }
        }

        .social-icons {
          margin: 2rem;

          img {
            width: 4em;
            margin-right: 2rem;
            transition: 0.25s all ease-in-out;

            &:hover {
              transform: scale(1.1);
            }
          }
        }

        .social-desc {
          font-size: 1.3rem;
          font-family: "P-500", sans-serif;
          color: black;
          padding: 1rem 2rem;
          margin-right: 2rem;
        }

        input {
          margin: 0rem 2rem;
          height: 4rem;
          padding: 1rem;
          border: 0.1rem solid lightgray;
          cursor: pointer;
          outline: none;
          font-family: "P-500", sans-serif;
          font-size: 1.4rem;
        }

        button {
          font-family: "P-500", sans-serif;
          font-size: 1.4rem;
          margin: 0.6rem 2rem 2rem 2rem;
          height: 4rem;
          border: none;
          outline: none;
          color: white;
          cursor: none;
          background: var(--clr-ylw);
        }
      }
    }
  }
}
</style>
