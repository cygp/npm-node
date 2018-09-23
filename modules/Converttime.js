var os = require('os');
var uptime = os.uptime();

function formatTime() {
	if (uptime < 3600){
		return (uptime / 60).toFixed(0) + ' min' + Math.floor(uptime % 60) + ' sec';
	} else {
		var min = (uptime % 3600);
		return Math.floor(uptime / 3600) + ' h ' + Math.floor(min / 60) + ' min ' + Math.floor(min % 60) + ' sec';
	} 
}
//jezeli dodam w nazwie funkcji wielką literę przestaje działać - funkcja nie istnieje
exports.formattime = formatTime;