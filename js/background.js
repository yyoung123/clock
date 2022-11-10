const images = [
  "https://source.unsplash.com/random/?city,night",
  "https://source.unsplash.com/random/?morning",
  "https://source.unsplash.com/random/?space",
  "https://source.unsplash.com/random/?sky",
  "https://source.unsplash.com/random/?sea",
  "https://source.unsplash.com/random/?star",
  "https://source.unsplash.com/random/?mountain",
  "https://source.unsplash.com/random/?night",
  "https://source.unsplash.com/random/?sunset",
  "https://source.unsplash.com/random/?Wallpapers",
];

const pickedImageNumber = Math.floor(Math.random() * images.length);

document.body.style.backgroundImage = `url(${images[pickedImageNumber]})`;

// const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
// const chosenImage = images[Math.floor(Math.random() * images.length)];
// const bg = document.querySelector("#bg");
// const bgImage = document.createElement("img");
// bgImage.src = `images/${chosenImage}`;

// // console.log(bgImage);

// // document.body.appendChild(bgImage);
// bg.appendChild(bgImage);
