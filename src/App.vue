<template>
  <div id="app">
    <LandingPage v-if="landingOn" :landingOff="landingOnOff"></LandingPage>
    <Main v-if="!landingOn" :landingOff="landingOnOff"></Main>
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import LandingPage from "./components/LandingPage.vue"

export default {
  name: "App",
  components: {
    Main,
    LandingPage
  },
  data() {
    return {
      landingOn: true,
    }
  },
  methods: {
    landingOnOff() {
      this.landingOn = !this.landingOn;
    }
  }
};
</script>

<style>

* {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

div * {
  text-shadow: 1px 1px 3px #000000;
    font-size: 0.98em;
}

body {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  color: #fff;
  height: 100vh;

  background: rgb(0, 48, 56);
  background: radial-gradient(
    circle,
    rgba(17, 86, 99, 1) 49%,
    rgba(0, 8, 9, 1) 100%
  );
}

p {
  display: flex;
  justify-content: center;
}

input, input:active  {
  height: 40px;
  font-size: 40px;
  margin-left: 10px;
  text-align: center;
  border-radius: 10px;
  border-width: 0px;
  border: none;
  cursor: pointer;
}

.inputEasy {
  width: 60px;
}
.inputHard {
  width: 100px;
}


</style>
