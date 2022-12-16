<template>
  <div class="container_one">
    <transition name="fade">
      <ThumbsUp v-show="thumbsUp"></ThumbsUp>
    </transition>
    <Funnypopup v-show="funnyPopup" :funny_popup="funnyPopup"></Funnypopup>
    <transition name="fade">
      <Multitable
        v-if="multiTable"
        :hide_multitable="hideShowMultiTable"
        :multi_table="multiTable"
      ></Multitable>
    </transition>

    <Finishedone
      v-show="finishedOne"
      :hide_show_finished_one="hideShowFinishedOne"
      :selected_y="y"
    ></Finishedone>
    <Fullscore
      :hard="hard"
      :reset_scores="resetScores"
      :hide_show_fullscore="hideShowFullScore"
      v-if="fullScore"
    ></Fullscore>
    <div id="width">
      <img src="../assets/logo-color.png" id="logo" @click="landingOff" title="Klikk her for å tilbake til hovedsiden/info" alt="GangeAppen logo"/>
    </div>
    <br /><br />
    <div class="gangeoppgave">
      <span v-if="changePosY">Hva er {{ y }} &times; {{ randomX }}?</span>
      <span v-if="!changePosY">Hva er {{ randomX }} &times; {{ y }}?</span>
      <!-- <span v-if="y < 12">Velg gange</span> -->

      <input
        class="inputHard"
        v-if="hard"
        type="number"
        ref="inputref"
        v-model="inputnumb"
        v-on:keyup="checkCalculation()"
      />
      <input
        class="inputEasy"
        v-if="!hard"
        type="number"
        ref="inputref"
        v-model="inputnumb"
        v-on:keyup="checkCalculation()"
      />
    </div>

    <h4>
      <span class="h4span">Totalt: {{ totalScore }}</span>
      <span v-if="totalScore < 100" class="hint2" @click="randomOrderChange">
        <font-awsome-icon
          v-if="randomOrder"
          :icon="['fas', 'sort-amount-down-alt']"
          title="Bytt til numerisk rekkefølge"
        ></font-awsome-icon>
        <font-awsome-icon
          v-if="!randomOrder"
          :icon="['fas', 'random']"
          title="Bytt til tilfeldig rekkefølge"
        ></font-awsome-icon>
      </span>
      <span
        v-if="totalScore < 100 && !hard"
        class="hint"
        title="Gi meg et lite hint ;)"
        @click="hideShowMultiTable"
      >
        Hint <font-awsome-icon :icon="['fas', 'table']"></font-awsome-icon>
      </span>
      <span
        v-if="totalScore == 100"
        class="hint"
        title="Prøv på nytt!"
        @click="resetScores"
        style="background-color: red"
        >Prøv på nytt</span
      >
    </h4>

    <Scoreboard
      :all_scores="allScores"
      :total_score="totalScore"
      :change_y="changeY"
      :selected_y="y"
    ></Scoreboard>
    <button
      class="mainbutton"
      @click="randomOrderChange"
      v-if="!randomOrder"
      title="Bytt til numerisk rekkefølge"
    >
      <font-awsome-icon :icon="['fas', 'random']"></font-awsome-icon> Tilfeldig
    </button>
    <button
      class="mainbutton"
      @click="randomOrderChange"
      v-if="randomOrder"
      title="Bytt til tilfeldig rekkefølge"
    >
      <font-awsome-icon
        :icon="['fas', 'sort-amount-down-alt']"
      ></font-awsome-icon>
      i rekkefølge
    </button>
    <button
      class="mainbutton"
      @click="makeItHardOrEasy"
      v-if="hard == false"
      title="Bytt til den store gangetabellen"
    >
      Den store <font-awsome-icon :icon="['fas', 'table']"></font-awsome-icon>
    </button>
    <button
      class="mainbutton"
      @click="makeItHardOrEasy"
      v-if="hard == true"
      title="Bytt til den lille gangetabellen"
    >
      Den lille <font-awsome-icon :icon="['fas', 'table']"></font-awsome-icon>
    </button>
  </div>
</template>

