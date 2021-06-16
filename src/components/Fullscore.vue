<template>
  <div class="popup_black">
    <div class="flex">
      <img src="../assets/logo-color.png" id="logo" />
      <h1>Gratulerer <font-awsome-icon :icon="['fas', 'thumbs-up']" style="margin-bottom: 3px"></font-awsome-icon> </h1>
      <h4 v-if="!hard">Du har nå fullført den lille gangetabellen.</h4>
      <h4 v-if="hard">Du har nå fullført den store gangetabellen.</h4>
      <img src="../assets/happy.jpg" class="image">
          <div class="button_one" @click="reset_scores"><span>Prøv på nytt!</span></div>
          <br>
          <div class="button_two" @click="hide_show_fullscore"><span>Jeg vil kikke mer på resultatet </span></div>
      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hard: Boolean,
    reset_scores: Function,
    hide_show_fullscore: Function,
  },
  methods: {
  }
}
</script>

<style scoped>
* {
text-align: center;
}
h1 {
  font-size: 1.5rem;
  margin-bottom: 0;
}
.button_one {
  border-radius: 5px;
    margin: 19px auto;
    padding: 5px 10px;
    width: 200px;
    background-color: #005ff3;
}
.button_two {
  border-radius: 5px;
    margin: 5px auto;
    padding: 5px 10px;
    width: 200px;
    background-color: #f30071;
}
#logo {
  width: 300px;
  margin-top: 30px;
}

.flex {
margin: 0 auto;
width: 300px;
text-align: center;
display: flex;
justify-content: center;
flex-direction: column;
}

.popup_black {
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  display: fixed;
  pointer-events: all;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.966);
  
  /* background-image: url('../assets/toilet.jpg');
  background-position: center; /* Center the image */
  /* background-repeat: no-repeat; Do not repeat the image */ 
  /* background-size:contain; Resize the background image to cover the entire container */
}
.image {
  border-radius: 10px;
}
</style>
