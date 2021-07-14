<template>
  <section id="about">
    <div class="about">
      <div class="foreground"></div>
      <div class="top">
        <img src="../assets/images/about_top.png" alt="about" />
        <span class="section-title">About Us</span>
      </div>
      <p>
        With the growing population of the country and the emergence of chronic
        diseases, we feel it is important for community to have access to
        high-quality, low-cost diagnostic services. To achieve this goal, NxGen
        Labs was established in February 2021. <br /><br />We have a dedicated
        team at NxGen Lab that involves qualified laboratory professionals who
        are skilled in their fields and focused on delivering quality service.
        The lab applies strict quality control checks and quality assurance
        activities.
      </p>

      <span class="section-title vision">Our Vision</span>

      <div class="bottom">
        <img src="../assets/images/about_left.png" alt="about" />
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
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
  position: relative;

  .foreground {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background: linear-gradient(
      transparent,
      transparent,
      transparent,
      transparent,
      rgba(169, 174, 197, 1)
    );
  }

  .section-title {
    color: black;
    font-size: 2.6rem;
    font-family: "P-700", sans-serif;
    border-bottom: 0.4rem solid var(--clr-ylw);
    text-shadow: 0.1rem 0.1rem white;
  }

  .top {
    width: 100%;
    height: 30vh;
    position: relative;
    overflow: hidden;
    z-index: 2;

    img {
      width: 100%;
      height: 100%;
      object-fit: none;
      object-position: center;
      z-index: 1;
    }

    span {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  p {
    width: 60%;
    margin: 5rem auto 0rem auto;
    font-size: 1.8rem;
    font-family: "P-300", sans-serif;
    color: black;
    z-index: 2;
  }

  .vision {
    margin: 0rem auto;
    margin-top: 8rem;
  }

  .bottom {
    width: 60%;
    margin: auto;
    display: flex;
    align-items: center;
    z-index: 2;

    img {
      width: 40%;
      box-shadow: 0.1rem 0.1rem 0.4rem 0.4rem rgba(0, 0, 0, 0.1);
      border-radius: 0.4rem;
      border: 1rem solid white;
    }

    ul {
      margin-left: 4rem;
      font-size: 1.8rem;
      font-family: "P-300", sans-serif;
      color: black;

      li {
        margin: 2rem;
      }
    }
  }
}

@media screen and (max-width: 690px) {
  .about {
    p {
      width: 80%;
    }
    .bottom {
      width: 80%;
      flex-direction: column;

      img {
        width: 100%;
      }
    }
  }
}
</style>