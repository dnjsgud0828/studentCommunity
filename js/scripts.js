document.addEventListener('DOMContentLoaded', function() {
  let lastScrollTop = 0;
  const header = document.querySelector('.top-bar');

  window.addEventListener('scroll', function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
          // 스크롤 다운 - 헤더 숨기기
          header.style.top = '-80px';
      } else {
          // 스크롤 업 - 헤더 보이기
          header.style.top = '0';
      }
      lastScrollTop = scrollTop;
  });
});

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
  // 페이지가 300px 이상 스크롤되면 버튼을 표시
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      scrollToTopBtn.style.display = "block";
  } else {
      scrollToTopBtn.style.display = "none";
  }
}

// 버튼 클릭 시 페이지 상단으로 스크롤
document.getElementById("scrollToTopBtn").addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
