const startBtn = document.getElementById('startBtn');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const body = document.body;

    startBtn.addEventListener('click', () => {
      page1.classList.remove('active');
      page2.classList.add('active');
      body.classList.remove('no-scroll');
      body.classList.add('scrollable');
      // 슬라이드쇼 시작
      startSlideshow();
    });

    // 슬라이드쇼 함수
    function startSlideshow() {
      const slides = document.querySelectorAll('.slide');
      console.log('슬라이드 개수:', slides.length);
      let currentSlide = 0;
      
      // 첫 번째 슬라이드만 보이게 초기화
      slides.forEach((slide, index) => {
        if (index === 0) {
          slide.style.opacity = '1';
        } else {
          slide.style.opacity = '0';
        }
      });
      
      function nextSlide() {
        console.log('슬라이드 변경:', currentSlide);
        // 현재 슬라이드 숨기기
        slides[currentSlide].style.opacity = '0';
        
        // 다음 슬라이드로 이동
        currentSlide = (currentSlide + 1) % slides.length;
        
        // 새 슬라이드 보이기
        slides[currentSlide].style.opacity = '1';
      }
      
      // 5초마다 슬라이드 변경
      setInterval(nextSlide, 5000);
    }

    // 마우스 호버 기능
    document.addEventListener('DOMContentLoaded', () => {
      const misterkimfullImg = document.querySelector('.misterkim-img');
      const mrskimImg = document.querySelector('.mrskim-col .mrskim-img');
      const pickoneImg = document.querySelector('.pickone-wrapper img');
      const aboutmrImg = document.querySelector('.aboutmr-img');
      const aboutmrsImg = document.querySelector('.aboutmrs-img');
      
      if (misterkimfullImg && pickoneImg) {
        // 마우스가 misterkimfull에 올라갔을 때
        misterkimfullImg.addEventListener('mouseenter', () => {
          pickoneImg.src = 'images/pinkname.png';
          pickoneImg.alt = '핑크네임';
          if (aboutmrImg) {
            aboutmrImg.style.opacity = '1';
          }
        });
        
        // 마우스가 misterkimfull에서 벗어났을 때
        misterkimfullImg.addEventListener('mouseleave', () => {
          pickoneImg.src = 'images/pickone.png';
          pickoneImg.alt = '픽원';
          if (aboutmrImg) {
            aboutmrImg.style.opacity = '0';
          }
        });
      }
      
      if (mrskimImg && pickoneImg) {
        // 마우스가 mrskim에 올라갔을 때
        mrskimImg.addEventListener('mouseenter', () => {
          pickoneImg.src = 'images/yellowname.png';
          pickoneImg.alt = '옐로우네임';
          if (aboutmrsImg) {
            aboutmrsImg.style.opacity = '1';
          }
        });
        
        // 마우스가 mrskim에서 벗어났을 때
        mrskimImg.addEventListener('mouseleave', () => {
          pickoneImg.src = 'images/pickone.png';
          pickoneImg.alt = '픽원';
          if (aboutmrsImg) {
            aboutmrsImg.style.opacity = '0';
          }
        });
      }
    });

    // 스크롤 이벤트로 그라데이션 표시
    window.addEventListener('scroll', () => {
      const gradient = document.querySelector('.orange-gradient');
      if (gradient) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // 페이지 끝에 도달했을 때 그라데이션 표시
        if (scrollTop + windowHeight >= documentHeight - 50) {
          gradient.classList.add('show');
        } else {
          gradient.classList.remove('show');
        }
      }
    });