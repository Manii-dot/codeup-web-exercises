(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 5.2,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
                var area = Math.PI * Math.pow(this.radius, 2);
                console.log(area);
            return (area); // TODO: return the proper value
        },


        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            if(doRounding === true){
                return Math.round(doRounding);
            }else{
                Math.ceil(doRounding);
            }
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();