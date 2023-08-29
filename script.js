window.onload = function() {
    setTimeout(function() {
        const preloader = document.getElementById('preloader');
        preloader.style.display = 'none'; // Hide the preloader after 2 seconds
    }, 1000);
};


function redirectToChart(sensorName) {
    window.location.href = "chart.html?sensor=" + sensorName;
}
