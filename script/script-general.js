// header, tools, and footer templates

var header = document.getElementById("header");
header.innerHTML = `
    <div id="logo">
        <a href="home.html"><img src="img/logo/logo4.png"/></a>
        <div id="name"><h1><a href="home.html">Tour Guide</a></h1></div>
    </div>
    <div id="menu">
        <ul>
            <li>
                <a>Tourist Spots</a>
                <ul class="sub">
                    <li><a onclick="showPage('spots', 'theme-parks')">Theme Parks</a></li>
                    <li><a onclick="showPage('spots', 'city-spots')">City Spots</a></li>
                    <li><a onclick="showPage('spots', 'cultural-sites')">Cultural Sites</a></li>
                </ul>
            </li>
            <li><a href="travel-tips.html">Travel Tips</a></li>
            <li><a href="submit-stories.html">Submit Stories</a></li>
            <li><a href="inquiry.html">Inquiry</a></li>
            <li><a href="contact-us.html">Contact Us</a></li>
            <li><a href="report-problem.html">Report Problem</a></li>
        </ul>
    </div>
    <div id="tool-section">
        <div id="song">
            <img src="img/music/stop-music.svg" id="music" onclick="changeMusicStatus()" onmouseenter="popUpLyrics()"/>
            <audio id="audio" controls hidden autoplay loop>
                <source src="audio/song.mp3" type="audio/mpeg">
                Your browser does not support the audio element.<a href="audio/song.mp3">Download</a>
            </audio>
            <div id="lyrics-section"></div>
        </div>
        <div id="change-mode">
            <img id="theme" src="img/mode/dark-mode.svg" onclick="changeMode()"/>
        </div>
        <div id="weather" onclick="changeTemperatureFormat()">
            <label id="temp-value">20</label>
            <label id="temp-type">°C</label>
            <img src="img/weather/sunny.svg"/>
        </div>
    </div>
`;

var tool = document.getElementById("tools");
tools.innerHTML = `
    <div id="assistant-tool">
        <img id="help" src="img/tools/help-question.svg">
        <div class="assistant-options">
            <div class="option"><img src="img/tools/top-arrow.svg" onclick="scrollToTop()"></div>
            <div class="option"><img src="img/tools/headset-help.svg" onclick="openChatBox()"></div>
        </div>
    </div>

    <div id="chatbox">
        <div id="chatbox-header">
            <label>Chat With Us</label>
            <div><img src="img/close.svg" onclick="closeChatBox()"></div>
        </div>
        <div id="chatbox-body">
            <div id="chatbox-content">
                <div class="server-msg">
                    <img src="img/chatbox/robot.svg">
                    <p id="first-message">
                        <label>Hello! What can I do to help you?</label><br>
                        <a href="travel-tips.html">Look at travel tips</a><br>
                        <a href="submit-stories.html">Submit stories</a><br>
                        <a href="inquiry.html">Ask us a question</a><br>
                        <a href="contact-us.html">Contact us</a><br>
                        <a href="report-problem.html">Report a problem</a><br>
                    </p>
                </div>
            </div>
            <div id="chatbox-reply">
                <div id="reply-area"><input type="text" placeholder="Enter your message here ..." id="chatbox-text"></div>
                <div id="reply-button"><img src="img/chatbox/right-arrow-next.svg" onclick="processMsg()"></div>
            </div>
        </div>
    </div>
`;

var footer = document.getElementById("footer");
footer.innerHTML = `   
    <div id="footer-upper">
        <div class="footer-col">
            <h3>Tourist Spots</h3>
            <ul>
                <li><a onclick="showPage('spots', 'theme-parks')">Theme Parks</a></li>
                <li><a onclick="showPage('spots', 'city-spots')">City Spots</a></li>
                <li><a onclick="showPage('spots', 'cultural-sites')">Cultural Sites</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h3>Interaction</h3>
            <ul>
                <li><a href="travel-tips.html">Travel Tips</a></li>
                <li><a href="submit-stories.html">Submit Stories</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h3>Others</h3>
            <ul>
                <li><a href="inquiry.html">Inquiry</a></li>
                <li><a href="contact-us.html">Contact Us</a></li>
                <li><a href="report-problem.html">Report Problem</a></li>
            </ul>
        </div>
    </div>
    <div id="footer-lower">
        <p>Copyright &copy; 2025 Hong Kong Tour Guide. All rights reserved.</p>
    </div>
`;

// Functios for dropdown contents

