/**
 * 검색창 제어
 */
// 돋보기 아이콘만 누르면 input 태그 focus 안 되는 현상 해결
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

// input 요소 focus될 때
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); // HTML 속성을 지정하는 메소드
});

// input 요소에서 blur가 될 때
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); // HTML 속성을 지정하는 메소드
});

/**
 * 올해가 몇 년도인지 계산
 */
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
// 현재 년도의 정보 데이터가 반환됨
