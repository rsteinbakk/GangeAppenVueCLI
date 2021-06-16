<template>
  <div class="popup_black" @click="hide_multitable">

    <div class="close">
        Lukk gangetabell
    </div>
    <br>
    <div class="tabellvindu">
      <table class="multiplikasjonstabellen">
        <tbody>
          <tr style="background-color: rgb(184, 184, 184)">
            <th>0</th>
            <th scope="column">1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>2</td>
            <td>4</td>
            <td>6</td>
            <td>8</td>
            <td>10</td>
            <td>12</td>
            <td>14</td>
            <td>16</td>
            <td>18</td>
            <td>20</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>3</td>
            <td>6</td>
            <td>9</td>
            <td>12</td>
            <td>15</td>
            <td>18</td>
            <td>21</td>
            <td>24</td>
            <td>27</td>
            <td>30</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>4</td>
            <td>8</td>
            <td>12</td>
            <td>16</td>
            <td>20</td>
            <td>24</td>
            <td>28</td>
            <td>32</td>
            <td>36</td>
            <td>40</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>5</td>
            <td>10</td>
            <td>15</td>
            <td>20</td>
            <td>25</td>
            <td>30</td>
            <td>35</td>
            <td>40</td>
            <td>45</td>
            <td>50</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>6</td>
            <td>12</td>
            <td>18</td>
            <td>24</td>
            <td>30</td>
            <td>36</td>
            <td>42</td>
            <td>48</td>
            <td>54</td>
            <td>60</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>7</td>
            <td>14</td>
            <td>21</td>
            <td>28</td>
            <td>35</td>
            <td>42</td>
            <td>49</td>
            <td>56</td>
            <td>63</td>
            <td>70</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>8</td>
            <td>16</td>
            <td>24</td>
            <td>32</td>
            <td>40</td>
            <td>48</td>
            <td>56</td>
            <td>64</td>
            <td>72</td>
            <td>80</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>9</td>
            <td>18</td>
            <td>27</td>
            <td>36</td>
            <td>45</td>
            <td>54</td>
            <td>63</td>
            <td>72</td>
            <td>81</td>
            <td>90</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>10</td>
            <td>20</td>
            <td>30</td>
            <td>40</td>
            <td>50</td>
            <td>60</td>
            <td>70</td>
            <td>80</td>
            <td>90</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    hide_multitable: Function,
    multi_table: Boolean,
  },
  data() {
    return {
      scaleOn: false,
    }
  },
  methods: {
  }
};
</script>

<style scoped>
* {
  text-shadow: none;
  font-size: 16px;
}
.close {
    background-color: #4fcf71;
    padding: 5px;
    border-radius: 5px;
    color: white;
    text-shadow: 1px 1px 1px black;
}
.popup_black {
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  display: fixed;
  background-color: rgba(0, 0, 0, 0.815);
  pointer-events: all;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

table.multiplikasjonstabellen {
  font-family: verdana, arial, sans-serif;
  font-size: 11px;
  color: #333333;
  border-width: 2px;
  border-color: #161616;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
}
table.multiplikasjonstabellen th {
  border-width: 2px;
  padding: 5px;
  border-style: solid;
  color: black;
  border-color: #161616;
  background-color: #c5c5c5;
  font-weight: bold;
  text-align: center;
}
table.multiplikasjonstabellen td {
  border-width: 2px;
  padding: 5px;
  border-style: solid;
  border-color: #161616;
  background-color: #dedede;
  text-align: center;
}
.tabellvindu {
  min-width: 300px;
}


</style>
