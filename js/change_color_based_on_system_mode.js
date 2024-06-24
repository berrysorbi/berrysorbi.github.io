document.addEventListener('DOMContentLoaded', () => {
    // 다크 모드를 감지하는 MediaQueryList 객체 생성
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const awardImages = document.querySelectorAll('#awards .container .view-box .one-award .prize img');

    // 다크 모드가 활성화되면 다크 모드 스타일 적용
    function applyDarkMode(event) {
        if (event.matches) {
            // 다크 모드일 때
            awardImages.forEach((img) => {
                img.style.filter = 'invert(100%) brightness(200%)';
            });
            document.documentElement.classList.remove('white-mode');
        } else {
            // 다크 모드가 아닐 때
            awardImages.forEach((img) => {
                img.style.filter = 'none';
            });
            document.documentElement.classList.add('white-mode');
        }
    }

    // 초기 로딩 시 상태 확인 및 적용
    applyDarkMode(darkModeMediaQuery);

    // 다크 모드 상태가 변경될 때마다 적용
    darkModeMediaQuery.addListener(applyDarkMode);
});
