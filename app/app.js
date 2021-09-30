function addModalListener() {
  $(".bg-click").click(function (e) {
    gsap.to($(".modal"), { scale: 0, duration: 2 });
  });
}

function initListener() {
  $("#submit").click(function (e) {
    e.preventDefault();
    let text = $("#username").val();
    let pass = $("#password").val();
    gsap.to($(".modal"), {
      scale: 0,
      duration: 2,
      onComplete: showAlert,
      onCompleteParams: [text, pass],
    });
  });

  $("#showModal").click(function (e) {
    gsap.to($(".modal"), { scale: 1, duration: 2 });
    //$(".modal").css("display", "flex");
    addModalListener();
  });
}

function showAlert(text, pass) {
  console.log("Your Username is " + text + " Your Password is " + pass);
  alert("You've logged in!");
}

$(document).ready(function () {
  initListener();
  gsap.set($(".modal"), { scale: 0 });
});
