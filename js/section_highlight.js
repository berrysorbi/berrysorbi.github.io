// 섹션과 네비게이션 항목을 연결
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('nav ul li[data-target]');

// IntersectionObserver 옵션
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // 화면에 50% 이상 보일 때 트리거
};

// IntersectionObserver 콜백 함수
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const targetId = entry.target.getAttribute('id');
        const navItem = document.querySelector(`nav ul li[data-target="${targetId}"]`);

        if (entry.isIntersecting) {
            navItem.classList.add('active');
        } else {
            navItem.classList.remove('active');
        }
    });
}, options);

// 각 섹션에 대해 Observer 적용
sections.forEach((section) => {
    observer.observe(section);
});

// 네비게이션 클릭 시 스크롤 이동
navItems.forEach((item) => {
    item.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
