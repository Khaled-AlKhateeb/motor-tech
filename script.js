function openNav() {
  document.getElementById("navList").style.width = "100%";
}

function closeNav() {
  document.getElementById("navList").style.width = "0";
}

const speakerList = document.getElementById("speakerList");

function createSpeaker() {
  data.forEach((element) => {
    const speakerItem = document.createElement("li");
    const speakerGraphic = document.createElement("div");
    const chequeredFlag = document.createElement("img");
    const carsLogo = document.createElement("img");
    const speakerText = document.createElement("div");
    const speakerName = document.createElement("h3");
    const speakerInfo = document.createElement("h4");
    const speakerDivider = document.createElement("hr");
    const speakerBio = document.createElement("p")
    
    speakerItem.classList.add("speakers-item");
    speakerGraphic.classList.add("speakers-graphic");
    chequeredFlag.classList.add("chequered-flag");
    carsLogo.classList.add("cars-logo");
    speakerText.classList.add("speakers-text");
    speakerName.classList.add("speaker-name");
    speakerInfo.classList.add("speaker-info");
    speakerDivider.classList.add("speaker-divider");
    speakerBio.classList.add("speaker-bio");
    
    speakerItem.setAttribute('id', "speakerItem");
    speakerGraphic.setAttribute('id', "speakerGraphic");
    chequeredFlag.setAttribute('id', "chequeredFlag");
    carsLogo.setAttribute('id', "carsLogo");
    speakerText.setAttribute('id', "speakerText");
    speakerName.setAttribute('id', "speakerName");
    speakerInfo.setAttribute('id', "speakerInfo");
    speakerDivider.setAttribute('id', "speakerDivider");
    speakerBio.setAttribute('id', "speakerBio");
    
    chequeredFlag.src = "Assets/f1-fin.gif",
    speakerGraphic.appendChild(chequeredFlag),
    carsLogo.src = element.image,
    speakerGraphic.appendChild(carsLogo),
    speakerItem.appendChild(speakerGraphic),
    speakerName.innerHTML = element.name,
    speakerText.appendChild(speakerName),
    speakerInfo.innerHTML = element.description,
    speakerText.appendChild(speakerInfo),
    speakerText.appendChild(speakerDivider),
    speakerBio.innerHTML = element.bio,
    speakerText.appendChild(speakerBio),
    speakerItem.appendChild(speakerText),
    speakerList.appendChild(speakerItem),
    console.log("element");
  })
}

createSpeaker()

if (screen.width < 768) {
  for (let i = 0; i < speakerList.children.length; i++) {
    if (i > 1) {
      speakerList.children[i].style.display = "none";
      speakerList.children[i].style.height = 0
    }
  } 
}

function moreBtn() {
  let morebtn = document.getElementById("moreBtn");
  let chevron = document.getElementById("chevron");
  
  if (chevron.className === "fa-solid fa-chevron-down") {
    chevron.className = "fa-solid fa-chevron-up"
    morebtn.firstChild.nodeValue = "less";
    for (let i = 0; i < speakerList.children.length; i++) {
      if (i > 1) {
        speakerList.children[i].style.display = "flex";
        speakerList.children[i].style.height = "auto";
      }
    }
  } else {
    chevron.className = "fa-solid fa-chevron-down"
    morebtn.firstChild.nodeValue = "more"
    for (let i = 0; i < speakerList.children.length; i++) {
      if (i > 1) {
        speakerList.children[i].style.display = "none";
        speakerList.children[i].style.height = 0;
      }
    }
  }
}
