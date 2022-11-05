document.getElementById("info").style.display = "none";

function checkEmail() {
  const email = document.getElementById("email");
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(email.value)) {
    alert("Hay nhap dia chi email hop le.\nExample@gmail.com");
    email.focus;
    return false;
  } else {
    document.getElementById("info").style.display = "block";
    document.getElementById("nhapEmail").style.display = "none";
  }
}
// kinh nghiệm
document.getElementById("content").style.display = "none";
document.getElementById("viewmore").onclick = function () {
  document.getElementById("content").style.display = "block";
  document.getElementById("viewmore").style.display = "none";
};
document.getElementById("viewless").onclick = function () {
  document.getElementById("content").style.display = "none";
  document.getElementById("viewmore").style.display = "block";
};
const el = document.getElementById("exp");
const hiddenDiv = document.getElementById("hide");
el.addEventListener("mouseover", function handleMouseOver() {
  hiddenDiv.style.display = "block";
});
el.addEventListener("mouseout", function handleMouseOut() {
  hiddenDiv.style.display = "none";
});
// học vấn
document.getElementById("content-hocvan").style.display = "none";
document.getElementById("viewmore-hocvan").onclick = function () {
  document.getElementById("content-hocvan").style.display = "block";
  document.getElementById("viewmore-hocvan").style.display = "none";
};
document.getElementById("viewless-hocvan").onclick = function () {
  document.getElementById("content-hocvan").style.display = "none";
  document.getElementById("viewmore-hocvan").style.display = "block";
};
const elhv = document.getElementById("hocvan");
const hiddenDivhv = document.getElementById("hide-hocvan");
elhv.addEventListener("mouseover", function handleMouseOver() {
  hiddenDivhv.style.display = "block";
});
elhv.addEventListener("mouseout", function handleMouseOut() {
  hiddenDivhv.style.display = "none";
});
// hoạt động
document.getElementById("content-hd").style.display = "none";
document.getElementById("viewmore-hd").onclick = function () {
  document.getElementById("content-hd").style.display = "block";
  document.getElementById("viewmore-hd").style.display = "none";
};
document.getElementById("viewless-hd").onclick = function () {
  document.getElementById("content-hd").style.display = "none";
  document.getElementById("viewmore-hd").style.display = "block";
};
const elhd = document.getElementById("hoatdong");
const hiddenDivhd = document.getElementById("hide-hd");
elhd.addEventListener("mouseover", function handleMouseOver() {
  hiddenDivhd.style.display = "block";
});
elhd.addEventListener("mouseout", function handleMouseOut() {
  hiddenDivhd.style.display = "none";
});
// sở thích
document.getElementById("content-st").style.display = "none";
document.getElementById("viewmore-st").onclick = function () {
  document.getElementById("content-st").style.display = "grid";
  document.getElementById("viewmore-st").style.display = "none";
};
document.getElementById("viewless-st").onclick = function () {
  document.getElementById("content-st").style.display = "none";
  document.getElementById("viewmore-st").style.display = "grid";
};
const elst = document.getElementById("sothich");
const hiddenDivst = document.getElementById("hide-st");
elst.addEventListener("mouseover", function handleMouseOver() {
  hiddenDivst.style.display = "block";
});
elst.addEventListener("mouseout", function handleMouseOut() {
  hiddenDivst.style.display = "none";
});
// ngôn ngữ
const elnn = document.getElementById("ngonngu");
const hiddenDivnn = document.getElementById("hide-nn");
elnn.addEventListener("mouseover", function handleMouseOver() {
  hiddenDivnn.style.display = "block";
});
elnn.addEventListener("mouseout", function handleMouseOut() {
  hiddenDivnn.style.display = "none";
});
document.getElementById("content-nn").style.display = "none";
document.getElementById("viewmore-nn").onclick = function () {
  document.getElementById("content-nn").style.display = "block";
  document.getElementById("viewmore-nn").style.display = "none";
};
document.getElementById("viewless-nn").onclick = function () {
  document.getElementById("content-nn").style.display = "none";
  document.getElementById("viewmore-nn").style.display = "block";
};

// kĩ năng
document.getElementById("content-kn").style.display = "none";
document.getElementById("viewmore-kn").onclick = function () {
  document.getElementById("content-kn").style.display = "block";
  document.getElementById("viewmore-kn").style.display = "none";
};
document.getElementById("viewless-kn").onclick = function () {
  document.getElementById("content-kn").style.display = "none";
  document.getElementById("viewmore-kn").style.display = "block";
};
const elkn = document.getElementById("kinang");
const hiddenDivkn = document.getElementById("hide-kn");
elkn.addEventListener("mouseover", function handleMouseOver() {
  hiddenDivkn.style.display = "block";
});
elkn.addEventListener("mouseout", function handleMouseOut() {
  hiddenDivkn.style.display = "none";
});
