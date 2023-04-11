// const button_log_user = document.querySelector(".log_user");
// const idpop = document.querySelector(".popup-wrap-login");

// button_log_user.addEventListener("click", () => {
//   console.log("marked");
//   idpop.style.display = "none";
// });

// function myFunction() {
//   console.log("The button was clicked");
//   const tempIdLog_user = document.getElementById("idLog_user");
//   button.addEventListener("click", () => {
//     const color = button.classList[0]; // get the color from the class name
//     const div = document.querySelector(".right_main_page");
//     div.style.backgroundColor = color;
//     space.style.display = "none";
//   });
// }

// X 
// x 
// x 
// x 

const openButtonUser = document.querySelector('.open-buttonUser');
const popupUser = document.querySelector('.popupUser');
const overlayUser = document.querySelector('.overlayUser');
const closeButtonUser = document.querySelector('.closeUser');

openButtonUser.addEventListener('click', () => {
  popupUser.style.display = 'block';
  overlayUser.style.display = 'block';
});

closeButtonUser.addEventListener('click', () => {
  popupUser.style.display = 'none';
  overlayUser.style.display = 'none';
});

overlayUser.addEventListener('click', () => {
  popupUser.style.display = 'none';
  overlayUser.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    popupUser.style.display = 'none';
    overlayUser.style.display = 'none';
  }
});





// X 
// x 
// x 
// x 


function funcNightNMode() {
  if (document.getElementById("NightMode").checked) {
    const blackback = document.querySelector(".right_main_page");
    blackback.style.backgroundColor = "black";
  } else {
    const blackback = document.querySelector(".right_main_page");
    blackback.style.backgroundColor = "rgb(71, 87, 94)";

  }
}

function funtFontSize() {
  if (document.getElementById("Eyesight").checked) {
    console.log("marked");
    const tempfontsize = document.querySelectorAll(".text_main_check");

    tempfontsize.forEach(function (element) {
      element.style.fontSize = "22px";
    });
  } else {
    console.log("unmarked");
    const tempfontsize = document.querySelectorAll(".text_main_check");

    tempfontsize.forEach(function (element) {
      element.style.fontSize = "17px";
    });
  }
}


function funcSpacingRows() {
  if (document.getElementById("spacingRows").checked) {
    console.log("marked");
    const space = document.querySelectorAll(".check_div1");

    space.forEach(function (element) {
      element.style.paddingTop = "40px";
    });
  } else {
    console.log("unmarked");
    const space = document.querySelectorAll(".check_div1");

    space.forEach(function (element) {
      element.style.paddingTop = "20px";
    });
  }
}




function funcChangeThemes() {
  if (document.getElementById("changeThemes").checked) {
    console.log("marked");
    const space = document.querySelector(".popup-wrap");
    space.style.display = "block";
    const buttons = document.querySelectorAll(".list-of-colors");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const color = button.classList[0]; // get the color from the class name
        const div = document.querySelector(".right_main_page");
        div.style.backgroundColor = color;
        space.style.display = "none";
      });
    });
    const close = document.querySelector(".popup-close");
    close.addEventListener("click", () => {
      space.style.display = "none";
      document.getElementById("changeThemes").checked = false; // uncheck the checkbox
    });
    space.addEventListener("click", () => {
      space.style.display = "none";
    });


  } else {
    console.log("unmarked");
    const blackback = document.querySelector(".right_main_page");
    blackback.style.backgroundColor = "rgb(71, 87, 94)";
  }
}

function funcdeveloper() {
  const devDivs = document.querySelectorAll(".dev-hidden-div");
  if (document.getElementById("developer").checked) {
    console.log("marked");
    devDivs.forEach((div) => {
      div.style.display = "block";
    });

    const hText = document.querySelectorAll(".test_dev_mode_setings_on");
    hText.forEach(function (element) {
      element.style.display = "block";
    });

  } else {
    console.log("unmarked");
    devDivs.forEach((div) => {
      div.style.display = "none";
    });
    const hText = document.querySelectorAll(".test_dev_mode_setings_on");

    hText.forEach(function (element) {
      element.style.display = "none";
    });

  }
}


function funcResetMe() {
  if (document.querySelector("#idreset").checked) {
    console.log("marked");
    location.reload(); // reload the page
  } else {
    console.log("nothing");
  }
}