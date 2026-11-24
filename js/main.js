/**
 * DEEP SEA TRADERS — B2B Wholesale Application Script
 * 
 * Operating Location: Hyderabad, Telangana, India ONLY.
 * 
 * Features:
 * 1. Sticky header elevation & scroll-spy
 * 2. Accessible mobile drawer navigation
 * 3. B2B Hero Banner Slider (Autoplay, dots, prev/next, pause on hover)
 * 4. Fish & Prawns category filtering & real-time search
 * 5. Category shortcut cards & footer links
 * 6. B2B Wholesale WhatsApp Enquiry & Rate Card Generator
 * 7. B2B Bulk Quote / Rate Sheet Form Handler
 * 8. Accessible WhatsApp fallback & preview modal with copy to clipboard
 */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.DEEP_SEA_CONFIG || {
    businessName: "Deep Sea Traders",
    contactNumber: "+91 7989705005",
    whatsappNumber: "917989705005",
    phonePlaceholder: "+91 7989705005",
    googleMapsLink: "https://maps.app.goo.gl/8JA7MSrUsRoh5VSJ9",
    emailPlaceholder: "enquiry@deepseatraders.in",
    serviceCity: "Hyderabad",
    products: [],
    categories: []
  };

  // -------------------------------------------------------------
  // 1. Dynamic Year Update
  // -------------------------------------------------------------
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // -------------------------------------------------------------
  // 2. Sticky Header Elevation on Scroll
  // -------------------------------------------------------------
  const siteHeader = document.querySelector(".site-header");
  if (siteHeader) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        siteHeader.classList.add("is-scrolled");
      } else {
        siteHeader.classList.remove("is-scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  // -------------------------------------------------------------
  // 3. Accessible Mobile Navigation Drawer
  // -------------------------------------------------------------
  const menuToggle = document.getElementById("menu-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const drawerBackdrop = document.getElementById("drawer-backdrop");
  const drawerClose = document.getElementById("drawer-close");
  const body = document.body;

  const openDrawer = () => {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add("is-open");
    drawerBackdrop?.classList.add("is-open");
    menuToggle?.setAttribute("aria-expanded", "true");
    mobileDrawer.setAttribute("aria-hidden", "false");
    drawerBackdrop?.setAttribute("aria-hidden", "false");
    body.classList.add("menu-open");

    const firstFocusable = mobileDrawer.querySelector("input, a, button");
    if (firstFocusable) firstFocusable.focus();
  };

  const closeDrawer = () => {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove("is-open");
    drawerBackdrop?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    mobileDrawer.setAttribute("aria-hidden", "true");
    drawerBackdrop?.setAttribute("aria-hidden", "true");
    body.classList.remove("menu-open");
  };

  menuToggle?.addEventListener("click", () => {
    const isOpen = mobileDrawer?.classList.contains("is-open");
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  drawerClose?.addEventListener("click", closeDrawer);
  drawerBackdrop?.addEventListener("click", closeDrawer);

  mobileDrawer?.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && mobileDrawer?.classList.contains("is-open")) {
      closeDrawer();
      menuToggle?.focus();
    }
  });

  // -------------------------------------------------------------
  // 4. B2B Hero Banner Showcase Slider
  // -------------------------------------------------------------
  const heroSlider = document.getElementById("b2b-hero-slider");
  if (heroSlider) {
    const slides = heroSlider.querySelectorAll(".b2b-slide");
    const dots = heroSlider.querySelectorAll(".b2b-slider-dot");
    const prevBtn = document.getElementById("b2b-slide-prev");
    const nextBtn = document.getElementById("b2b-slide-next");
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoplayTimer = null;

    const showSlide = (index) => {
      if (index < 0) {
        currentSlide = totalSlides - 1;
      } else if (index >= totalSlides) {
        currentSlide = 0;
      } else {
        currentSlide = index;
      }

      slides.forEach((slide, idx) => {
        if (idx === currentSlide) {
          slide.classList.add("is-active");
        } else {
          slide.classList.remove("is-active");
        }
      });

      dots.forEach((dot, idx) => {
        if (idx === currentSlide) {
          dot.classList.add("is-active");
          dot.setAttribute("aria-selected", "true");
        } else {
          dot.classList.remove("is-active");
          dot.setAttribute("aria-selected", "false");
        }
      });
    };

    const nextSlide = () => showSlide(currentSlide + 1);
    const prevSlide = () => showSlide(currentSlide - 1);

    const startAutoplay = () => {
      stopAutoplay();
      autoplayTimer = setInterval(nextSlide, 5000);
    };

    const stopAutoplay = () => {
      if (autoplayTimer) clearInterval(autoplayTimer);
    };

    nextBtn?.addEventListener("click", () => {
      nextSlide();
      startAutoplay();
    });

    prevBtn?.addEventListener("click", () => {
      prevSlide();
      startAutoplay();
    });

    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        showSlide(idx);
        startAutoplay();
      });
    });

    heroSlider.addEventListener("mouseenter", stopAutoplay);
    heroSlider.addEventListener("mouseleave", startAutoplay);

    // Initial start
    startAutoplay();
  }

  // -------------------------------------------------------------
  // 5. Active Nav Scroll-Spy & Smooth Navigation
  // -------------------------------------------------------------
  const navLinks = document.querySelectorAll(".desktop-nav .nav-link");
  const sections = Array.from(document.querySelectorAll("main section[id]"));

  const updateActiveNavLink = () => {
    const scrollPosition = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          const href = link.getAttribute("href") || "";
          if (href === `#${sectionId}` || href === `index.html#${sectionId}`) {
            link.classList.add("active");
          } else if (href.startsWith("#") || href.startsWith("index.html#")) {
            link.classList.remove("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", updateActiveNavLink, { passive: true });

  // -------------------------------------------------------------
  // 6. Fish & Prawns Wholesale Catalog Filtering & Live Search
  // -------------------------------------------------------------
  const productsGrid = document.getElementById("products-grid");
  const productCards = Array.from(document.querySelectorAll(".product-card"));
  const filterPills = document.querySelectorAll(".filter-pill");
  const catalogSearchInput = document.getElementById("catalog-search-input");
  const catalogSearchClear = document.getElementById("catalog-search-clear");
  const productsCountEl = document.getElementById("products-count");
  const emptyState = document.getElementById("empty-state");
  const emptyResetBtn = document.getElementById("empty-reset-btn");
  const filterFeedback = document.getElementById("filter-feedback");
  const filterFeedbackText = document.getElementById("filter-feedback-text");
  const filterResetBtn = document.getElementById("filter-reset-btn");

  let currentCategory = "all";
  let currentSearchQuery = "";

  const applyFilters = () => {
    let visibleCount = 0;
    const query = currentSearchQuery.trim().toLowerCase();

    productCards.forEach(card => {
      const cardCategory = card.getAttribute("data-category") || "";
      const cardSearchData = (card.getAttribute("data-name") || "").toLowerCase();
      const cardTitle = (card.querySelector(".product-card__title")?.textContent || "").toLowerCase();
      const cardDesc = (card.querySelector(".product-card__desc")?.textContent || "").toLowerCase();

      const matchesCategory = currentCategory === "all" || cardCategory === currentCategory;
      const matchesSearch = !query || 
                            cardSearchData.includes(query) || 
                            cardTitle.includes(query) || 
                            cardDesc.includes(query);

      if (matchesCategory && matchesSearch) {
        card.style.display = "";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (productsCountEl) {
      productsCountEl.textContent = visibleCount;
    }

    if (emptyState) {
      emptyState.hidden = visibleCount > 0;
    }
    if (productsGrid) {
      productsGrid.style.display = visibleCount > 0 ? "" : "none";
    }

    if (filterFeedback && filterFeedbackText) {
      if (currentCategory !== "all" || query) {
        filterFeedback.hidden = false;
        let msg = `Showing ${visibleCount} wholesale item${visibleCount === 1 ? "" : "s"}`;
        if (currentCategory !== "all") {
          const pill = document.querySelector(`.filter-pill[data-filter="${currentCategory}"]`);
          msg += ` in "${pill ? pill.textContent.trim() : currentCategory}"`;
        }
        if (query) {
          msg += ` matching "${currentSearchQuery}"`;
        }
        filterFeedbackText.textContent = msg;
      } else {
        filterFeedback.hidden = true;
      }
    }
  };

  const setActiveCategory = (categoryId) => {
    currentCategory = categoryId;
    filterPills.forEach(pill => {
      const pillFilter = pill.getAttribute("data-filter");
      if (pillFilter === categoryId) {
        pill.classList.add("active");
        pill.setAttribute("aria-selected", "true");
      } else {
        pill.classList.remove("active");
        pill.setAttribute("aria-selected", "false");
      }
    });
    applyFilters();
  };

  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      const filter = pill.getAttribute("data-filter") || "all";
      setActiveCategory(filter);
    });
  });

  const handleSearchInput = (value) => {
    currentSearchQuery = value;
    if (catalogSearchInput && catalogSearchInput.value !== value) {
      catalogSearchInput.value = value;
    }
    if (catalogSearchClear) catalogSearchClear.hidden = !value;
    applyFilters();
  };

  catalogSearchInput?.addEventListener("input", e => handleSearchInput(e.target.value));

  catalogSearchClear?.addEventListener("click", () => {
    handleSearchInput("");
    catalogSearchInput?.focus();
  });

  const resetFilters = () => {
    handleSearchInput("");
    setActiveCategory("all");
  };

  emptyResetBtn?.addEventListener("click", resetFilters);
  filterResetBtn?.addEventListener("click", resetFilters);

  // Category card clicks
  document.querySelectorAll(".category-card[data-category]").forEach(card => {
    const handleCategoryClick = () => {
      const targetCategory = card.getAttribute("data-category");
      if (targetCategory) {
        setActiveCategory(targetCategory);
        const productsSection = document.getElementById("products");
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    card.addEventListener("click", handleCategoryClick);
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleCategoryClick();
      }
    });
  });

  // Footer & section header category links
  document.querySelectorAll("[data-filter-trigger]").forEach(link => {
    link.addEventListener("click", e => {
      const targetCategory = link.getAttribute("data-filter-trigger");
      if (targetCategory) {
        setActiveCategory(targetCategory);
        const productsSection = document.getElementById("products");
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Initial Hash check
  const initialHash = window.location.hash.replace("#", "");
  if (["sea-fish", "freshwater-fish", "prawns"].includes(initialHash)) {
    setActiveCategory(initialHash);
  }

  // -------------------------------------------------------------
  // 7. WhatsApp Messaging & Wholesale Enquiry Engine
  // -------------------------------------------------------------
  const modal = document.getElementById("whatsapp-modal");
  const modalClose = document.getElementById("modal-close");
  const modalMsgText = document.getElementById("modal-msg-text");
  const modalOpenLink = document.getElementById("modal-open-link");
  const modalCopyBtn = document.getElementById("modal-copy-btn");
  const modalConfigHint = document.getElementById("modal-config-hint");

  const openWhatsAppModal = (formattedMessage) => {
    if (!modal || !modalMsgText) return;
    modalMsgText.value = formattedMessage;

    const rawNumber = config.whatsappNumber ? config.whatsappNumber.replace(/[^0-9]/g, "") : "917989705005";
    const isPlaceholder = !rawNumber || rawNumber.includes("X") || rawNumber.length < 8;

    if (modalConfigHint) {
      modalConfigHint.hidden = !isPlaceholder;
    }

    if (modalOpenLink) {
      const targetNumber = isPlaceholder ? "917989705005" : rawNumber;
      modalOpenLink.href = `https://wa.me/${targetNumber}?text=${encodeURIComponent(formattedMessage)}`;
    }

    modal.hidden = false;
    modal.classList.add("is-active");
    modalClose?.focus();
  };

  const closeWhatsAppModal = () => {
    if (!modal) return;
    modal.classList.remove("is-active");
    setTimeout(() => {
      modal.hidden = true;
    }, 200);
  };

  modalClose?.addEventListener("click", closeWhatsAppModal);
  modal?.addEventListener("click", e => {
    if (e.target === modal) closeWhatsAppModal();
  });

  modalCopyBtn?.addEventListener("click", () => {
    if (!modalMsgText) return;
    navigator.clipboard.writeText(modalMsgText.value).then(() => {
      const originalText = modalCopyBtn.innerHTML;
      modalCopyBtn.innerHTML = `<span>✓ Message Copied</span>`;
      setTimeout(() => {
        modalCopyBtn.innerHTML = originalText;
      }, 2000);
    }).catch(() => {
      modalMsgText.select();
      document.execCommand("copy");
    });
  });

  const dispatchWhatsAppEnquiry = (messageText) => {
    const rawNumber = config.whatsappNumber ? config.whatsappNumber.replace(/[^0-9]/g, "") : "917989705005";
    const waUrl = `https://wa.me/${rawNumber}?text=${encodeURIComponent(messageText)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  // Button triggers with [data-whatsapp]
  document.querySelectorAll("[data-whatsapp]").forEach(btn => {
    btn.addEventListener("click", () => {
      const customMessage = btn.getAttribute("data-message") || 
        "Hello Deep Sea Traders, I am a business owner inquiring about wholesale fish and prawns supply in Hyderabad.";
      dispatchWhatsAppEnquiry(customMessage);
    });
  });

  // Product card wholesale enquiry triggers
  document.querySelectorAll("[data-product-enquiry]").forEach(btn => {
    btn.addEventListener("click", () => {
      const productName = btn.getAttribute("data-product-name") || "Wholesale Seafood Item";
      const productCat = btn.getAttribute("data-product-category") || "Wholesale Catch";
      const productMessage = `Hello Deep Sea Traders (Hyderabad), I am an owner of a local business interested in wholesale supply for:\n\n*Product:* ${productName}\n*Category:* ${productCat}\n\nPlease share today's wholesale rate sheet, current batch size counts, and morning delivery schedule to my shop/kitchen in Hyderabad.`;
      dispatchWhatsAppEnquiry(productMessage);
    });
  });

  // -------------------------------------------------------------
  // 8. B2B Wholesale Bulk Quote Form Submission
  // -------------------------------------------------------------
  const b2bForm = document.getElementById("b2b-enquiry-form");
  if (b2bForm) {
    b2bForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const businessName = document.getElementById("b2b-business-name")?.value.trim() || "";
      const businessType = document.getElementById("b2b-business-type")?.value || "";
      const location = document.getElementById("b2b-location")?.value.trim() || "";
      const volume = document.getElementById("b2b-estimated-volume")?.value || "";
      const products = document.getElementById("b2b-products-interest")?.value.trim() || "";

      if (!businessName || !location || !products) {
        alert("Please complete the required business details to request wholesale rates.");
        return;
      }

      const structuredB2BMessage = 
`*B2B WHOLESALE RATE SHEET REQUEST*
----------------------------------------
*Business Name:* ${businessName}
*Business Type:* ${businessType}
*Shop Location:* ${location}, Hyderabad
*Estimated Volume:* ${volume}
*Items Required:* ${products}
----------------------------------------
Hello Deep Sea Traders, please provide today's wholesale commercial rates and daily morning delivery slots for our business.`;

      dispatchWhatsAppEnquiry(structuredB2BMessage);
    });
  }

  // -------------------------------------------------------------
  // 9. Standard Contact Form Validation (contact.html)
  // -------------------------------------------------------------
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contact-name")?.value.trim() || "";
      const phone = document.getElementById("contact-phone")?.value.trim() || "";
      const business = document.getElementById("contact-business")?.value.trim() || "Local Business";
      const message = document.getElementById("contact-message")?.value.trim() || "";

      const formatted = 
`*WHOLESALE ENQUIRY — DEEP SEA TRADERS*
*Name / Business:* ${name} (${business})
*Phone:* ${phone}
*Enquiry Details:* ${message}
*City:* Hyderabad, Telangana`;

      dispatchWhatsAppEnquiry(formatted);
    });
  }
});
