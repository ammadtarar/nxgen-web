<template>
  <section id="services">
    <div class="services">
      <span class="section-title">Our Services</span>
      <div class="scroller">
        <div class="services-wrapper">
          <div class="service" v-for="service in services" :key="service.name">
            <img :src="service.img" alt="service.name" />
            <h1>{{ service.name }}</h1>
            <span>{{ service.description }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer" id="footer">
      <div class="sec" id="logo-cont">
        <img src="../assets/logo2.png" alt="logo" id="logo" />
      </div>
      <div class="sec">
        <span class="title">Contact Us</span>
        <div class="img-info">
          <img src="../assets/icons/ic_phone.png" alt="phone" />
          <span>+92 3 111 555 586</span>
        </div>
        <div class="img-info">
          <img src="../assets/icons/ic_loc.png" alt="address" />
          <span>2 Km, Defence Road, Off Raiwind Road, Lahore, Pakistan.</span>
        </div>
        <div class="img-info">
          <img src="../assets/icons/ic_mail.png" alt="address" />
          <span>info@nxgenlabs.com.pk</span>
        </div>
      </div>
      <div class="sec">
        <span class="title">Follow Us</span>
        <div class="socials">
          <img src="../assets/icons/ic_fb.png" alt="facebook" />
          <img src="../assets/icons/ic_insta.png" alt="instagram" />
          <img src="../assets/icons/ic_linkedin.png" alt="linkedin" />
        </div>
        <span class="disclaimer">
          Follow us on these social network for latest news and promtions
        </span>
      </div>
      <div class="sec" id="sub-cont">
        <span class="title">Subscribe Newsletter</span>
        <input type="email" id="email" placeholder="Your email address" />
        <button>Subscribe</button>
        <span class="disclaimer">
          Subscribe to our newsletter for latest offers and promotions. We
          promise we won't spam you
        </span>
      </div>
    </div>

    <div class="copyright">
      © 2021 NxGen Labs Private Limited. All Rights Reservered
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
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
          name: "Molecular Biology",
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

<style lang="scss" scoped>
.services {
  width: 100%;
  background: linear-gradient(#dddddd, rgb(240, 239, 239));
  display: flex;
  flex-direction: column;
  padding-bottom: 10rem;

  .section-title {
    color: black;
    font-size: 2.6rem;
    font-family: "P-700", sans-serif;
    border-bottom: 0.4rem solid var(--clr-ylw);
    text-shadow: 0.1rem 0.1rem white;
    margin: 6rem auto;
    text-transform: uppercase;
  }

  .scroller {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: scroll;

    .services-wrapper {
      min-width: 100%;
      margin: 0 auto;
      height: auto;
      display: flex;
      flex-direction: row;
      padding: 2rem 5rem;

      .service {
        width: 32rem;
        height: 40rem;
        background: white;
        display: flex;
        flex-direction: column;
        border-radius: 0.8rem;
        overflow: hidden;
        margin-right: 3rem;
        box-shadow: 0.2rem 0.2rem 0.4rem 0.4rem rgba(0, 0, 0, 0.1);
        border-bottom: 0.8rem solid #f9af3b;
        transition: 0.25s all ease-in-out;

        &:hover {
          transform: scale(1.1);
        }

        &:last-child {
          margin: 0;
        }

        &:nth-child(1),
        &:nth-child(3),
        &:nth-child(5) {
          margin-top: 6rem;
        }

        img {
          width: 100%;
          height: 40%;
          object-fit: cover;
          object-position: center;
        }

        h1 {
          font-family: "P-600", sans-serif;
          font-size: 2rem;
          margin: 2rem 0rem;
          color: black;
          padding: 0rem 2rem;
        }
        span {
          width: 100%;
          padding: 0rem 2rem;
          font-size: 1.5rem;
          color: black;
          font-family: "P-300", sans-serif;
        }
      }

      @media screen and (max-width: 690px) {
        .service {
          width: 28rem;
          height: 34rem;

          img {
            height: 40%;
          }

          h1 {
            font-size: 1.8rem;
          }
          span {
            font-size: 1.4rem;
          }
        }
      }
    }
  }
}

.footer {
  width: 100%;
  height: 30rem;
  background: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  .sec {
    width: 25%;
    height: 100%;

    display: flex;
    flex-direction: column;

    #logo {
      width: 50%;
      margin: auto;
    }

    .title {
      font-size: 1.6rem;
      font-family: "P-600", sans-serif;
      color: black;
      width: 100%;
      padding: 4rem 2rem 2rem 2rem;
    }

    .img-info {
      width: 100%;
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
        color: black;
        font-family: "P-300", sans-serif;
      }
    }

    .socials {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 3rem;
      margin-bottom: 3rem;

      img {
        width: 4rem;
        height: 4rem;
        margin-right: 1rem;
        transition: 0.5s all ease-in-out;

        &:last-child {
          margin-right: 0rem;
        }

        &:hover {
          overflow: hidden;
          transform: scale(1.2);
          box-shadow: 0.1rem 0.1rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
        }
      }
    }

    input {
      padding: 1rem;
      margin: 0rem 2rem;
      height: 4rem;
      outline: none;
      background: white;
      border: 0.1rem solid black;
      font-size: 1.6rem;
      font-family: "P400", sans-serif;
      cursor: none;
      border-radius: 0.1rem;
    }

    button {
      border-radius: 0.1rem;
      outline: none;
      cursor: none;
      height: 4rem;
      border: none;
      margin: 1rem 2rem;
      background: var(--clr-ylw);
      color: black;
      font-size: 1.5rem;
      font-family: "P-300", sans-serif;
      box-shadow: 0.1rem 0.1rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
      transition: 0.25s all ease-in-out;

      &:hover {
        transform: scale(1.05);
        border-radius: 1rem;
        color: white;
      }
    }

    .disclaimer {
      font-size: 1.2rem;
      font-family: "P-300", sans-serif;
      color: black;
      padding: 0rem 2rem;
      margin-top: 1rem;
    }
  }
}

@media screen and (max-width: 1000px) {
  .footer {
    height: 60rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row: 1fr 1fr;

    #logo-cont {
      display: none;
    }
    .sec {
      width: 100%;

      .title {
        text-align: center;
      }
    }

    #sub-cont {
      grid-column-start: 1;
      grid-column-end: 3;

      .disclaimer {
        text-align: center;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .footer {
    height: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    padding: 2rem;

    #logo-cont {
      display: none;
    }

    #sub-cont {
      grid-column-start: 1;
      grid-column-end: 2;
    }

    .disclaimer {
      text-align: center;
    }

    .sec {
      width: 100%;

      .title {
        text-align: center;
      }
    }
  }
}

.copyright {
  width: 100vw;
  background: var(--clr-ylw);
  font-size: 1rem;
  color: white;
  font-family: "P-300", sans-serif;
  padding: 1rem;
  text-align: center;
  margin-top: 4rem;
}
</style>