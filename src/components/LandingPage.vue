<template>
  <div class="overlay">
    <div class="center">
      <img src="../assets/logo-color.png" id="logo" />
      <h1 class="hidden">GangeAppen</h1>
      <div id="start" @click="landingOff">Start spill</div>
      <section id="infobox">
        <article>
          <h1>Hvordan lære seg gangetabellen?</h1>
          <p>
            Vi mennesker lærer ting på ulikemåter. Noen lærer best ved å se,
            noen ved å høre 👂 og andre ved å skrive✍️.
          </p>
          <p>
            For de fleste av oss er det nyttig med variasjon og vi kommer ikke
            unna at det er behov for repetisjon for at det skal sitte.
          </p>
        </article>
        <article>
          <h1>Når lærer man gangetabellen? ☝️</h1>
          <p>
            Det er vanlig å begynne med gangeøvelser i 3. klasse. Mange elever
            blir ganske gode på multiplikasjonstabellen når de kommer i 4.-5.
            klasse.
          </p>
          <p>
            De fleste har fortsatt behov for øving videre i 6., 7. og 8. klasse.
          </p>
        </article>
        <article>
          <h1>Hvorfor lære seg gangetabellen? 🤔</h1>
          <p>
            I følge
            <!-- <a href="https://forskning.no/skole-og-utdanning-pedagogiske-fag-matematikk/slar-et-slag-for-mattelekser-og-gangetabeller/345267"> -->artikkel
            på forskning.no<!-- </a> -->
            har den indiske matematikeren Sujatha Ramdorai har stor tro på bruk
            av ny teknologi i matematikkundervisningen.
          </p>
          <h2>Unngå matteangst</h2>
          <p class="italic">
            – Når elever er vant til å bruke kalkulator og så plutselig står der
            uten, da går teppet ned. De har ikke forstått ideen bak, sier
            Ramdorai.
          </p>
          <p class="italic">
            Så du trenger begge deler. Du må også forstå hva kalkulatoren gjør
            for deg. Det er derfor hun synes det er viktig å pugge
            gangetabeller.
          </p>
          <p class="italic" align="right">- Sujatha Ramdorai</p>
          <small
            >https://forskning.no/skole-og-utdanning-pedagogiske-fag-matematikk/slar-et-slag-for-mattelekser-og-gangetabeller/345267</small
          >
        </article>
        <article>
          <h1>Hvem oppfant gangetabellen? 🧐</h1>
          <p>
            I følge en artikkel på The Guardian var det de gamle babylonerne som
            fant opp gangetabellen for trolig mer enn 4000 år siden.
          </p>
          <p>
            De som var gode i multiplikasjonstabellen klarte seg bedre i
            byttehandler og ved salg, og det var nyttig med god mengdeforståelse
          </p>
          <!-- <img src="../assets/math1.jpg" alt="" width="100%"> -->
          <small>
            https://www.theguardian.com/lifeandstyle/2014/may/17/ask-a-grown-up-who-invented-times-tables.
          </small>
        </article>
        <article>
          <h1>Andre nettsider med gangetabell-øvelser</h1>
          <ul>
            <li>
              <a href="http://www.gruble.net/matte/gange/">Gruble</a>
            </li>
            <li>
              <a href="">Gangetesteren</a>
            </li>
            <li>
              <a href="">Regneregn</a>
            </li>
            <li>
              <a href="">Multi</a>
            </li>
            <li>
              <a href="">Matte-pop</a>
            </li>
            <li>
              <a href="">Tallknuseren</a>
            </li>
            <li>
              <a href="">Regnemester</a>
            </li>
          </ul>
        </article>
      </section>
    </div>
  </div>
</template>
<script>
export default {
    props: ['landingOff']
};
</script>

<style scoped>
.hidden {
  display: none;
}
.italic {
  font-style: italic;
  margin: 20px;
  font-size: 0.7rem;
}
small {
  font-size: 9px;
}
article h1 {
  letter-spacing: 1px;
  font-size: 1rem;
}
#logo {
  margin-top: 1em;
  width: 250px;
}
#infobox {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 800px;
}
article {
  flex-wrap: wrap;
  flex: 1 0 30%;
  margin: 15px;
  background-color: rgba(255, 255, 255, 0.144);
  border-radius: 5px;
  padding: 10px 30px;
  transition: ease-in-out all 0.2s;
  /* box-sizing: border-box; */
}
article:hover {
  background-color: rgba(255, 255, 255, 0.18);
  transition: ease-in-out all 0.2s;
}
article h1 {
  text-align: center;
}
article p,
a {
  text-shadow: none;
  font-family: sans-serif;
  letter-spacing: 0.5px;
  word-spacing: 1px;
  line-height: 1.3rem;
}

article a {
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: bold;
  color: rgba(227, 222, 235, 0.644);
}
article a:hover {
  text-decoration: underline;
}
#start {
  box-shadow: 0px 1px 3px black;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  user-select: none;
  background: rgb(0, 128, 242);
  background: linear-gradient(
    133deg,
    rgba(0, 129, 242, 0.63) 16%,
    rgba(1, 204, 48, 0.712) 36%,
    rgba(245, 184, 0, 0.644) 52%,
    rgba(230, 0, 150, 0.671) 100%
  );
  padding: 10px 15px;
  border-radius: 10px;
  letter-spacing: 2px;
  transition: ease-in-out all 0.1s;
}
#start:hover {
  background: rgb(0, 128, 242);
  background: linear-gradient(
    133deg,
    rgba(0, 128, 242, 1) 16%,
    rgba(1, 204, 47, 1) 36%,
    rgba(245, 185, 0, 1) 52%,
    rgba(230, 0, 148, 1) 100%
  );
  transition: ease-in-out all 0.1s;
}
.center {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.overlay {
  /* pointer-events: none; */
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background: rgb(0, 48, 56);
  background: radial-gradient(
    circle,
    rgba(17, 86, 99, 1) 49%,
    rgba(0, 8, 9, 1) 100%
  );
}
</style>
