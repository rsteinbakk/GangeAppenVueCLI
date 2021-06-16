<template>
  <div class="popup_black">
    <div class="flex">
      <img :src="selectedImage" class="image" />
    </div>
  </div>
</template>

<script>
import Funnyimages from "./funnyimages.js";
export default {
  props: {
    selected_image: String,
    funny_popup: Boolean,
  },
  data() {
    return {
      Funnyimages,
      selectedImage: "",
      funnyArray: [
        Funnyimages.image1,
        Funnyimages.image2,
        Funnyimages.image3,
        Funnyimages.image4,
        Funnyimages.image5,
        Funnyimages.image6,
        Funnyimages.image7,
        Funnyimages.image8,
        Funnyimages.image9,
        Funnyimages.image10,
      ],
    };
  },
  methods: {
    randomImage() {
      let randNum = Math.floor(Math.random() * this.funnyArray.length);
      this.selectedImage = this.funnyArray[randNum];
    },
    randomImageLazy() {
      let t = this;
      setTimeout(() => {
        let randNum = Math.floor(Math.random() * t.funnyArray.length);
        t.selectedImage = t.funnyArray[randNum];
      }, 1500);
    },
  },
  watch: {
    funny_popup() {
      return this.randomImageLazy();
    } 
  },
  created() {
    this.randomImage();
  },
};
</script>

<style scoped>
.popup_black {
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  pointer-events: all;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.753);
}
.flex {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
img {
  border-radius: 10px;
  max-width: 400px;
}
</style>
