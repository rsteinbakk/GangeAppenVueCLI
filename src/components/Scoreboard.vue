<template>
  <div class="container">
      <br>
    <section v-for="(object, key, index) in all_scores" :key="index">
      <div class="scorebar">
        
        <div class="scorebar_value" :style="scoreBarStyle(object.scorebar, object.color)">
            <div class="space_between" v-if="object.score < 15"  @click="change_y(parseInt(key))" title="Klikk for å bytte gange">
              <div class="score_text">
                {{ key }}&times; | {{ object.score }} poeng</div>
                
              <button v-if="key == selected_y" style="opacity: 0.8;" :style="{backgroundColor: object.color}">Valgt</button>
              <button v-if="key != selected_y" style="opacity: 0.8;" :style="{backgroundColor: object.color}">Velg meg</button>
            </div>
            <div class="space_between" v-if="object.score >= 15 && object.score < 20"  @click="change_y(parseInt(key))">
              <div class="score_text" title="Snart i mål!!">        
                {{ key }}&times; | {{ object.score }} poeng (snart i mål!)
              <button v-if="key == selected_y" style="opacity: 0.8;" :style="{backgroundColor: object.color}">Valgt</button>
              <button v-if="key != selected_y" style="opacity: 0.8;" :style="{backgroundColor: object.color}">Velg meg</button>
                </div>
            </div>
            <div class="space_between" v-if="object.score >= 20">
              <div class="score_text" title="Denne har du fullført :)">        
              <!-- <font-awsome-icon :icon="['fas', 'thumbs-up']"></font-awsome-icon>  -->
              Fullført {{key}}-gangen 
              <font-awsome-icon :icon="['fas', 'smile-beam']" class="icon"></font-awsome-icon> 
              ({{ object.score }} poeng)
              
              </div>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  props: {
    all_scores: Object,
    total_score: Number,
    selected_y: Number,
    change_y: Function,
  },
  data() {
    return {
    };
  },
  methods: {
    scoreBarStyle(scorebar, color) {
      return { width: scorebar + "%", backgroundColor: color };
    }
  }
}
</script>

<style scoped>
* {
  font-size: 0.97em;
  font-weight: normal;
}

h4 {
    margin-bottom: 5px;
    margin-top: 25px;
    text-align: center;
}
.score_text {
  padding-left: 10px;
}
.scorebar_value {
    display: flex;
  background-color: rgb(224, 0, 127);
  border-radius: 5px;
  white-space: nowrap;
  
}
.scorebar {
    cursor: pointer;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.527);
  background: rgb(152, 152, 152);
  background: linear-gradient(
    90deg,
    rgba(170, 170, 170, 0.644) 0%,
    rgba(206, 206, 206, 0.589) 100%
  );
  border-radius: 5px;
  height: 22px;
  line-height: 20px;
  margin-bottom: 5px;
  display: flex;
  
    justify-content: space-between;
}

.scorebar:hover {
  background: linear-gradient(
    90deg,
    rgba(216, 216, 216, 0.644) 0%,
    rgba(231, 231, 231, 0.589) 100%
  );
}

button {
    margin-top: 1px;
  background-color: rgba(255, 255, 255, 0.295);
  border-radius: 3px;
  padding: 1px 5px;
  color: #fff;
  cursor: pointer;
  border: none;
  text-shadow: 1px 1px 2px black;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.575);
}

.space_between {
    position:absolute;
    display: flex;
    flex-direction: row;
    width: 290px;
    justify-content: space-between;
}

.icon {
  margin: auto 2px auto 5px;
  filter:drop-shadow(0 0 2px rgba(0, 0, 0, 0.644))
  }

</style>
