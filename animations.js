$(document).ready(function() {
    var bc1 = "#bf00ff" // Light purple
    var bc2 = "#9900cc" // Dark purple
    
    $("#coverInfo").css("background-color", bc1);
    
    var color1 = true;
    
    var cover = true;
    var edu = false;
    var org = false;
    var extra = false;
    var skills = false;
    var awards = false;
    
    var textPanelWidth = $("#textPanel").width();
    
    $("#eduButton").click(function() {
        if (color1 == true) {
            $("#eduInfo").css("background-color", bc2);
            $("#textPanel").css("background-color", bc1);
            color1 = false;
        } else if (color1 == false) {
            $("#eduInfo").css("background-color", bc1);
            $("#textPanel").css("background-color", bc2);
            color1 = true;
        }
        
        if (cover == true) {
            $("#coverInfo").animate({"width": "0px"}, "slow");
            $("#coverInfo").css("display", "none");
            cover = false;
        } else if (org == true) {
            $("#orgInfo").animate({"width": "0px"}, "slow");
            $("#orgInfo").css("display", "none");
            org = false;
        } else if (extra == true) {
            $("#extraInfo").animate({"width": "0px"}, "slow");
            $("#extraInfo").css("display", "none");
            extra = false;
        } else if (skills == true) {
            $("#skillsInfo").animate({"width": "0px"}, "slow");
            $("#skillsInfo").css("display", "none");
            skills = false;
        } else if (awards == true) {
            $("#awardsInfo").animate({"width": "0px"}, "slow");
            $("#awardsInfo").css("display", "none");
            awards = false;
        }
        
        $("#eduInfo").css("display", "block");
        $("#eduInfo").animate({"width": textPanelWidth + "px"}, "slow");
        edu = true;
        
    });

    $("#orgButton").click(function() {
        if (color1 == true) {
            $("#orgInfo").css("background-color", bc2);
            $("#textPanel").css("background-color", bc1);
            color1 = false;
        } else if (color1 == false) {
            $("#orgInfo").css("background-color", bc1);
            $("#textPanel").css("background-color", bc2);
            color1 = true;
        }
        
        if (cover == true) {
            $("#coverInfo").animate({"width": "0px"}, "slow");
            $("#coverInfo").css("display", "none");
            cover = false;
        } else if (edu == true) {
            $("#eduInfo").animate({"width": "0px"}, "slow");
            $("#eduInfo").css("display", "none");
            edu = false;
        } else if (extra == true) {
            $("#extraInfo").animate({"width": "0px"}, "slow");
            $("#extraInfo").css("display", "none");
            extra = false;
        } else if (skills == true) {
            $("#skillsInfo").animate({"width": "0px"}, "slow");
            $("#skillsInfo").css("display", "none");
            skills = false;
        } else if (awards == true) {
            $("#awardsInfo").animate({"width": "0px"}, "slow");
            $("#awardsInfo").css("display", "none");
            awards = false;
        }
        $("#orgInfo").css("display", "block");
        $("#orgInfo").show().animate({"width": textPanelWidth + "px"}, "slow");
        org = true;
    });

    $("#extraButton").click(function() {
        if (color1 == true) {
            $("#extraInfo").css("background-color", bc2);
            $("#textPanel").css("background-color", bc1);
            color1 = false;
        } else if (color1 == false) {
            $("#extraInfo").css("background-color", bc1);
            $("#textPanel").css("background-color", bc2);
            color1 = true;
        }
        
        if (cover == true) {
            $("#coverInfo").animate({"width": "0px"}, "slow");
            $("#coverInfo").css("display", "none");
            cover = false;
        } else if (org == true) {
            $("#orgInfo").animate({"width": "0px"}, "slow");
            $("#orgInfo").css("display", "none");
            org = false;
        } else if (edu == true) {
            $("#eduInfo").animate({"width": "0px"}, "slow");
            $("#eduInfo").css("display", "none");
            edu = false;
        } else if (skills == true) {
            $("#skillsInfo").animate({"width": "0px"}, "slow");
            $("#skillsInfo").css("display", "none");
            skills = false;
        } else if (awards == true) {
            $("#awardsInfo").animate({"width": "0px"}, "slow");
            $("#awardsInfo").css("display", "none");
            awards = false;
        }
        $("#extraInfo").css("display", "block");
        $("#extraInfo").show().animate({"width": textPanelWidth + "px"}, "slow");
        extra = true;
    });

    $("#skillsButton").click(function() {
        if (color1 == true) {
            $("#skillsInfo").css("background-color", bc2);
            $("#textPanel").css("background-color", bc1);
            color1 = false;
        } else if (color1 == false) {
            $("#skillsInfo").css("background-color", bc1);
            $("#textPanel").css("background-color", bc2);
            color1 = true;
        }
        
        if (cover == true) {
            $("#coverInfo").animate({"width": "0px"}, "slow");
            $("#coverInfo").css("display", "none");
            cover = false;
        } else if (org == true) {
            $("#orgInfo").animate({"width": "0px"}, "slow");
            $("#orgInfo").css("display", "none");
            org = false;
        } else if (extra == true) {
            $("#extraInfo").animate({"width": "0px"}, "slow");
            $("#extraInfo").css("display", "none");
            extra = false;
        } else if (edu == true) {
            $("#eduInfo").animate({"width": "0px"}, "slow");
            $("#eduInfo").css("display", "none");
            edu = false;
        } else if (awards == true) {
            $("#awardsInfo").animate({"width": "0px"}, "slow");
            $("#awardsInfo").css("display", "none");
            awards = false;
        }
        $("#skillsInfo").css("display", "block");
        $("#skillsInfo").show().animate({"width": textPanelWidth + "px"}, "slow");
        skills = true;
    });

    $("#awardsButton").click(function() {
        if (color1 == true) {
            $("#awardsInfo").css("background-color", bc2);
            $("#textPanel").css("background-color", bc1);
            color1 = false;
        } else if (color1 == false) {
            $("#awardsInfo").css("background-color", bc1);
            $("#textPanel").css("background-color", bc2);
            color1 = true;
        }
        
        if (cover == true) {
            $("#coverInfo").animate({"width": "0px"}, "slow");
            $("#coverInfo").css("display", "none");
            cover = false;
        } else if (org == true) {
            $("#orgInfo").animate({"width": "0px"}, "slow");
            $("#orgInfo").css("display", "none");
            org = false;
        } else if (extra == true) {
            $("#extraInfo").animate({"width": "0px"}, "slow");
            $("#extraInfo").css("display", "none");
            extra = false;
        } else if (skills == true) {
            $("#skillsInfo").animate({"width": "0px"}, "slow");
            $("#skillsInfo").css("display", "none");
            skills = false;
        } else if (edu == true) {
            $("#eduInfo").animate({"width": "0px"}, "slow");
            $("#eduInfo").css("display", "none");
            edu = false;
        }
        $("#awardsInfo").css("display", "block");
        $("#awardsInfo").show().animate({"width": textPanelWidth + "px"}, "slow");
        awards = true;
    });
    
    $("#coverButton").click(function() {
        var textContainerOffset = $("#textContainer").offset();
        var textContainerLeft = textContainerOffset.left;
        
        // Reset positions of other divs
        if (color1 == true) {
            $("#coverInfo").css("background-color", bc2);
            $("#textPanel").css("background-color", bc1);
            color1 = false;
        } else if (color1 == false) {
            $("#coverInfo").css("background-color", bc1);
            $("#textPanel").css("background-color", bc2);
            color1 = true;
        }
        
        // Hide current info divs
        if (edu == true) {
            $("#coverInfo").animate({"width": "0px"}, "slow");
            $("#coverInfo").css("display", "none");
            cover = false;
        } else if (org == true) {
            $("#orgInfo").animate({"width": "0px"}, "slow");
            $("#orgInfo").css("display", "none");
            org = false;
        } else if (extra == true) {
            $("#extraInfo").animate({"width": "0px"}, "slow");
            $("#extraInfo").css("display", "none");
            extra = false;
        } else if (skills == true) {
            $("#skillsInfo").animate({"width": "0px"}, "slow");
            $("#skillsInfo").css("display", "none");
            skills = false;
        } else if (awards == true) {
            $("#awardsInfo").animate({"width": "0px"}, "slow");
            $("#awardsInfo").css("display", "none");
            awards = false;
        }
        
        $("#coverInfo").css("display", "block");
        $("#coverInfo").animate({"width": textPanelWidth + "px"}, "slow");
        cover = true;
        
        $("#coverButton").animate({"left": (textContainerLeft - $("#coverButton").outerWidth() * 3.75) + "px"}, "slow");
        $("#coverButton").animate({"left": "90%"}, "slow");
    });
});
