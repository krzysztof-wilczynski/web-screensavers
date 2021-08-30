<template>
	<div id="backgroundWrap">
		<div class="bubble"></div>
		<div class="bubble"></div>
		<div class="bubble"></div>
		<div class="bubble"></div>
		<div class="bubble"></div>
		<div class="bubble"></div>
		<div class="bubble"></div>
		<div class="bubble"></div>
		<div class="bubble"></div>
		<div class="bubble"></div>
	</div>
</template>

<style lang="scss" scoped>

#backgroundWrap {
  background-color: aquamarine;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
}

@keyframes animateBubble {
  0% {
    margin-top: 1000px;
  }
  100% {
    margin-top: -40%;
  }
}

@keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}

/* ANIMATIONS */
.bubble {
  border-radius: 50%;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);

  height: 200px;
  position: absolute;
  width: 200px;

  &:after {
    background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%); /* W3C */
    border-radius: 50%;
    box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);

    content: "";
    height: 180px;
    left: 10px;
    position: absolute;
    width: 180px;
  }

  &:nth-of-type(1) {
    animation: animateBubble 25s linear infinite, sideWays 2s ease-in-out infinite alternate;

    left: -5%;
    top: 5%;

    transform: scale(0.6);
  }

  &:nth-of-type(2) {
    animation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;

    left: 5%;
    top: 80%;

    transform: scale(0.4);
  }

  &:nth-of-type(3) {
    animation: animateBubble 28s linear infinite, sideWays 2s ease-in-out infinite alternate;

    left: 10%;
    top: 40%;

    transform: scale(0.7);
  }

  &:nth-of-type(4) {
    animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;

    left: 20%;
    top: 0;

    transform: scale(0.3);
  }

  &:nth-of-type(5) {
    animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;

    left: 30%;
    top: 50%;

    transform: scale(0.5);
  }

  &:nth-of-type(6) {
    animation: animateBubble 21s linear infinite, sideWays 2s ease-in-out infinite alternate;

    left: 50%;
    top: 0;

    transform: scale(0.8);
  }

  &:nth-of-type(7) {
    animation: animateBubble 20s linear infinite, sideWays 2s ease-in-out infinite alternate;

    left: 65%;
    top: 70%;

    transform: scale(0.4);
  }

  &:nth-of-type(8) {
    animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;

    left: 80%;
    top: 10%;

    transform: scale(0.3);
  }

  &:nth-of-type(9) {
    animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;

    left: 90%;
    top: 50%;

    transform: scale(0.6);
  }

  &:nth-of-type(10) {
    animation: animateBubble 26s linear infinite, sideWays 2s ease-in-out infinite alternate;

    left: 80%;
    top: 80%;

    transform: scale(0.3);
  }
}
</style>
