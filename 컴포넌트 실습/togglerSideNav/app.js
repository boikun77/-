// 동영상과 동일하게 동작하도록 구현
// 첫 로드 시, sideNav가 닫힌 상태로 로드 됨
// 이후에는 sideNav의 상태가 localStorage에 저장되어 있던 상태로 로드 됨

// 1. 첫 로드 시에는 localstorage 의 navState 값이 false
// 2. i 태그 클릭시 navState 값이 변경 => className = container 요소 전체 이동
// 3. navState 값 변경시 css 변경

const $navBar = document.querySelector(".toggle");
$navBar.addEventListener("click", () => {
  localStorage.navState === false
    ? localStorage.navState === true
    : localStorage.navState === false;
});
