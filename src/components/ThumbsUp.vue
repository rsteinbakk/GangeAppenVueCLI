<template>
  <div class="popup">
    <div class="icon-gradient">
      <font-awsome-icon
        :icon="'thumbs-up'"
        class="big-icon"
        title="Bytt til tilfeldig rekkefølge"
      ></font-awsome-icon>
    </div>
    <svg width="0" height="0">
      <radialGradient id="rg" r="150%" cx="30%" cy="107%">
        <stop stop-color="rgba(0, 128, 242, 1)" offset="0.2" />
        <stop stop-color="rgba(1, 204, 47, 1)" offset="0.35" />
        <stop stop-color="rgba(245, 185, 0, 1)" offset="0.55" />
        <stop stop-color="rgba(230, 0, 148, 1)" offset="0.7" />
      </radialGradient>
    </svg>
  </div>
</template>
<style scoped>
.popup {
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  display: fixed;
  background-color: rgba(0, 0, 0, 0.11);
  pointer-events: all;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.icon-gradient svg * {
  fill: url(#rg);
}

.big-icon {
  font-size: 100px;
  margin-bottom: 10rem;
}
</style>
