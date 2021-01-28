window.onload = function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 250, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });

  document.getElementById("yrsOfExp").innerHTML = monthDiff(
    new Date(2018, 11, 29),
    new Date()
  );

  getBlogFeeds();
};
function monthDiff(dateFrom, dateTo) {
  return parseFloat(
    (dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear())) /
      12
  ).toFixed(1);
}

var randomIndex = Math.abs(Math.round(Math.random() * (0 - 1642) + 0));
const settings = {
  async: true,
  crossDomain: true,
  url: "https://type.fit/api/quotes",
  method: "GET",
};

$.ajax(settings).done(function (response) {
  let qoute = JSON.parse(response)[randomIndex];
  $("#qoute-of-day").html(
    "<p class='card-content has-text-black'>" +
      qoute.text +
      "</p><p class='has-text-info'> ~ " +
      qoute.author +
      "</p>"
  );
});
function getBlogFeeds(root) {
  var feed = root.feed;
  var entries = feed.entry || [];
  entries.forEach((element) => {
    var template = "<li>Qwerty</li>";
    var template =
      '<li class="title is-6 is-link"><a href="' +
      element.link[4].href +
      '" target="_blank">' +
      element.title.$t +
      "</a><br>Published on: <span class='date is-info'>" +
      element.updated.$t.substring(0, 10) +
      "</span></li>";
    $("#rss").append(template);
  });
}
