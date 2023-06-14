
  function updateLiveTime() {
    var currentTime = new Date();
    var month = currentTime.toLocaleString('default', { month: 'long' });
    var date = currentTime.getDate();
    var year =currentTime.getFullYear();
    // Format the time as desired (e.g., 'HH:MM:SS')
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var timeString =
      hours.toString().padStart(2, '0') +
      ':' +
      minutes.toString().padStart(2, '0') +
      ':' +
      seconds.toString().padStart(2, '0');

    // Display the live time in the element with the ID 'live-time'
    document.getElementById('live-time').textContent =
      month + ' ' + date +' ' +year+ '\n'+ timeString;
  }

  // Update the live time every second (1000 milliseconds)
  setInterval(updateLiveTime, 1000);

  
