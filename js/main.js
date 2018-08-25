document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit();
  let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (windowWidth < 1000) {
    document.addEventListener('scroll', minimiseHeader);
  } else {
    document.getElementById('post').style.marginTop = "70px";
  }
});

let lastScrollTop = 0;
function minimiseHeader() {
  // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop){
    // downscroll code
    document.querySelectorAll('.hide-on-down').forEach((e) => {e.style.display = "none"});
    document.querySelectorAll('.show-on-down').forEach((e) => {e.style.display = "block"});
  } else {
    // upscroll code
    document.querySelectorAll('.show-on-up').forEach((e) => {e.style.display = "block"});
    document.querySelectorAll('.hide-on-up').forEach((e) => {e.style.display = "none"});
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}
