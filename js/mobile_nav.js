document.addEventListener('DOMContentLoaded', () => {
    // MediaQueryList 객체를 생성
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const navHeader = document.querySelector('nav ul li.nav-header');
    const navItems = document.querySelectorAll('nav ul li:not(.nav-header)');

    // navItems를 숨기는 함수
    function hideNavItems() {
        navItems.forEach((item) => {
            item.style.display = 'none';
        });
    }

    // navItems를 보이게 하는 함수
    function showNavItems() {
        navItems.forEach((item) => {
            item.style.display = 'list-item';
        });
    }

    // navItems의 표시 상태를 토글하는 함수
    function toggleNavItems() {
        navItems.forEach((item) => {
            if (item.style.display === 'none' || item.style.display === '') {
                item.style.display = 'list-item';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // 미디어 쿼리 조건이 만족될 때만 이벤트 핸들러를 추가
    function handleMediaQueryChange(event) {
        if (event.matches) {
            // 화면 너비가 768px 이하일 때
            hideNavItems();
            navHeader.addEventListener('click', toggleNavItems);
        } else {
            // 768px 초과일 때 navItems를 모두 보이게 함
            showNavItems();
            navHeader.removeEventListener('click', toggleNavItems);
        }
    }

    // 이벤트 핸들러를 초기 상태와 미디어 쿼리 변경 시에 연결
    mediaQuery.addListener(handleMediaQueryChange);

    // 초기 상태에서 미디어 쿼리 조건을 확인
    handleMediaQueryChange(mediaQuery);
});
