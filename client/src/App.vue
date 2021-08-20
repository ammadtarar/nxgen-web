<template>
  <div class="app">
    <router-view />
    <div class="notification" id="notificationBar">
      <p id="notificationMsg"></p>
    </div>

    <div class="loading-container" id="loading">
      <div class="card">
        <div class="spinner"></div>
        Loading ...
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "P-100";
  src: url("./assets/fonts/Poppins-Thin.ttf");
}

@font-face {
  font-family: "P-200";
  src: url("./assets/fonts/Poppins-ExtraLight.ttf");
}

@font-face {
  font-family: "P-300";
  src: url("./assets/fonts/Poppins-Light.ttf");
}

@font-face {
  font-family: "P-400";
  src: url("./assets/fonts/Poppins-Regular.ttf");
}

@font-face {
  font-family: "P-500";
  src: url("./assets/fonts/Poppins-Medium.ttf");
}

@font-face {
  font-family: "P-600";
  src: url("./assets/fonts/Poppins-SemiBold.ttf");
}

@font-face {
  font-family: "P-700";
  src: url("./assets/fonts/Poppins-Bold.ttf");
}

@font-face {
  font-family: "P-800";
  src: url("./assets/fonts/Poppins-Bold.ttf");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
  font-family: "P-300", sans-serif;

  --clr-ylw: rgb(240, 161, 74);
  --clr-ylw-trans: rgba(240, 161, 74, 0.5);

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  select {
    flex: 1;
    max-height: 3.9rem;
    border-radius: 0.4rem;
    border: 0.1rem solid gray;
    background: white;
    padding: 0.8rem 1.2rem;
    font-family: "P-400", sans-serif;
    color: #495057;
    font-size: 1.3rem;
    outline: none;
  }
}

::-webkit-scrollbar {
  width: 0; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: transparent;
}

.notification {
  background: rgb(50, 172, 50);
  position: absolute;
  bottom: 0%;
  right: -200%;
  max-width: calc(100vw - 4rem);
  max-height: calc(100vh - 4rem);
  z-index: 1000;
  /* padding: 1.4rem 1.8rem; */
  border-radius: 0.6rem;
  overflow-y: scroll;
  box-shadow: var(--shadow);
  transition: all 1s ease-in;

  p {
    color: white;
    font-family: "P-400", sans-serif;
    font-size: 1.3rem;
  }
}

.loading-container {
  position: absolute;
  top: -100%;
  left: -100%;
  width: 100vw;
  height: 100vh;
  background: rgba(128, 128, 128, 0.385);
  z-index: 60;
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    background: white;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-family: "P-500", sans-serif;
    border-radius: 0.6rem;
    padding: 3rem 4rem;

    .spinner {
      border-top: 0.3rem solid var(--clr-ylw);
      border-left: 0.3rem solid var(--clr-ylw);
      border-right: 0.3rem solid var(--clr-ylw);
      border-bottom: 0.3rem solid transparent;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      animation: spinner 1s linear infinite;
      margin-bottom: 2rem;
    }
  }
}

.no-data {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  font-size: 1.2rem;
}
</style>