<script>
import ThumbsUp from "./ThumbsUp.vue";
import Funnypopup from "./Funnypopup.vue";
import Multitable from "./Multitable.vue";
import Scoreboard from "./Scoreboard.vue";
import Finishedone from "./Finishedone.vue";
import Fullscore from "./Fullscore.vue";
export default {
  props: ['landingOff'],
  components: {
    Scoreboard,
    Multitable,
    Finishedone,
    Fullscore,
    Funnypopup,
    ThumbsUp,
  },
  data() {
    return {
      randomOrder: false,
      changePosY: true,
      thumbsUp: false,
      funnyPopup: false,
      finishedOne: false,
      multiTable: false,
      randomX: undefined,
      lastRandom: undefined,
      y: 1,
      sumxy: null,
      inputnumb: "",
      totalScore: 0,
      fullScore: false,
      hard: false,
      allScores: {
        1: { score: 0, scorebar: 0, color: "#01cc2f" },
        2: { score: 0, scorebar: 0, color: "#e60094" },
        3: { score: 0, scorebar: 0, color: "#f5b900" },
        4: { score: 0, scorebar: 0, color: "#0080f2" },
        5: { score: 0, scorebar: 0, color: "#01cc2f" },
        6: { score: 0, scorebar: 0, color: "#e60094" },
        7: { score: 0, scorebar: 0, color: "#f5b900" },
        8: { score: 0, scorebar: 0, color: "#0080f2" },
        9: { score: 0, scorebar: 0, color: "#01cc2f" },
        10: { score: 0, scorebar: 0, color: "#e60094" },
      },
      allScoresHard: {
        11: { score: 0, scorebar: 0, color: "#01cc2f" },
        12: { score: 0, scorebar: 0, color: "#e60094" },
        13: { score: 0, scorebar: 0, color: "#f5b900" },
        14: { score: 0, scorebar: 0, color: "#0080f2" },
        15: { score: 0, scorebar: 0, color: "#01cc2f" },
        16: { score: 0, scorebar: 0, color: "#e60094" },
        17: { score: 0, scorebar: 0, color: "#f5b900" },
        18: { score: 0, scorebar: 0, color: "#0080f2" },
        19: { score: 0, scorebar: 0, color: "#01cc2f" },
        20: { score: 0, scorebar: 0, color: "#e60094" },
      },
      resetAllScores: {
        1: { score: 0, scorebar: 0, color: "#01cc2f" },
        2: { score: 0, scorebar: 0, color: "#e60094" },
        3: { score: 0, scorebar: 0, color: "#f5b900" },
        4: { score: 0, scorebar: 0, color: "#0080f2" },
        5: { score: 0, scorebar: 0, color: "#01cc2f" },
        6: { score: 0, scorebar: 0, color: "#e60094" },
        7: { score: 0, scorebar: 0, color: "#f5b900" },
        8: { score: 0, scorebar: 0, color: "#0080f2" },
        9: { score: 0, scorebar: 0, color: "#01cc2f" },
        10: { score: 0, scorebar: 0, color: "#e60094" },
      },
      resetAllScoresHard: {
        11: { score: 0, scorebar: 0, color: "#01cc2f" },
        12: { score: 0, scorebar: 0, color: "#e60094" },
        13: { score: 0, scorebar: 0, color: "#f5b900" },
        14: { score: 0, scorebar: 0, color: "#0080f2" },
        15: { score: 0, scorebar: 0, color: "#01cc2f" },
        16: { score: 0, scorebar: 0, color: "#e60094" },
        17: { score: 0, scorebar: 0, color: "#f5b900" },
        18: { score: 0, scorebar: 0, color: "#0080f2" },
        19: { score: 0, scorebar: 0, color: "#01cc2f" },
        20: { score: 0, scorebar: 0, color: "#e60094" },
      },
    };
  },
  methods: {
    randomOrderChange() {
      this.randomOrder = !this.randomOrder;
      this.newCalculation();
    },
    // changePosXandY() {
    //   this.changePosY = !this.changePosY;
    // },
    makeItHardOrEasy() {
      if (
        confirm(
          "Sikker på at du vil bytte gangetabell? Alle resultat blir slettet"
        )
      ) {
        this.hard = !this.hard;
        if (this.hard) {
          this.y = 11;
          this.allScores = this.allScoresHard;
          this.totalScore = 0;
        } else {
          this.y = 1;
          this.allScores = this.resetAllScores;
          this.totalScore = 0;
        }
        this.newCalculation();
        this.selectInput();
      }
    },
    hideShowFullScore() {
      this.fullScore = !this.fullScore;
    },
    hideShowFinishedOne() {
      this.finishedOne = !this.finishedOne;
    },
    hideShowMultiTable() {
      this.multiTable = !this.multiTable;
    },
    resetScores() {
      if (confirm("Vil du slette alle poengene dine?")) {
        location.reload();
      }
    },
    changeY(key) {
      this.y = key;
      this.selectInput();
    },
    newCalculation() {
      const rndInt = Math.floor(Math.random() * 2) + 1;
      if (rndInt == 1) {
        this.changePosY = true;
      } else {
        this.changePosY = false;
      }

      if (this.randomOrder == true) {
        if (this.hard == true) {
          let randomOrderNum = Math.floor(Math.random() * 20) + 11;
          this.y = randomOrderNum;
        } else {
          let randomOrderNumTwo = Math.floor(Math.random() * 10) + 1;
          this.y = randomOrderNumTwo;
        }
      }

      let min;
      let max;
      // let hardOrEasy;
      if (!this.hard) {
        min = 1;
        max = 10;
      } else if (this.hard) {
        min = 11;
        max = 20;
      }

      do {
        this.randomX = Math.floor(Math.random() * (max - min + 1)) + min;
      } while (this.randomX === this.lastRandom);
      if (this.randomX === this.lastRandom) {
        this.randomX = Math.floor(Math.random() * (max - min + 1)) + min;
      }

      this.lastRandom = this.randomX;
    },
    checkCalculation() {
      this.sumxy = this.randomX * this.y;

      var t = this;
      if (this.inputnumb == this.sumxy) {
        t.thumbsUp = true;
        setTimeout(() => {
          t.thumbsUp = false;
        }, 1000);
        t.newCalculation();
        this.inputnumb = "";
        this.totalScore++;
        this.allScores[this.y].score = this.allScores[this.y].score + 1;
        if (this.allScores[this.y].scorebar != 100) {
          this.allScores[this.y].scorebar =
            this.allScores[this.y].scorebar + 10;

          let randNumFunny = Math.floor(Math.random() * 3) + 1;
          if (randNumFunny == 3) {
            t.funnyPopup = true;
            setTimeout(() => {
              t.funnyPopup = false;
            }, 1500);
          }
          if (this.allScores[this.y].score == 10) {
            this.allScores[this.y].scorebar =
              this.allScores[this.y].scorebar + 5;
            this.hideShowFinishedOne();
            if (this.allScores[this.y].score == 10) {
              setTimeout(() => {
                let i;
                if (!t.hard) {
                  i = 1;
                } else {
                  i = 11;
                }
                for (i; Object.keys(this.allScores).length > i; i++) {
                  if (this.allScores[i].score < 10) {
                    t.y = i;
                    return;
                  }
                }
              }, 3100);
            }

            setTimeout(() => {
              t.hideShowFinishedOne();
            }, 3000);
          }
        } else {
          this.allScores[this.y].scorebar = 100;
        }
        // this.overlay = true;
        // setTimeout(function () {
        //   t.overlay = false;
        //   t.$refs.inputref.focus();
        // }, 1000);
      }
    },
    selectInput() {
      this.$refs.inputref.select();
    },
  },
  watch: {
    totalScore(val) {
      if (val == 100) {
        this.fullScore = true;
      }
    },
  },
  mounted() {
    this.selectInput();
  },
  created() {
    this.newCalculation();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logo {
  width: 100%;
}
h1,
h4 {
  text-align: center;
}

.gangeoppgave {
  margin-top: -20px;
  height: 60px;
  font-size: 26px;
  line-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.h4span {
  background-color: rgb(0, 89, 243);
  border-radius: 10px;
  padding: 8px;
  cursor: default;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.575);
}

.hint {
  background-color: #e60094;
  font-weight: 200;
  border-radius: 10px;
  padding: 8px;
  margin-left: 10px;
  cursor: pointer;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.575);
  transition: all 200ms ease-in-out;
}
.hint:hover {
  background-color: rgb(241, 91, 189);
  transition: all 100ms ease-in-out;
}
.hint2 {
  background-color: #1d1d1d;
  font-weight: 200;
  border-radius: 10px;
  padding: 8px;
  margin-left: 10px;
  cursor: pointer;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.575);
  transition: all 100ms ease-in-out;
}
.hint2:hover {
  color: #f5b900;
  transition: all 100ms ease-in-out;
}
.mainbutton:hover {
  background-color: rgba(255, 255, 255, 0.863);
}
.mainbutton {
  cursor: pointer;
  text-shadow: none;
  margin: 4%;
  width: 40%;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
  padding: 7px;
  color: rgba(0, 0, 0, 0.616);
  background-color: rgba(255, 255, 255, 0.616);
}
#width {
  cursor: pointer;
  width: 300px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  margin-bottom: 0;
}
.container_one {
  max-width: 300px;
}

@media screen and (max-width: 500px) {
  #logo {
    max-width: 230px;
  }
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.2s;
}

.fade-leave {
  /* opacity: 1; is automatic, men bruker den her for å ikke få error */
  opacity: 1;
}

.fade-leave-active {
  transition: opacity 0.2s;
  opacity: 0;
}
</style>