function showPage(type, value) {

    var destinationLink = "";

    // Value is passed into the link so that the new webpage can dynamically load the content based on the link
    switch (type) {
        case "spots":
            destinationLink = "tourist-spots.html?spots=" + value;
            break;
        case "spot":
            destinationLink = "detailed-spot.html?spot=" + value;
            break;
        case "story":
            destinationLink = "detailed-story.html?story=" + value;
            break;
    }

    window.location = destinationLink;

}

// Functions for music

var isMusicPlaying = true;
checkMusicStatus();

function checkMusicStatus() {

    var audio = document.getElementById("audio");
    var musicIcon = document.getElementById("music");
    var playMusicStatus = localStorage.getItem("play-music");

    if (playMusicStatus != null) {
        if (playMusicStatus == "false") {
            audio.pause();
            musicIcon.src = "img/music/start-music.svg";
            isMusicPlaying = false;
        }
    }
}

function changeMusicStatus() {

    var audio = document.getElementById("audio");
    var musicIcon = document.getElementById("music");

    if (isMusicPlaying) {
        audio.pause();
        musicIcon.src = "img/music/start-music.svg";
        isMusicPlaying = false;
        localStorage.setItem("play-music", false);
    } else {
        audio.play();
        musicIcon.src = "img/music/stop-music.svg";
        isMusicPlaying = true;
        localStorage.setItem("play-music", true);
    }

}

function popUpLyrics() {

    var songBox = document.getElementById("lyrics-section");

    songBox.innerHTML = `
        <div id="lyrics-header">
            <div id="lyrics-close" onclick="closeLyrics()"><img src="img/close.svg"></div>
            <h1 id="lyrics-title">獅子山下</h1>
        </div>
        <div id="lyrics-content">
            <p>
                人生中有歡喜<br>
                難免亦常有淚<br>
                我哋大家<br>
                在獅子山下相遇上<br>
                總算是歡笑多於唏噓<br>
                人生不免崎嶇<br>
                難以絕無掛慮<br>
                既是同舟<br>
                在獅子山下且共濟<br>
                拋棄區分求共對<br>
                放開彼此心中矛盾<br>
                理想一起去追<br>
                同舟人誓相隨<br>
                無畏更無懼<br>
                同處海角天邊<br>
                攜手踏平崎嶇<br>
                我哋大家<br>
                用艱辛努力寫下那<br>
                不朽香江名句<br>
                放開彼此心中矛盾<br>
                理想一起去追<br>
                同舟人誓相隨<br>
                無畏更無懼<br>
                同處海角天邊<br>
                攜手踏平崎嶇<br>
                我哋大家<br>
                用艱辛努力寫下那<br>
                不朽香江名句
            </p>
        </div>
    `;

    songBox.style.display = "flex";

}

function closeLyrics() {
    var songBox = document.getElementById("lyrics-section");
    songBox.style.display = "none";
}

// Functions for changing light mode and dark mode

var css = [
    {
        "id": "general-css",
        "light_css": "css/style-general.css",
        "dark_css": "css/style-general-d.css"
    },
    {
        "id": "home-css",
        "light_css": "css/style-home.css",
        "dark_css": "css/style-home-d.css"
    },
    {
        "id": "tourist-spot-css",
        "light_css": "css/style-tourist-spots.css",
        "dark_css": "css/style-tourist-spots-d.css"
    },
    {
        "id": "detailed-spot-css",
        "light_css": "css/style-detailed-spot.css",
        "dark_css": "css/style-detailed-spot-d.css"
    },
    {
        "id": "travel-tip-css",
        "light_css": "css/style-travel-tips.css",
        "dark_css": "css/style-travel-tips-d.css"
    },
    {
        "id": "submit-stories-css",
        "light_css": "css/style-submit-stories.css",
        "dark_css": "css/style-submit-stories-d.css"
    },
    {
        "id": "inquiry-css",
        "light_css": "css/style-inquiry.css",
        "dark_css": "css/style-inquiry-d.css"
    },
    {
        "id": "contact-us-css",
        "light_css": "css/style-contact-us.css",
        "dark_css": "css/style-contact-us-d.css"
    },
    {
        "id": "report-problem-css",
        "light_css": "css/style-report-problem.css",
        "dark_css": "css/style-report-problem-d.css"
    }  
];

checkMode();

function checkMode() {

    var requestedDarkMode = localStorage.getItem("dark-mode");
    var image = document.getElementById("theme");

    if (requestedDarkMode != null) {
        if (requestedDarkMode == "true") {
            for (var i = 0; i < css.length; i++) {
                var cssDoc = document.getElementById(css[i].id);
                if (cssDoc != null) {
                    cssDoc.href = css[i].dark_css;
                    image.src = "img/mode/light-mode.svg";
                }
            }
        }
    }

}

