const swatches = document.querySelectorAll("#color-generator > .swatch");

const button = document.querySelector("button");

button.addEventListener("click", () => {
  const colors = Object.values(generateRandomColor());

  for (let index = colors.length - 1; index > 0; index--) {
    const randomIndex = getRandomIntInclusive(0, index);
    [colors[index], colors[randomIndex]] = [colors[randomIndex], colors[index]];
  }

  swatches.forEach((swatch, index) => {
    swatch.style.backgroundColor = colors[index];
  });
});

const generateRandomColor = () => {
  const lightness = getRandomInRange(0.2, 0.4);
  const chroma = getRandomInRange(0.1, 0.3);
  const hue = getRandomIntInclusive(0, 360);

  const { secondaryLightness, secondaryChroma, secondaryHue } = makeSecondary(
    lightness,
    chroma,
    hue,
  );

  const { accentLightness, accentChroma, accentHue } = makeAccent(
    lightness,
    chroma,
    hue,
  );

  return {
    primaryColor: generateOklchString(lightness, chroma, hue),
    secondaryColor: generateOklchString(
      secondaryLightness,
      secondaryChroma,
      secondaryHue,
    ),
    accentColor: generateOklchString(accentLightness, accentChroma, accentHue),
    backgroundColor: makeBackground(hue),
    textColor: makeText(hue),
  };
};

function makeSecondary(lightness, chroma, hue) {
  lightness = getRandomInRange(lightness + 0.05, 0.6);
  chroma = getRandomInRange(chroma + 0.05, 0.6);

  return {
    secondaryLightness: lightness,
    secondaryChroma: chroma,
    secondaryHue: hue,
  };
}

function makeAccent(lightness, chroma, hue) {
  chroma = getRandomInRange(chroma, 0.4);

  hue = hue + getRandomIntInclusive(160, 200);

  if (hue > 360) {
    hue = hue - 360;
  }

  return {
    accentLightness: lightness,
    accentChroma: chroma,
    accentHue: hue,
  };
}

function makeBackground(hue) {
  const lightness = getRandomInRange(0.94, 0.98);
  const chroma = getRandomInRange(0.005, 0.02);

  return generateOklchString(lightness, chroma, hue);
}

function makeText(hue) {
  const lightness = getRandomInRange(0.15, 0.3);
  const chroma = getRandomInRange(0.005, 0.03);

  return generateOklchString(lightness, chroma, hue);
}

function generateOklchString(lightness, chroma, hue) {
  return `oklch(${lightness} ${chroma} ${hue})`;
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const getRandomInRange = (min, max) => {
  return Math.random() * (max - min) + min;
};
