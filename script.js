/**
 * Inforag Technology — Official Company Portfolio Logic
 * Pure Vanilla JavaScript | Zero Dependencies | Ultra Smooth
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll state
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Navigation Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');

  const closeMobileMenu = () => {
    if (mainNav && mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
      if (menuToggle) {
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    }
  };

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mainNav.classList.toggle('active');
      menuToggle.classList.toggle('active');
      const isExpanded = mainNav.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking any nav item
    navLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when clicking outside header
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Reset when resizing window to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    });
  }

  // 3. Active Nav Link Highlighting via Scroll Spy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 160;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // 4. Animated Progress Bars on Scroll
  const progressBars = document.querySelectorAll('.progress-fill');
  let animated = false;

  const triggerProgressAnimation = () => {
    progressBars.forEach(bar => {
      const targetVal = bar.getAttribute('data-progress');
      if (targetVal) {
        bar.style.width = `${targetVal}%`;
      }
    });
  };

  const aboutSection = document.getElementById('about');
  if ('IntersectionObserver' in window && aboutSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          triggerProgressAnimation();
          animated = true;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    observer.observe(aboutSection);
  } else {
    triggerProgressAnimation();
  }

  // 5. REAL PORTFOLIO DATASET
  const portfolioData = [
  {
    "title": "Digital Marketing Indore",
    "category": "seo",
    "categoryLabel": "SEO",
    "url": "https://www.digitalmarketingindore.com/",
    "desc": "Comprehensive SEO strategy improving search rankings and organic traffic.",
    "image": "assets/portfolio_images/1.jpeg"
  },
  {
    "title": "Inforag",
    "category": "seo",
    "categoryLabel": "SEO",
    "url": "https://inforag.com/",
    "desc": "Comprehensive SEO strategy improving search rankings and organic traffic.",
    "image": "assets/portfolio_images/2.jpeg"
  },
  {
    "title": "Code of School",
    "category": "seo",
    "categoryLabel": "SEO",
    "url": "https://codeofschool.com/",
    "desc": "Comprehensive SEO strategy improving search rankings and organic traffic.",
    "image": "assets/portfolio_images/3.jpeg"
  },
  {
    "title": "Mobile Junction",
    "category": "seo",
    "categoryLabel": "SEO",
    "url": "https://mobilejunction.ca/",
    "desc": "Comprehensive SEO strategy improving search rankings and organic traffic.",
    "image": "assets/portfolio_images/4.jpeg"
  },
  {
    "title": "Codesikha",
    "category": "seo",
    "categoryLabel": "SEO",
    "url": "https://codesikha.com/",
    "desc": "Comprehensive SEO strategy improving search rankings and organic traffic.",
    "image": "assets/portfolio_images/5.jpeg"
  },
  {
    "title": "Prakhar Art",
    "category": "seo",
    "categoryLabel": "SEO",
    "url": "https://prakharart.com/",
    "desc": "Comprehensive SEO strategy improving search rankings and organic traffic.",
    "image": "assets/portfolio_images/6.jpeg"
  },
  {
    "title": "Infotive Solutions",
    "category": "seo",
    "categoryLabel": "SEO",
    "url": "https://www.infotivesolutions.com/",
    "desc": "Comprehensive SEO strategy improving search rankings and organic traffic.",
    "image": "assets/portfolio_images/7.jpeg",
    "bestWork": true
  },
  {
    "title": "Sayoori Woman",
    "category": "seo",
    "categoryLabel": "SEO",
    "url": "https://sayooriwoman.in/",
    "desc": "Comprehensive SEO strategy improving search rankings and organic traffic.",
    "image": "assets/portfolio_images/8.jpeg"
  },
  {
    "title": "Manthan Stones",
    "category": "seo",
    "categoryLabel": "SEO",
    "url": "https://manthanstones.in/",
    "desc": "Comprehensive SEO strategy improving search rankings and organic traffic.",
    "image": "assets/portfolio_images/9.jpeg"
  },
  {
    "title": "Go With Car",
    "category": "seo",
    "categoryLabel": "SEO",
    "url": "https://www.gowithcar.com/",
    "desc": "Comprehensive SEO strategy improving search rankings and organic traffic.",
    "image": "assets/portfolio_images/10.jpeg"
  },
  {
    "title": "Swastik Marbles",
    "category": "seo",
    "categoryLabel": "SEO",
    "url": "https://swastikmarbles.com/",
    "desc": "Comprehensive SEO strategy improving search rankings and organic traffic.",
    "image": "assets/portfolio_images/11.jpeg"
  },
  {
    "title": "BA Repairs",
    "category": "seo",
    "categoryLabel": "SEO",
    "url": "https://www.ba-repairs.co.uk/",
    "desc": "Comprehensive SEO strategy improving search rankings and organic traffic.",
    "image": "assets/portfolio_images/12.jpeg"
  },
  {
    "title": "Eurynome",
    "category": "seo",
    "categoryLabel": "SEO",
    "url": "https://eurynome.in/",
    "desc": "Comprehensive SEO strategy improving search rankings and organic traffic.",
    "image": "assets/portfolio_images/13.jpeg"
  },
  {
    "title": "Shre Veda",
    "category": "seo",
    "categoryLabel": "SEO",
    "url": "https://shre-veda.com/",
    "desc": "Comprehensive SEO strategy improving search rankings and organic traffic.",
    "image": "assets/portfolio_images/14.jpeg"
  },
  {
    "title": "Medista Hospital",
    "category": "seo",
    "categoryLabel": "SEO",
    "url": "https://www.medistahospital.com/",
    "desc": "Comprehensive SEO strategy improving search rankings and organic traffic.",
    "image": "assets/portfolio_images/15.jpeg"
  },
  {
    "title": "Care Hospitals",
    "category": "seo",
    "categoryLabel": "SEO",
    "url": "https://www.carehospitals.com/",
    "desc": "Comprehensive SEO strategy improving search rankings and organic traffic.",
    "image": "assets/portfolio_images/16.jpeg",
    "bestWork": true
  },
  {
    "title": "Shreeram Builders Indore",
    "category": "seo",
    "categoryLabel": "SEO",
    "url": "https://shreerambuildersindore.com/",
    "desc": "Comprehensive SEO strategy improving search rankings and organic traffic.",
    "image": "assets/portfolio_images/17.jpeg"
  },
  {
    "title": "Christian Eminent",
    "category": "seo",
    "categoryLabel": "SEO",
    "url": "https://christianeminent.com/",
    "desc": "Comprehensive SEO strategy improving search rankings and organic traffic.",
    "image": "assets/portfolio_images/18.jpeg"
  },
  {
    "title": "Apna Sweets",
    "category": "seo",
    "categoryLabel": "SEO",
    "url": "https://apnasweets.com/",
    "desc": "Comprehensive SEO strategy improving search rankings and organic traffic.",
    "image": "assets/portfolio_images/19.jpeg"
  },
  {
    "title": "SMO Campaign 1",
    "category": "smo",
    "categoryLabel": "SMO",
    "url": "#",
    "desc": "Social Media Optimization strategy for community building and engagement.",
    "image": "assets/portfolio_images/smo1.png"
  },
  {
    "title": "SMO Campaign 2",
    "category": "smo",
    "categoryLabel": "SMO",
    "url": "#",
    "desc": "Social Media Optimization strategy for community building and engagement.",
    "image": "assets/portfolio_images/smo2.png"
  },
  {
    "title": "SMO Campaign 3",
    "category": "smo",
    "categoryLabel": "SMO",
    "url": "#",
    "desc": "Social Media Optimization strategy for community building and engagement.",
    "image": "assets/portfolio_images/smo3.png"
  },
  {
    "title": "SMO Campaign 4",
    "category": "smo",
    "categoryLabel": "SMO",
    "url": "#",
    "desc": "Social Media Optimization strategy for community building and engagement.",
    "image": "assets/portfolio_images/smo4.png"
  },
  {
    "title": "SMO Campaign 5",
    "category": "smo",
    "categoryLabel": "SMO",
    "url": "#",
    "desc": "Social Media Optimization strategy for community building and engagement.",
    "image": "assets/portfolio_images/smo5.png",
    "bestWork": true
  },
  {
    "title": "SMO Campaign 6",
    "category": "smo",
    "categoryLabel": "SMO",
    "url": "#",
    "desc": "Social Media Optimization strategy for community building and engagement.",
    "image": "assets/portfolio_images/smo6.png"
  },
  {
    "title": "SMO Campaign 7",
    "category": "smo",
    "categoryLabel": "SMO",
    "url": "#",
    "desc": "Social Media Optimization strategy for community building and engagement.",
    "image": "assets/portfolio_images/smo7.png"
  },
  {
    "title": "SMO Campaign 8",
    "category": "smo",
    "categoryLabel": "SMO",
    "url": "#",
    "desc": "Social Media Optimization strategy for community building and engagement.",
    "image": "assets/portfolio_images/smo8.png"
  },
  {
    "title": "SMO Campaign 9",
    "category": "smo",
    "categoryLabel": "SMO",
    "url": "#",
    "desc": "Social Media Optimization strategy for community building and engagement.",
    "image": "assets/portfolio_images/smo9.png"
  },
  {
    "title": "SMO Campaign 10",
    "category": "smo",
    "categoryLabel": "SMO",
    "url": "#",
    "desc": "Social Media Optimization strategy for community building and engagement.",
    "image": "assets/portfolio_images/smo10.png",
    "bestWork": true
  },
  {
    "title": "SMO Campaign 11",
    "category": "smo",
    "categoryLabel": "SMO",
    "url": "#",
    "desc": "Social Media Optimization strategy for community building and engagement.",
    "image": "assets/portfolio_images/smo11.png"
  },
  {
    "title": "Performance Ad 1",
    "category": "performance",
    "categoryLabel": "Performance Marketing",
    "url": "#",
    "desc": "Data-driven performance marketing and PPC campaigns.",
    "image": "assets/portfolio_images/sm1.jpeg"
  },
  {
    "title": "Performance Ad 2",
    "category": "performance",
    "categoryLabel": "Performance Marketing",
    "url": "#",
    "desc": "Data-driven performance marketing and PPC campaigns.",
    "image": "assets/portfolio_images/sm2.png"
  },
  {
    "title": "Performance Ad 3",
    "category": "performance",
    "categoryLabel": "Performance Marketing",
    "url": "#",
    "desc": "Data-driven performance marketing and PPC campaigns.",
    "image": "assets/portfolio_images/sm3.jpeg"
  },
  {
    "title": "Performance Ad 4",
    "category": "performance",
    "categoryLabel": "Performance Marketing",
    "url": "#",
    "desc": "Data-driven performance marketing and PPC campaigns.",
    "image": "assets/portfolio_images/sm4.jpeg"
  },
  {
    "title": "Performance Ad 5",
    "category": "performance",
    "categoryLabel": "Performance Marketing",
    "url": "#",
    "desc": "Data-driven performance marketing and PPC campaigns.",
    "image": "assets/portfolio_images/sm5.jpeg"
  },
  {
    "title": "Performance Ad 6",
    "category": "performance",
    "categoryLabel": "Performance Marketing",
    "url": "#",
    "desc": "Data-driven performance marketing and PPC campaigns.",
    "image": "assets/portfolio_images/sm6.jpeg"
  },
  {
    "title": "Performance Ad 7",
    "category": "performance",
    "categoryLabel": "Performance Marketing",
    "url": "#",
    "desc": "Data-driven performance marketing and PPC campaigns.",
    "image": "assets/portfolio_images/sm7.png",
    "bestWork": true
  },
  {
    "title": "Performance Ad 8",
    "category": "performance",
    "categoryLabel": "Performance Marketing",
    "url": "#",
    "desc": "Data-driven performance marketing and PPC campaigns.",
    "image": "assets/portfolio_images/sm8.png"
  },
  {
    "title": "Performance Ad 9",
    "category": "performance",
    "categoryLabel": "Performance Marketing",
    "url": "#",
    "desc": "Data-driven performance marketing and PPC campaigns.",
    "image": "assets/portfolio_images/sm9.png"
  },
  {
    "title": "Performance Ad 10",
    "category": "performance",
    "categoryLabel": "Performance Marketing",
    "url": "#",
    "desc": "Data-driven performance marketing and PPC campaigns.",
    "image": "assets/portfolio_images/sm10.jpeg"
  },
  {
    "title": "Performance Ad 11",
    "category": "performance",
    "categoryLabel": "Performance Marketing",
    "url": "#",
    "desc": "Data-driven performance marketing and PPC campaigns.",
    "image": "assets/portfolio_images/sm11.png"
  },
  {
    "title": "Performance Ad 12",
    "category": "performance",
    "categoryLabel": "Performance Marketing",
    "url": "#",
    "desc": "Data-driven performance marketing and PPC campaigns.",
    "image": "assets/portfolio_images/sm12.png"
  },
  {
    "title": "Performance Ad 13",
    "category": "performance",
    "categoryLabel": "Performance Marketing",
    "url": "#",
    "desc": "Data-driven performance marketing and PPC campaigns.",
    "image": "assets/portfolio_images/sm13.png",
    "bestWork": true
  },
  {
    "title": "Performance Ad 14",
    "category": "performance",
    "categoryLabel": "Performance Marketing",
    "url": "#",
    "desc": "Data-driven performance marketing and PPC campaigns.",
    "image": "assets/portfolio_images/sm14.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 1",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_15.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 2",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_16.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 3",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_17.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 4",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_18.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 5",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_19.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 6",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_20.jpeg",
    "bestWork": true
  },
  {
    "title": "Social Media & Graphic Post 7",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_21.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 8",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_22.jpeg",
    "bestWork": true
  },
  {
    "title": "Social Media & Graphic Post 9",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_23.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 10",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_24.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 11",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_25.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 12",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_26.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 13",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_27.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 14",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_28.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 15",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_29.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 16",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_30.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 17",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_31.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 18",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_32.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 19",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_33.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 20",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_34.jpeg",
    "bestWork": true
  },
  {
    "title": "Social Media & Graphic Post 21",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_35.jpeg",
    "bestWork": true
  },
  {
    "title": "Social Media & Graphic Post 22",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_36.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 23",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_37.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 24",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_38.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 25",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_39.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 26",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_40.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 27",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_41.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 28",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_42.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 29",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_43.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 30",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_44.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 31",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_45.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 32",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_46.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 33",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_47.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 34",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_48.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 35",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_49.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 36",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_50.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 37",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_51.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 38",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_52.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 39",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_53.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 40",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_54.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 41",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_55.jpeg"
  },
  {
    "title": "Social Media & Graphic Post 42",
    "category": "posts",
    "categoryLabel": "Posts",
    "url": "#",
    "desc": "Engaging graphic design and social media visual content.",
    "image": "assets/portfolio_images/post_56.jpeg"
  },
  {
    "title": "Banner Design 1",
    "category": "banners",
    "categoryLabel": "Banners",
    "url": "#",
    "desc": "High-converting digital banner designed for ad campaigns.",
    "image": "assets/portfolio_images/banner_57.jpeg"
  },
  {
    "title": "Banner Design 2",
    "category": "banners",
    "categoryLabel": "Banners",
    "url": "#",
    "desc": "High-converting digital banner designed for ad campaigns.",
    "image": "assets/portfolio_images/banner_58.jpeg"
  },
  {
    "title": "Banner Design 3",
    "category": "banners",
    "categoryLabel": "Banners",
    "url": "#",
    "desc": "High-converting digital banner designed for ad campaigns.",
    "image": "assets/portfolio_images/banner_59.jpeg"
  },
  {
    "title": "Banner Design 4",
    "category": "banners",
    "categoryLabel": "Banners",
    "url": "#",
    "desc": "High-converting digital banner designed for ad campaigns.",
    "image": "assets/portfolio_images/banner_60.jpeg"
  },
  {
    "title": "Banner Design 5",
    "category": "banners",
    "categoryLabel": "Banners",
    "url": "#",
    "desc": "High-converting digital banner designed for ad campaigns.",
    "image": "assets/portfolio_images/banner_61.jpeg"
  },
  {
    "title": "Banner Design 6",
    "category": "banners",
    "categoryLabel": "Banners",
    "url": "#",
    "desc": "High-converting digital banner designed for ad campaigns.",
    "image": "assets/portfolio_images/banner_62.jpeg"
  },
  {
    "title": "Banner Design 7",
    "category": "banners",
    "categoryLabel": "Banners",
    "url": "#",
    "desc": "High-converting digital banner designed for ad campaigns.",
    "image": "assets/portfolio_images/banner_63.jpeg",
    "bestWork": true
  },
  {
    "title": "Banner Design 8",
    "category": "banners",
    "categoryLabel": "Banners",
    "url": "#",
    "desc": "High-converting digital banner designed for ad campaigns.",
    "image": "assets/portfolio_images/banner_64.jpeg"
  },
  {
    "title": "Banner Design 9",
    "category": "banners",
    "categoryLabel": "Banners",
    "url": "#",
    "desc": "High-converting digital banner designed for ad campaigns.",
    "image": "assets/portfolio_images/banner_65.jpeg"
  },
  {
    "title": "Banner Design 10",
    "category": "banners",
    "categoryLabel": "Banners",
    "url": "#",
    "desc": "High-converting digital banner designed for ad campaigns.",
    "image": "assets/portfolio_images/banner_66.jpeg"
  },
  {
    "title": "Banner Design 11",
    "category": "banners",
    "categoryLabel": "Banners",
    "url": "#",
    "desc": "High-converting digital banner designed for ad campaigns.",
    "image": "assets/portfolio_images/banner_67.jpeg"
  },
  {
    "title": "Banner Design 12",
    "category": "banners",
    "categoryLabel": "Banners",
    "url": "#",
    "desc": "High-converting digital banner designed for ad campaigns.",
    "image": "assets/portfolio_images/banner_68.jpeg",
    "bestWork": true
  },
  {
    "title": "Banner Design 13",
    "category": "banners",
    "categoryLabel": "Banners",
    "url": "#",
    "desc": "High-converting digital banner designed for ad campaigns.",
    "image": "assets/portfolio_images/banner_69.jpeg"
  },
  {
    "title": "Banner Design 14",
    "category": "banners",
    "categoryLabel": "Banners",
    "url": "#",
    "desc": "High-converting digital banner designed for ad campaigns.",
    "image": "assets/portfolio_images/banner_70.jpeg"
  }
];

  // 6. RENDER PORTFOLIO CARDS DIRECTLY
  const portfolioGrid = document.getElementById('portfolioGrid');
  const projectCountSpan = document.getElementById('projectCount');

  // BEST WORK SEQUENCE (Custom Order)
  const bestWorkSequence = [
    'Performance Ad 7',
    'Performance Ad 13',
    'SMO Campaign 5',
    'SMO Campaign 10',
    'Infotive Solutions',
    'Care Hospitals',
    'Social Media & Graphic Post 8',
    'Social Media & Graphic Post 20',
    'Social Media & Graphic Post 21',
    'Social Media & Graphic Post 6',
    'Banner Design 7',
    'Banner Design 12'
  ];

  const renderPortfolio = (filter = 'bestwork') => {
    if (!portfolioGrid) return;

    let filtered = [];
    if (filter === 'bestwork') {
      filtered = bestWorkSequence.map(title => portfolioData.find(item => item.title === title)).filter(Boolean);
    } else {
      filtered = portfolioData.filter(item => item.category === filter);
    }

    if (projectCountSpan) {
      projectCountSpan.textContent = filtered.length;
    }

    portfolioGrid.innerHTML = filtered.map(item => `
      <a href="${item.url}" target="${item.url === '#' ? '_self' : '_blank'}" rel="noopener noreferrer" class="portfolio-card" data-category="${item.category}" title="Visit ${item.title}">
        <div class="card-thumb">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          <span class="card-badge-floating">${item.categoryLabel}</span>
          <div class="card-visit-overlay">
            <span class="overlay-text">${item.url === '#' ? 'View Image' : 'Visit Live Website'}</span>
            <div class="overlay-btn-icon">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
        </div>
        <div class="card-details">
          <span class="card-cat">${item.categoryLabel}</span>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-summary">${item.desc}</p>
          <div class="card-link-cta">
            <span>Explore</span>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </a>
    `).join('');
  };

  // Initial render
  renderPortfolio('bestwork');

  // 7. FILTER BUTTONS HANDLING
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');
      renderPortfolio(filterValue);
    });
  });

  // 8. Auto-update current year in footer
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 9. Interactive Contact Modal Handling
  const contactModal = document.getElementById('contactModal');
  const contactModalClose = document.getElementById('contactModalClose');
  const contactModalBackdrop = document.getElementById('contactModalBackdrop');
  const contactTriggers = document.querySelectorAll('.contact-trigger-btn');

  const openContactModal = (e) => {
    if (e) e.preventDefault();
    if (contactModal) {
      contactModal.classList.add('active');
      contactModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      // Close mobile navigation menu if open
      if (typeof closeMobileMenu === 'function') {
        closeMobileMenu();
      }
    }
  };

  const closeContactModal = () => {
    if (contactModal) {
      contactModal.classList.remove('active');
      contactModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  contactTriggers.forEach(btn => {
    btn.addEventListener('click', openContactModal);
  });

  if (contactModalClose) {
    contactModalClose.addEventListener('click', closeContactModal);
  }

  if (contactModalBackdrop) {
    contactModalBackdrop.addEventListener('click', closeContactModal);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactModal && contactModal.classList.contains('active')) {
      closeContactModal();
    }
  });
});
