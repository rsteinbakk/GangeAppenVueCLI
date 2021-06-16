<template>
  <div class="popup_black">
    <div class="finished_one">
      <h1>Gratulerer!</h1>
      Du har nå fullført {{ selected_y }}-gangen
      <font-awsome-icon :icon="['fas', 'thumbs-up']"></font-awsome-icon> 
      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selected_y: Number,
    hide_show_finished_one: Function,
  },
};
</script>

<style scoped>
* {
  font-size: 1.2rem;
}

h1 {
  font-size: 30px;
  margin: 4px 0 0 0;
  padding: 0;
}

.finished_one {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 10rem;
  width: 300px;
  border-radius: 10px;
  height: 150px;
  line-height: 50px;
  background: rgb(0, 128, 242);
  background: linear-gradient(
    133deg,
    rgba(0, 128, 242, 1) 16%,
    rgba(1, 204, 47, 1) 36%,
    rgba(245, 185, 0, 1) 52%,
    rgba(230, 0, 148, 1) 100%
  );
  box-shadow: 1px 1px solid white;
}

.popup_black {
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.815);
  pointer-events: all;
  z-index: 4;
  display: flex;
  justify-content: center;
}
</style>
