/* =========================================================
   RE:able 사이트 공통 스크립트
   - 헤더 / 푸터 주입 (단일 소스)
   - 모바일 메뉴, 드롭다운, 스크롤 헤더
   - 스크롤 리빌, FAQ 아코디언
   ========================================================= */
(function () {
  'use strict';

  /* ----- 네비게이션 정의 ----- */
  var NAV = [
    { key: 'home',     label: '홈',          href: 'index.html' },
    { key: 'about',    label: '회사소개',     href: 'about.html' },
    { key: 'service',  label: '솔루션',      href: 'service-kids.html', menu: [
        { label: '교육기관',   sub: '어린이집·유치원 식기케어',         href: 'service-kids.html' },
        { label: '기업·단체',  sub: '기업·병원·장례식장 단체급식',       href: 'service-biz.html' },
        { label: '공공·행사',  sub: '학교·공공조달·축제 다회용기',       href: 'service-eco.html' }
    ]},
    { key: 'factory',  label: '운영 인프라',  href: 'factory.html' },
    { key: 'customers',label: '도입 레퍼런스', href: 'customers.html' },
    { key: 'news',     label: '뉴스',         href: 'news.html' },
    { key: 'faq',      label: 'FAQ',          href: 'faq.html' }
  ];

  var caretSVG = '<svg class="caret" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function buildHeader(active) {
    var items = NAV.map(function (n) {
      var isActive = (n.key === active) ? ' active' : '';
      if (n.menu) {
        var dd = n.menu.map(function (m) {
          return '<a href="' + m.href + '"><span class="dd-title">' + m.label + '</span>'
               + '<span class="dd-sub">' + m.sub + '</span></a>';
        }).join('');
        return '<div class="nav-item has-menu' + isActive + '">'
             + '<a class="nav-link" href="' + n.href + '">' + n.label + caretSVG + '</a>'
             + '<div class="dropdown">' + dd + '</div></div>';
      }
      return '<div class="nav-item' + isActive + '"><a class="nav-link" href="' + n.href + '">' + n.label + '</a></div>';
    }).join('');

    return ''
      + '<header class="site-header" id="siteHeader">'
      +   '<div class="header-inner">'
      +     '<a class="brand" href="index.html" aria-label="RE:able 홈">'
      +       '<img class="brand-light" src="assets/logo/w1_pure_light.svg" alt="RE:able">'
      +       '<img class="brand-dark" src="assets/logo/w1_pure_dark.svg" alt="RE:able">'
      +     '</a>'
      +     '<nav class="nav" id="siteNav" aria-label="주 메뉴">' + items
      +       '<a class="header-cta" href="index.html#contact">도입 문의'
      +         '<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
      +       '</a>'
      +     '</nav>'
      +     '<a class="header-cta" href="index.html#contact" style="margin-left:auto" id="ctaDesktop">도입 문의'
      +       '<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
      +     '</a>'
      +     '<button class="nav-toggle" id="navToggle" aria-label="메뉴 열기" aria-expanded="false"><span></span></button>'
      +   '</div>'
      + '</header>';
  }

  function buildFooter() {
    var yr = '2026';
    return ''
      + '<footer class="site-footer">'
      +   '<div class="container">'
      +     '<div class="footer-top">'
      +       '<div class="footer-brand">'
      +         '<img src="assets/logo/w1_pure_dark.svg" alt="RE:able">'
      +         '<p>식기의 순환에서 시작해 지역 자원순환 인프라로. 데이터로 운영하는 자원순환 식기관리 서비스입니다.</p>'
      +       '</div>'
      +       '<div class="footer-col">'
      +         '<h5>솔루션</h5>'
      +         '<a href="service-kids.html">교육기관</a>'
      +         '<a href="service-biz.html">기업·단체</a>'
      +         '<a href="service-eco.html">공공·행사</a>'
      +         '<a href="factory.html">운영 인프라</a>'
      +       '</div>'
      +       '<div class="footer-col">'
      +         '<h5>회사</h5>'
      +         '<a href="about.html">회사소개</a>'
      +         '<a href="customers.html">도입 레퍼런스</a>'
      +         '<a href="news.html">뉴스</a>'
      +         '<a href="faq.html">자주 묻는 질문</a>'
      +       '</div>'
      +       '<div class="footer-col">'
      +         '<h5>문의</h5>'
      +         '<ul class="footer-contact">'
      +           '<li><span class="k">제휴</span><a href="mailto:ceo@re-able.co.kr" style="color:inherit">ceo@re-able.co.kr</a></li>'
      +           '<li><span class="k">전화</span><a href="tel:16685243" style="color:inherit">1668-5243</a></li>'
      +           '<li><span class="k">주소</span><span>경기도 광명시 일직로99번안길 20, 1동 1층</span></li>'
      +           '<li><span class="k">운영</span><span>평일 09:00–18:00</span></li>'
      +         '</ul>'
      +       '</div>'
      +     '</div>'
      +     '<div class="footer-bottom">'
      +       '<div class="legal">'
      +         '<span>주식회사 더좋은 (The Joeun Inc.)</span>'
      +         '<span>대표이사 신동석</span>'
      +         '<span>사업자등록번호 634-87-01123</span>'
      +         '<span>&copy; ' + yr + ' RE:able. All rights reserved.</span>'
      +       '</div>'
      +       '<div class="footer-social">'
      +         '<a href="#" aria-label="블로그"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v16H4z" opacity="0"/><path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 2.2a2.8 2.8 0 110 5.6 2.8 2.8 0 010-5.6z"/></svg></a>'
      +         '<a href="#" aria-label="유튜브"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18 5 12 5 12 5s-6 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 9 2 12 2 12s0 3 .4 4.8c.2.9.9 1.6 1.8 1.8C6 19 12 19 12 19s6 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8C22 15 22 12 22 12s0-3-.4-4.8zM10 15V9l5 3-5 3z"/></svg></a>'
      +         '<a href="#" aria-label="인스타그램"><svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="3.4" stroke="currentColor" stroke-width="1.7"/><circle cx="17" cy="7" r="1" fill="currentColor"/></svg></a>'
      +       '</div>'
      +     '</div>'
      +   '</div>'
      + '</footer>';
  }

  /* ----- 주입 ----- */
  function injectChrome() {
    var page = document.body.getAttribute('data-page') || '';
    var hMount = document.getElementById('site-header');
    var fMount = document.getElementById('site-footer');
    if (hMount) hMount.outerHTML = buildHeader(page);
    if (fMount) fMount.outerHTML = buildFooter();
  }

  /* ----- 인터랙션 ----- */
  function wireInteractions() {
    var header = document.getElementById('siteHeader');
    var toggle = document.getElementById('navToggle');

    // 스크롤 시 헤더 배경 (홈은 다크 히어로 위 투명 → 스크롤 시 솔리드, 하위 페이지는 항상 솔리드)
    var isHome = (document.body.getAttribute('data-page') || '') === 'home';
    function onScroll() {
      if (!header) return;
      if (!isHome || window.scrollY > 20) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // 모바일 메뉴
    if (toggle) {
      toggle.addEventListener('click', function () {
        var open = document.body.classList.toggle('menu-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
      });
    }
    // 메뉴 링크 클릭 시 닫기
    document.querySelectorAll('#siteNav a').forEach(function (a) {
      a.addEventListener('click', function () {
        document.body.classList.remove('menu-open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // 스크롤 리빌
    var reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && reveals.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add('in'); });
    }

    // FAQ 아코디언
    document.querySelectorAll('.faq-q').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.faq-item');
        var ans = item.querySelector('.faq-a');
        var isOpen = item.classList.toggle('open');
        ans.style.maxHeight = isOpen ? (ans.scrollHeight + 'px') : '0px';
      });
    });
    // 초기에 열려 있는(.open) FAQ 항목은 높이를 펼쳐 둔다
    document.querySelectorAll('.faq-item.open .faq-a').forEach(function (ans) {
      ans.style.maxHeight = ans.scrollHeight + 'px';
    });

    // 부드러운 앵커 (헤더 높이 보정)
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (ev) {
        var id = a.getAttribute('href');
        if (id.length < 2) return;
        var t = document.querySelector(id);
        if (t) {
          ev.preventDefault();
          var y = t.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      });
    });
  }

  function init() {
    injectChrome();
    wireInteractions();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
