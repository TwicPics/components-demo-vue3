<template>
  <div id="twic-color-blindness-container">
    <TwicWrapper filename="src/views/TwicColorBlindness.vue">
      <TwicAbstract title="Color blindness filters">
        <p>
          You can apply correction filters for color blind people with our&nbsp;
          <strong>experimental transformations</strong>:
        </p>
        <ul>
          <li>
            <a
              href="https://www.twicpics.com/docs/reference/transformations?utm_source=github&utm_medium=organic&utm_campaign=components#span-classexperimentalachromatopsiaspan"
              target="_blank"
              rel="noreferrer"
            >
              <Code>preTransform="achromatopsia=number"</Code>
            </a>
          </li>
          <li>
            <a
              href="https://www.twicpics.com/docs/reference/transformations?utm_source=github&utm_medium=organic&utm_campaign=components#span-classexperimentaldeuteranopiaspan"
              target="_blank"
              rel="noreferrer"
            >
              <Code>preTransform="deuteranopia=number"</Code>
            </a>
          </li>
          <li>
            <a
              href="https://www.twicpics.com/docs/reference/transformations?utm_source=github&utm_medium=organic&utm_campaign=components#span-classexperimentalprotanopiaspan"
              target="_blank"
              rel="noreferrer"
            >
              <Code>preTransform="protanopia=number"</Code>
            </a>
          </li>
        </ul>
        <p>
          The number provided must be between 0 and 1 and represents the degree
          of color blindness to be corrected.
        </p>
      </TwicAbstract>
      <div class="twic-testing-container">
        <button class="twic-button" @click="updateIndice">
          Click to change color blindness correction degree
        </button>
      </div>
      <div class="twic-grid">
        <div class="twic-item">
          <TwicImg :src="IMG_URL" />
          <span> Original image </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" :preTransform="actualConfig.achromatopsia" />
          <span> preTransform="{{ actualConfig.achromatopsia }}" </span>
        </div>

        <div class="twic-item">
          <TwicImg :src="IMG_URL" :preTransform="actualConfig.deuteranopia" />
          <span> preTransform="{{ actualConfig.deuteranopia }}" </span>
        </div>
        <div class="twic-item">
          <TwicImg :src="IMG_URL" :preTransform="actualConfig.protanopia" />
          <span> preTransform="{{ actualConfig.protanopia }}" </span>
        </div>
      </div>
    </TwicWrapper>
  </div>
</template>
<script>
const config = [
  {
    achromatopsia: "achromatopsia=0.5",
    deuteranopia: "deuteranopia=0.5",
    protanopia: "protanopia=0.5",
  },
  {
    achromatopsia: "achromatopsia=1",
    deuteranopia: "deuteranopia=1",
    protanopia: "protanopia=1",
  },
  {
    achromatopsia: "achromatopsia=0",
    deuteranopia: "deuteranopia=0",
    protanopia: "protanopia=0",
  },
];
export default {
  name: "TwicColorBlindness",
  data() {
    return {
      indiceConfig: 0,
      IMG_URL: `components/color-blindless/umbrellas.jpg`,
    };
  },
  computed: {
    actualConfig() {
      return config[this.indiceConfig];
    },
  },
  methods: {
    updateIndice() {
      this.indiceConfig = (this.indiceConfig + 1) % config.length;
    },
  },
};
</script>
