






var scaler = function(maxin, maxout, inputnumber) {
    var output = (0 - maxout)/(0 - maxin) * inputnumber
    return output
}





var clock = document.querySelector("h1")

var time = function(){
	var currentTime = new Date()
	var seconds = currentTime. getSeconds()
	var minutes = currentTime.getMinutes()
	var hour = currentTime.getHours()

	clock.textContent = hour + ":" + minutes + ":" + seconds
}
setInterval(time,1000)

var colorval = document.querySelector(".colorval")



var colClock = document.querySelector(".colClock")


var timeToHex = function() {
 	var now = new Date()
	var hrs = now.getHours(),
        mins = now.getMinutes(),
        seconds = now.getSeconds()
    
    
    hrs =Math.round(scaler(23,255,hrs))
    mins =Math.round(scaler(59,255,mins))
    seconds =Math.round(scaler(59,255,seconds))
       
    var reds = hrs.toString(16),
        greens = mins.toString(16),
        blues = seconds.toString(16)
        if (blues < 10 ) {
        	blues = "0" + blues
        }
    
    var background = document.querySelector(".overlay")
    background.style.background = "#" + reds + greens + blues
    colClock.innerHTML = reds + ":" + greens + ":" + blues
    
   

}

setInterval(timeToHex,1000)