function changeMode() {

    var requestedDarkMode = localStorage.getItem("dark-mode");
    var image = document.getElementById("theme");

    if (requestedDarkMode == null) {
        requestedDarkMode = "true";
        localStorage.setItem("dark-mode", "true");
    } else {
        if (requestedDarkMode == "true") {
            requestedDarkMode = "false";
            localStorage.setItem("dark-mode", "false");
        } else {
            requestedDarkMode = "true";
            localStorage.setItem("dark-mode", "true");
        }
    }

    for (var i = 0; i < css.length; i++) {
        var cssDoc = document.getElementById(css[i].id);
        if (cssDoc != null) {
            if (requestedDarkMode == "true") {
                cssDoc.href = css[i].dark_css;
                image.src = "img/mode/light-mode.svg";
            } else {
                cssDoc.href = css[i].light_css;
                image.src = "img/mode/dark-mode.svg";
            }
        }
    }

}

// Functions for weather box

function changeTemperatureFormat() {

    var tempValue = document.getElementById("temp-value");
    tempInt = parseInt(tempValue.innerHTML);

    var tempType = document.getElementById("temp-type");
    tempString = tempType.innerHTML;

    if (tempString == "°C") {
        tempValue.innerHTML = Math.floor(tempInt * 9 / 5 + 32);
        tempType.innerHTML = "°F";
    } else if (tempString == "°F") {
        tempValue.innerHTML = Math.floor((tempInt - 32) * 5 / 9);
        tempType.innerHTML = "°C";
    }

}

// Functions for assistant tools

function scrollToTop() {
    window.scrollTo(0, 0);
}

function openChatBox() {
    var chatBox = document.getElementById("chatbox");
    chatBox.style.display = "block";
}

function closeChatBox() {
    var chatBox = document.getElementById("chatbox");
    chatBox.style.display = "none";
}

var userText = "";
var count = 1;

function processMsg() {
    var chatText = document.getElementById("chatbox-text");
    var chatBoxContent = document.getElementById("chatbox-content");
    var chatBoxHTML = chatBoxContent.innerHTML;
    userText = chatText.value;

    chatBoxHTML += `
    <div class="client-msg">
        <img src="img/chatbox/user.svg">
        <p>${userText}</p>
    </div>
    `;
    chatText.value = "";
    chatBoxContent.innerHTML = chatBoxHTML;

    loadMsg();
}

function loadMsg() {
    var chatBoxContent = document.getElementById("chatbox-content");
    var chatBoxHTML = chatBoxContent.innerHTML;

    chatBoxHTML += `
    <div class="server-msg">
        <img src="img/chatbox/robot.svg">
        <p id="indicator">.</p>
    </div>
    `;
    chatBoxContent.innerHTML = chatBoxHTML;

    // Simulate connection
    scrollToBottom();
    simulateConnection();

}

function simulateConnection() {
    if (count < 5) {
        document.getElementById("indicator").innerHTML += ".";
        count++;
        setTimeout(simulateConnection, 500);
    } else {
        count = 1;
        var indicatorElement = document.getElementById("indicator");
        userText = userText.toLowerCase();

        switch(true) {
            case userText.includes("story"):
            case userText.includes("stories"):
                indicatorElement.innerHTML = "Want to submit stories? <a href='submit-stories.html'>Click here</a>"
                break;
            case userText.includes("spot"):
            case userText.includes("spots"):
                indicatorElement.innerHTML = "Want to view spots? <a href='home.html'>Click here</a>"
                break;
            case userText.includes("tip"):
            case userText.includes("tips"):
                indicatorElement.innerHTML = "Want to view tips? <a href='travel-tips.html'>Click here</a>"
                break;
            case userText.includes("inquiry"):
            case userText.includes("inquiries"):
                indicatorElement.innerHTML = "Want to ask questions? <a href='inquiry.html'>Click here</a>"
                break;
            case userText.includes("help"):
                indicatorElement.innerHTML = "How can I assist you today?";
                break;
            default:
                indicatorElement.innerHTML = "Sorry. I don't understand what you mean ...";
                break;
        }

        indicatorElement.id = "";
        scrollToBottom();
        
    }
}

function scrollToBottom() {
    var chatBoxContent = document.getElementById("chatbox-content");
    chatBoxContent.scrollTop = chatBoxContent.scrollHeight;
}


