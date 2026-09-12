console.log("Resume Generator");
let we = 1;
let aq = 1;
// work experience function and academic qualifications function
const call = (event) => {
    if (event.target.value === "firstChild") {
        we++;
    }
    else aq++;

  let academicAndExperience = event.target;
  // creatin input tag for work experience
  let workExperienceInput = document.createElement("input");
  workExperienceInput.setAttribute("type", "text");
  workExperienceInput.setAttribute("placeholder", "Enter here");
  workExperienceInput.setAttribute("class", "input");
  academicAndExperience.parentElement.insertBefore(workExperienceInput, academicAndExperience);
};

// store the data of personal information
let name;
let number;
let address;
let github;  
let leetcode;
let linkedin;

// store the data of professional information
let objective;
let workExperience = [];
let academicQualifications = [];

// submit form
let form = document.querySelector("#resumeForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  changeTemplate();
});

// change template function
const changeTemplate = () => {
  let mainDiv = document.querySelector("#mainDiv").children;
  name = mainDiv[2].value;
  number = mainDiv[4].value;
  address = mainDiv[6].value;
  github = mainDiv[9].value;
  leetcode = mainDiv[11].value;
  linkedin = mainDiv[13].value;

  console.log(name);
  console.log(number);
  console.log(address);
  console.log(github);
  console.log(leetcode);
  console.log(linkedin);

  let secondMainDiv = document.querySelector("#secondMainDiv").children;
  objective = secondMainDiv[2].value;
  console.log(objective);

  for (let i = 0; i < we; i++) {
    workExperience.push(secondMainDiv[4 + i].value);
  }

  for (let i = 0; i < aq; i++) {
    academicQualifications.push(secondMainDiv[6 + i + we].value);
  }

  for (let i = 0; i < we; i++) {
    console.log(workExperience[i]);
  }

  for (let i = 0; i < aq; i++) {
    console.log(academicQualifications[i]);
  }

  // remove the mainDiv and secondMainDiv
  let parent = document.body;
  parent.removeChild(form);
  console.log("removed");

  // New div for resume template
  let grandParent = document.createElement("div");
  grandParent.setAttribute("id", "grandParent");
  document.body.appendChild(grandParent);
  grandParent.style.backgroundColor = "whitesmoke";
  grandParent.style.minHeight = "70vh";
  grandParent.style.display = "flex";
  grandParent.style.margin = "55px 25px 0 25px";
  console.log(grandParent);

  // first child of grandParent

  let husbandDiv = document.createElement("div");
  husbandDiv.setAttribute("id", "husbandDiv");
  grandParent.appendChild(husbandDiv);
  husbandDiv.style.backgroundColor = "#64E9CF";
  husbandDiv.style.width = "33%";

  // second element of husbandDiv
  let husbandDiv_secondElement = document.createElement("div");
  husbandDiv.appendChild(husbandDiv_secondElement);
  husbandDiv_secondElement.style.backgroundColor = "white";
  husbandDiv_secondElement.style.width = "30%";
  husbandDiv_secondElement.style.aspectRatio = "1 / 1";
  husbandDiv_secondElement.style.borderRadius = "50%";
  husbandDiv_secondElement.style.margin = "auto";
  husbandDiv_secondElement.style.marginTop = "20%";
  husbandDiv_secondElement.style.backgroundImage =
    "url('https://tinyurl.com/usve47vz')";
  husbandDiv_secondElement.style.backgroundSize = "cover";
  husbandDiv_secondElement.style.backgroundPosition = "center";
  husbandDiv_secondElement.style.display = "flex";
  husbandDiv_secondElement.style.justifyContent = "center";
  husbandDiv_secondElement.style.alignItems = "center";

  // Image function
  const imgCall = () => {
    // Create file input
    let imageInput = document.createElement("input");

    imageInput.setAttribute("type", "file");
    imageInput.setAttribute("accept", "image/*");

    // Hide the file input
    imageInput.style.display = "none";

    document.body.appendChild(imageInput);

    // Open file chooser
    imageInput.click();

    // When user selects an image
    imageInput.addEventListener("change", function () {
      let file = imageInput.files[0];

      if (file) {
        // Create image element
        let selectedImage = document.createElement("img");

        selectedImage.src = URL.createObjectURL(file);

        selectedImage.style.width = "100%";
        selectedImage.style.height = "100%";
        selectedImage.style.objectFit = "cover";
        selectedImage.style.borderRadius = "50%";

        // Find the + button
        let add = husbandDiv_secondElement.querySelector("#image");

        // Replace + button with selected image
        husbandDiv_secondElement.replaceChild(selectedImage, add);

        console.log("Image selected");
        console.log(selectedImage);
      }
    });
  };

  // Create + button
  let addPlusSymbol = document.createElement("button");

  addPlusSymbol.setAttribute("id", "image");
  addPlusSymbol.innerText = "+";

  husbandDiv_secondElement.appendChild(addPlusSymbol);

  addPlusSymbol.style.border = "none";
  addPlusSymbol.style.borderRadius = "50%";
  addPlusSymbol.style.fontSize = "100%";

  // Click + button
  addPlusSymbol.addEventListener("click", imgCall);

  // third element of husbandDiv
  let husbandDiv_thirdElement = document.createElement("div");
  husbandDiv.appendChild(husbandDiv_thirdElement);
  husbandDiv_thirdElement.style.width = "90%";
  husbandDiv_thirdElement.style.aspectRatio = "2 / 1";
  husbandDiv_thirdElement.style.backgroundColor = "#64E9CF";
  husbandDiv_thirdElement.style.margin = "15px auto 5px";
  husbandDiv_thirdElement.style.boxSizing = "border-box";

  // All element of ThirdElementOfHusbandDiv
  let e1 = document.createElement("p");
  e1.innerText = name;
  e1.style.fontSize = "15px";
  e1.style.paddingBottom = "15px";
  husbandDiv_thirdElement.appendChild(e1);

  let e2 = document.createElement("p");
  e2.innerText = number;
  e2.style.fontSize = "15px";
  husbandDiv_thirdElement.appendChild(e2);

  let e3 = document.createElement("p");
  e3.innerText = address;
  e3.style.fontSize = "15px";
  husbandDiv_thirdElement.appendChild(e3);

  if (github !== "") {
    let e4 = document.createElement("a");
    e4.setAttribute("href", github);
    husbandDiv_thirdElement.appendChild(e4);
    e4.innerText = "github";
    e4.style.color = "blue";
    e4.style.fontSize = "12px";
    console.log(e4);
  }

  if (leetcode !== "") {
    let e5 = document.createElement("a");
    e5.setAttribute("href", leetcode);
    e5.innerText = "leetcode";
    e5.style.color = "blue";
    e5.style.fontSize = "12px";
    e5.style.paddingLeft = "3px";
    husbandDiv_thirdElement.appendChild(e5);
  }

  if (linkedin !== "") {
    let e6 = document.createElement("a");
    e6.setAttribute("href", linkedin);
    e6.innerText = "linkedin";
    e6.style.color = "blue";
    e6.style.fontSize = "12px";
    e6.style.paddingLeft = "3px";
    husbandDiv_thirdElement.appendChild(e6);
  }

  // second child of grandParent
  let wifeDiv = document.createElement("div");
  wifeDiv.setAttribute("id", "wifeDiv");
  grandParent.appendChild(wifeDiv);
  wifeDiv.style.backgroundColor = "whitesmoke";
  wifeDiv.style.width = "67%";
  wifeDiv.style.marginLeft = "7px";

  let wifeDiv_firstElement = document.createElement("h2");
  wifeDiv_firstElement.innerText = name;
  wifeDiv_firstElement.style.padding = "15px 0 8px 5px";
  wifeDiv.appendChild(wifeDiv_firstElement);

  let wifeDiv_secondElement = document.createElement("h3");
  wifeDiv_secondElement.setAttribute("class", "h3");
  wifeDiv_secondElement.innerText = "Objective";
  wifeDiv.appendChild(wifeDiv_secondElement);

  let wifeDiv_thirdElement = document.createElement("p");
  wifeDiv_thirdElement.setAttribute("class", "p");
  wifeDiv_thirdElement.innerText = objective;
  wifeDiv.appendChild(wifeDiv_thirdElement);
  console.log("helloooooo");
  console.log(wifeDiv_thirdElement);

  let wifeDiv_fourthElement = document.createElement("h3");
  wifeDiv_fourthElement.setAttribute("class", "h3");
  wifeDiv_fourthElement.innerText = "Work Experience";
  wifeDiv_fourthElement.style.marginTop = "10px";
  wifeDiv.appendChild(wifeDiv_fourthElement);

  let wifeDiv_fifthElement = document.createElement("div");
  wifeDiv_fifthElement.setAttribute("class", "p");
  for (let i of workExperience) {
    let Ptag = document.createElement("p");
    Ptag.innerText = "• " + i;
    wifeDiv_fifthElement.appendChild(Ptag);
  }
  wifeDiv.appendChild(wifeDiv_fifthElement);

  let wifeDiv_sixtithElement = document.createElement("h3");
  wifeDiv_sixtithElement.setAttribute("class", "h3");
  wifeDiv_sixtithElement.innerText = "Academic Qualification";
  wifeDiv_sixtithElement.style.marginTop = "10px";
  wifeDiv.appendChild(wifeDiv_sixtithElement);

  let wifeDiv_seventhElement = document.createElement("div");
  wifeDiv_seventhElement.setAttribute("class", "p");
  for (let i of academicQualifications) {
    let Ptag = document.createElement("p");
    Ptag.innerText = "• " + i;
    wifeDiv_seventhElement.appendChild(Ptag);
  }
  wifeDiv.appendChild(wifeDiv_seventhElement);

  // all heading class
  let allHeadingStyle = wifeDiv.querySelectorAll(".h3");
  for (let i of allHeadingStyle) {
    i.style.padding = "9px";
    i.style.background = "#64E9CF";
  }

  // all p element container
  let allP = document.querySelectorAll("#wifeDiv .p");

  for (let i of allP) {
    i.style.padding = "5px 0 15px 5px";
    i.style.backgroundColor = "white";
    i.style.fontSize = "12px";
    i.style.borderBottomLeftRadius = "5px";
    i.style.borderBottomRightRadius = "5px";
    i.style.border = "2px solid white";
  }

  // I am Naveen. Pursuing BCA. It's final year. And willing to contribute my skill in real world project.
};