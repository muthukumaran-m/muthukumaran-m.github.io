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
  document.getElementById('yrsOfExp').innerHTML=monthDiff(new Date(2018, 11,29), new Date());
};
function monthDiff(dateFrom, dateTo) {
  return parseFloat((
    dateTo.getMonth() -
    dateFrom.getMonth() +
    12 * (dateTo.getFullYear() - dateFrom.getFullYear())
  )/12).toFixed(1);
}
