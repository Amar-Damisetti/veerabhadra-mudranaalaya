// ==========================================
// 1. SHOP CONFIGURATION (Single Shop Name)
// ==========================================
const SHOP_CONFIG = {
  shopName: "VEERABHADRA MUDRANAALAYA",
  whatsappNumber: "918332929932", // Country code + 10-digit number (no '+' or spaces)
  phoneDisplay: "+91 8332929932",
  address: "Majestic street, Kakinada, Andhra Pradesh"
};

// ==========================================
// 2. SAMPLE PORTFOLIO DATA WITH FULL DETAILS
// ==========================================
const DESIGN_SAMPLES = [
  {
    code: "WC-101",
    category: "wedding",
    categoryLabel: "Marriage Card",
    title: "Royal Traditional Hindu Wedding Card",
    shortDesc: "Gold-foil style border with Ganesha motif and custom Telugu/English text.",
    fullDesc: "A classic traditional marriage invitation crafted with intricate border artwork, deity motifs, and multi-insert options for Muhurtham, Reception, and Dinner details.",
    size: "9 x 6 inches (Custom sizes available)",
    material: "300 GSM Metallic / Textured Art Board",
    turnaround: "2 to 3 Working Days",
    priceInfo: "Min. 100 Cards • Custom Quote on WhatsApp",
    includes: [
      "Custom Telugu & English typography layout",
      "Matching envelope design included",
      "Free digital WhatsApp invitation image",
      "2 rounds of proof corrections before printing"
    ],
    icon: "fa-solid fa-envelope-open-text",
    image: ""
  },
  {
    code: "WC-102",
    category: "wedding",
    categoryLabel: "Marriage Card",
    title: "Floral Engagement & Reception Invite",
    shortDesc: "Clean modern layout suitable for both print cards and WhatsApp e-invites.",
    fullDesc: "Elegant floral-themed invitation suitable for engagements, weddings, and housewarming ceremonies. Available as single-leaf luxury cards or high-resolution digital invites.",
    size: "7 x 5 inches / Digital 9:16",
    material: "280 GSM Matte Ivory / Gloss Card",
    turnaround: "1 to 2 Working Days",
    priceInfo: "Print + Digital Combo Available",
    includes: [
      "Couple names & venue QR code map integration",
      "High-resolution PDF & image for WhatsApp sharing",
      "Color theme customization to match event decor"
    ],
    icon: "fa-solid fa-heart",
    image: ""
  },
  {
    code: "BB-201",
    category: "billbook",
    categoryLabel: "Bill Book",
    title: "GST Tax Invoice & Cash Memo Book",
    shortDesc: "A4/A5 duplicate & triplicate bill book layout with custom shop header and GST table.",
    fullDesc: "Professionally structured GST invoice and credit/cash bill books designed for retail stores, wholesalers, hardware shops, and agencies with sequential serial numbering.",
    size: "A4 (8.5 x 11 in) or A5 (5.5 x 8.5 in)",
    material: "60 GSM Maplitho / Carbonless NCR Paper",
    turnaround: "3 to 4 Working Days",
    priceInfo: "Min. 5 Books (100 Sets per Book)",
    includes: [
      "Custom GSTIN, HSN code & tax calculation columns",
      "Red serial numbering & perforation for easy tearing",
      "1+1 (Duplicate) or 1+2 (Triplicate) copy options"
    ],
    icon: "fa-solid fa-file-invoice-dollar",
    image: ""
  },
  {
    code: "BB-202",
    category: "billbook",
    categoryLabel: "Bill Book",
    title: "Medical / Retail Shop Receipt Pad",
    shortDesc: "Compact numbered receipt book design with terms, signature box, and logo.",
    fullDesc: "Easy-to-fill receipt books, delivery challans, and order vouchers with clean spacing, shop logo watermark, and strong binding.",
    size: "1/8 Demy / Pocket Size",
    material: "58 GSM White + Colored Copy Sheets",
    turnaround: "2 to 3 Working Days",
    priceInfo: "Min. 10 Pads • Bulk Discounts Available",
    includes: [
      "Custom logo & watermark placement",
      "Strong cloth-bound top or side binding",
      "Draft preview shared on WhatsApp before print"
    ],
    icon: "fa-solid fa-receipt",
    image: ""
  },
  {
    code: "FL-301",
    category: "flex",
    categoryLabel: "Flex & Banner",
    title: "Grand Shop Opening Flex & LED Board",
    shortDesc: "High-contrast storefront banner layout designed for clear readability from a distance.",
    fullDesc: "Bold, weather-resistant outdoor flex banners, inauguration hoardings, and backlit glow-sign boards designed with crisp high-DPI graphics.",
    size: "Custom Feet (e.g., 10x4 ft, 12x6 ft, 20x10 ft)",
    material: "Star Flex / Normal Flex / Backlit Vinyl",
    turnaround: "Same Day / 24 Hours",
    priceInfo: "Priced per Sq. Ft. • Instant WhatsApp Quote",
    includes: [
      "High-resolution photo & product cutouts",
      "Eyelets / frame-ready margin finishing",
      "Telugu & English bold display fonts"
    ],
    icon: "fa-solid fa-panorama",
    image: ""
  },
  {
    code: "BR-401",
    category: "branding",
    categoryLabel: "Visiting Card & Logo",
    title: "Double-Sided Business Visiting Card",
    shortDesc: "Clean orange & white corporate card with QR code, location icon, and services list.",
    fullDesc: "Standout single or double-sided business cards with matte/gloss lamination and scannable WhatsApp or Google Maps QR codes.",
    size: "3.5 x 2 inches (Standard)",
    material: "350 GSM Art Card with Matte / Gloss Lamination",
    turnaround: "2 Working Days",
    priceInfo: "Min. 500 or 1000 Cards",
    includes: [
      "Front & back custom layout",
      "WhatsApp / Location QR code generation",
      "Print-ready CMYK source file"
    ],
    icon: "fa-solid fa-id-card",
    image: ""
  }
];

