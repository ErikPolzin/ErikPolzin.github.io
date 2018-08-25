document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit();
  let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (windowWidth < 1000) {
    document.addEventListener('scroll', minimiseHeader);
  }
});

let lastScrollTop = 0;
function minimiseHeader() {
  // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop){
    // downscroll code
    document.getElementById('site-title').style.display = "none";
  } else {
    // upscroll code
    document.getElementById('site-title').style.display = "block";
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}
