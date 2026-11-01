'use strict';

// 프로젝트 필터링 관련 로직 처리

// querySelector : 해당 선택자에 매칭되는 요소 중 첫번째 요소
// querySelectorALL : 해당 선택자에 매칭되는 모든 요소를 배열로 가져와줌.
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (event) => {
  const filter = event.target.dataset.category;
  if (filter == null) {
    return;
  }

  handleActiveSelection(event.target);
  filterProjects(filter);
});

function handleActiveSelection(target) {
  // Active 메뉴를 재설정
  const active = document.querySelector('.category__selected');
  //classList에 어떤 함수를 쓸 때는 클래스명만 입력
  active.classList.remove('category__selected');
  target.classList.add('category__selected');
}

function filterProjects(filter) {
  projectsContainer.classList.add('anim-out');
  // 프로젝트 필터링
  projects.forEach((project) => {
    if (filter === 'all' || filter === project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
  setTimeout(() => {
    projectsContainer.classList.remove('anim-out');
  }, 250);
}
