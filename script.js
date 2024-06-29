document.getElementById('startButton').addEventListener('click', function() {
    var hours = parseInt(document.getElementById('hours').value) || 0;
    var minutes = parseInt(document.getElementById('minutes').value) || 0;
    var seconds = parseInt(document.getElementById('seconds').value) || 0;

    var totalSeconds = hours * 60 * 60 + minutes * 60 + seconds;

    if (isNaN(totalSeconds) || totalSeconds <= 0) {
        alert('Please set a valid time.');
        return;
    }

    var timerInterval = setInterval(function() {
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            document.getElementById('displayHours').textContent = '00';
            document.getElementById('displayMinutes').textContent = '00';
            document.getElementById('displaySeconds').textContent = '00';
            document.getElementById('timer').textContent = 'TIME UP';

            // Play the alarm sound
            var audio = document.getElementById('alarmSound');
            audio.play().catch(function(error) {
                console.error('Error playing audio:', error);
            });
            return;
        }

        var displayHours = Math.floor(totalSeconds / 3600);
        var displayMinutes = Math.floor((totalSeconds % 3600) / 60);
        var displaySeconds = totalSeconds % 60;

        document.getElementById('displayHours').textContent = displayHours < 10 ? '0' + displayHours : displayHours;
        document.getElementById('displayMinutes').textContent = displayMinutes < 10 ? '0' + displayMinutes : displayMinutes;
        document.getElementById('displaySeconds').textContent = displaySeconds < 10 ? '0' + displaySeconds : displaySeconds;

        totalSeconds--;
    }, 1000);
});