let activeSample = null;

// ==========================================
// 3. HELPER: OPEN WHATSAPP WITH MESSAGE
// ==========================================
function openWhatsApp(message) {
  const encodedMsg = encodeURIComponent(message);
  const url = `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodedMsg}`;
  window.open(url, "_blank");
}

// ==========================================
// 4. INITIALIZE PAGE DATA & LINKS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Set Single Shop Name & Contact Info cleanly
  document.getElementById("shopNameNav").textContent = SHOP_CONFIG.shopName;
  document.getElementById("shopNameFooter").textContent = SHOP_CONFIG.shopName;
  document.getElementById("displayWaNumber").textContent = SHOP_CONFIG.phoneDisplay;
  document.getElementById("displayCallNumber").textContent = SHOP_CONFIG.phoneDisplay;
  document.getElementById("displayAddress").textContent = SHOP_CONFIG.address;
  document.getElementById("year").textContent = new Date().getFullYear();

  // Wire all direct WhatsApp buttons
  document.querySelectorAll(".direct-wa-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openWhatsApp(
        `Hello *${SHOP_CONFIG.shopName}*! I visited your website and want to enquire about a design.`
      );
    });
  });

  // Wire all direct Phone Call buttons
  document.querySelectorAll(".direct-call-btn").forEach((btn) => {
    btn.setAttribute("href", `tel:${SHOP_CONFIG.whatsappNumber}`);
  });

  // Wire Service Card "Enquire on WhatsApp" triggers
  document.querySelectorAll(".service-wa-trigger").forEach((btn) => {
    btn.addEventListener("click", () => {
      const serviceName = btn.getAttribute("data-service");
      openWhatsApp(
        `Hello *${SHOP_CONFIG.shopName}*! I am interested in *${serviceName}*. Please share sample designs and pricing details.`
      );
    });
  });

  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Render initial portfolio samples
  renderSamples("all");

  // Filter Tabs Logic
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderSamples(btn.getAttribute("data-filter"));
    });
  });

  // Modal Close Events
  const modal = document.getElementById("sampleModal");
  document.getElementById("closeModalBtn").addEventListener("click", closeSampleDetails);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeSampleDetails();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSampleDetails();
  });

  // Modal WhatsApp Enquiry Button
  document.getElementById("modalWaBtn").addEventListener("click", () => {
    if (!activeSample) return;
    openWhatsApp(
      `Hello *${SHOP_CONFIG.shopName}*! I checked the full details for sample *${activeSample.code} - ${activeSample.title}* (${activeSample.size}, ${activeSample.material}) on your website and would like to enquire.`
    );
  });

  // Quick WhatsApp Form Submission
  document.getElementById("inquiryForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("custName").value.trim();
    const type = document.getElementById("designType").value;
    const details = document.getElementById("designDetails").value.trim();

    const text =
      `Hello *${SHOP_CONFIG.shopName}*!%0A` +
      `I would like to place a design enquiry:%0A%0A` +
      `• *Name:* ${name}%0A` +
      `• *Design Type:* ${type}%0A` +
      `• *Details:* ${details}`;

    window.open(`https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${text}`, "_blank");
  });
});

