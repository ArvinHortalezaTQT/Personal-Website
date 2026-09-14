function updateClock() {
  const now = new Date();
              
  // Time
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const timeString = `${hours}:${minutes}`;
              
  // Date
  const options = {
    weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric'
  };
              
  const dateString = now.toLocaleDateString('en-US', options);
              
  // Set content
  document.getElementById("Time").textContent = timeString;
  document.getElementById("Date").textContent = dateString;
}
setInterval(updateClock, 1000);