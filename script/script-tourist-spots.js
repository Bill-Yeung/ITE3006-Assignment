// Functions for getting the correct content from the link and load it dynamically

var link = window.location.href;
var startIndex = link.lastIndexOf('=') + 1;
var endIndx = link.lastIndexOf('');
var spotType = link.substring(startIndex, endIndx)
var spotTypeString = "";

switch(spotType) {
    case "theme-parks":
        spotTypeString = "Theme Parks";
        break;
    case "city-spots":
        spotTypeString = "City Spots";
        break;
    case "cultural-sites":
        spotTypeString = "Cultural Sites";
        break;
}

var header = document.getElementById("main-header");
header.innerHTML = "<h1>Explore Hong Kong's " + spotTypeString + "</h1>";

var spotCard = "";

for (var i = 0; i < spots.length; i++) {
    if (spots[i].type == spotType) {
        spotCard += `
            <div class="spot-card">
                <div class="img-container"><img src="${spots[i].photo_url}"></div>
                <div class="content">
                    <h2>${spots[i].name}</h2>
                    <p>${spots[i].description_short}</p>
                    <a class="link" onclick="showPage('spot', '${spots[i].id}')">Know More</a>
                </div>
            </div>
        `;
    }
}

var spotsContainer = document.getElementById("spots-container");
spotsContainer.innerHTML = spotCard;