// ==========================================
// 5. RENDER PORTFOLIO SAMPLES & DETAILS MODAL
// ==========================================
function renderSamples(filter) {
  const grid = document.getElementById("samplesGrid");
  const filtered =
    filter === "all"
      ? DESIGN_SAMPLES
      : DESIGN_SAMPLES.filter((item) => item.category === filter);

  grid.innerHTML = filtered
    .map(
      (item) => `
      <div class="sample-card" onclick="openSampleDetails('${item.code}')">
        <div class="sample-preview">
          <span class="sample-code">${item.code}</span>
          ${
            item.image
              ? `<img src="${item.image}" alt="${item.title}" />`
              : `<i class="${item.icon}"></i><span>Tap to View Full Details</span>`
          }
        </div>
        <div class="sample-body">
          <span class="sample-cat">${item.categoryLabel}</span>
          <h3>${item.title}</h3>
          <p>${item.shortDesc}</p>
          <div class="sample-meta-tag">
            <i class="fa-solid fa-ruler-combined"></i> ${item.size}
          </div>
          <button type="button" class="btn btn-primary btn-full">
            <i class="fa-solid fa-eye"></i> View Full Details
          </button>
        </div>
      </div>
    `
    )
    .join("");
}

function openSampleDetails(code) {
  const item = DESIGN_SAMPLES.find((s) => s.code === code);
  if (!item) return;

  activeSample = item;

  const visualBox = document.getElementById("modalVisual");
  visualBox.innerHTML = item.image
    ? `<img src="${item.image}" alt="${item.title}" />`
    : `<i class="${item.icon}"></i><strong>${item.code}</strong><span style="color:#52525b;font-size:0.9rem;">Sample Preview</span>`;

  document.getElementById("modalCategory").textContent = item.categoryLabel;
  document.getElementById("modalCode").textContent = item.code;
  document.getElementById("modalTitle").textContent = item.title;
  document.getElementById("modalDesc").textContent = item.fullDesc;
  document.getElementById("modalSize").textContent = item.size;
  document.getElementById("modalMaterial").textContent = item.material;
  document.getElementById("modalTime").textContent = item.turnaround;
  document.getElementById("modalPrice").textContent = item.priceInfo;

  document.getElementById("modalIncludesList").innerHTML = item.includes
    .map((point) => `<li>${point}</li>`)
    .join("");

  const modal = document.getElementById("sampleModal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeSampleDetails() {
  const modal = document.getElementById("sampleModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
// ==========================================
// 6. PWA INSTALL BUTTON & AUTO-UPDATE ENGINE
// ==========================================
let deferredInstallPrompt = null;
const installBtn = document.getElementById("installAppBtn");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  if (installBtn) installBtn.style.display = "inline-flex";
});

if (installBtn) {
  installBtn.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    installBtn.style.display = "none";
  });
}

window.addEventListener("appinstalled", () => {
  if (installBtn) installBtn.style.display = "none";
});

// Register Service Worker & Auto-Reload on New Vercel Updates
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const reg = await navigator.serviceWorker.register("/sw.js", {
        updateViaCache: "none"
      });

      // Check for updates every time the app is opened or brought back to foreground
      reg.update();
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") reg.update();
      });
    } catch (err) {
      console.error("SW registration failed:", err);
    }
  });

  // Automatically reload the app once when a new version activates
  let isRefreshing = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (isRefreshing) return;
    isRefreshing = true;
    window.location.reload();
  });
}