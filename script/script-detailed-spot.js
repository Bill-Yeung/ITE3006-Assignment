// Functions for getting the correct content from the link and load it dynamically

var link = window.location.href;
var startIndex = link.lastIndexOf('=') + 1;
var endIndx = link.lastIndexOf('');
var spotID = link.substring(startIndex, endIndx)
var index = 0;

for (var i = 0; i < spots.length; i++) {
    if (spots[i].id == spotID) {
        index = i;
        break;
    }
}

var title = document.getElementById("title");
title.innerHTML = spots[index].name;

var img = document.getElementById("img");
img.src = spots[index].photo_url;

var video = document.getElementById("video");
video.src = spots[index].video_url;

var district = document.getElementById("district");
district.innerHTML = spots[index].district;

var entryFee = document.getElementById("entry-fee");
entryFee.innerHTML = spots[index].fee

var starRating = document.getElementById("star-rating");
starRating.innerHTML = "&#9733;".repeat(spots[index].star);

var website = document.getElementById("website");
website.innerHTML = spots[index].web_url;
website.href = spots[index].web_url;

var address = document.getElementById("address");
address.innerHTML = spots[index].address;

var gmap = document.getElementById("gmap");
gmap.src = spots[index].gmap_url;

var monFri = document.getElementById("mon-fri");
monFri.innerHTML = spots[index].mon_fri;

var satSun = document.getElementById("sat-sun");
satSun.innerHTML = spots[index].sat_sun;

var holiday = document.getElementById("holiday");
holiday.innerHTML = spots[index].holiday;

var desc = document.getElementById("desc");
desc.innerHTML = spots[index].description;