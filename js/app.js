window.onload = function () {
  Particles.init({
    selector: ".background",
    color: "#66ffff",
    maxParticles: 200,
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 80,
        },
      },
      {
        breakpoint: 375,
        options: {
          maxParticles: 50,
        },
      },
    ],
  });
};
