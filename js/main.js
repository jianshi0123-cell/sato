/* =========================================================
   朱馨凝 · 前端开发作品集
   这个文件只做 4 件小事：
   1. 控制手机端导航菜单
   2. 点击导航后自动收起菜单
   3. 控制“返回顶部”按钮
   4. 自动更新页脚年份
   ========================================================= */

// 找到页面中需要用到的元素
const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#nav");
const backToTop = document.querySelector("#backToTop");
const year = document.querySelector("#year");

/* ---------------------------------------------------------
   一、手机端菜单
   --------------------------------------------------------- */

// 打开菜单
function openMenu() {
  nav.classList.add("is-open");
  document.body.classList.add("menu-open");
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", "关闭导航菜单");
}

// 关闭菜单
function closeMenu() {
  nav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "打开导航菜单");
}

// 点击右上角按钮时，在打开 / 关闭之间切换
menuButton.addEventListener("click", function () {
  const isOpen = nav.classList.contains("is-open");

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

// 点击任意导航链接后，自动收起手机菜单
const navLinks = nav.querySelectorAll("a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    closeMenu();
  });
});

// 按键盘 Esc 键也可以关闭菜单
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeMenu();
  }
});

// 如果窗口从手机宽度拉宽到桌面宽度，自动关闭手机菜单
window.addEventListener("resize", function () {
  if (window.innerWidth > 700) {
    closeMenu();
  }
});

/* ---------------------------------------------------------
   二、返回顶部按钮
   --------------------------------------------------------- */

// 页面往下滚动超过 400px 时，显示按钮
window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// 点击按钮，平滑回到页面顶部
backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* ---------------------------------------------------------
   三、自动更新年份
   --------------------------------------------------------- */

// 如果浏览器支持 Date，就把当前年份写入页脚
year.textContent = new Date().getFullYear();
