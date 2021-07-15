<template>
  <router-view />
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
}
</style>
