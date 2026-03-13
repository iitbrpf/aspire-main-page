// script.js - Cleaned and optimized JavaScript for ASPIRE main page

// Tailwind config is kept inline in HTML

// About ASPIRE Slider
const aspireData = [
  {
    title: "Applied Science Park for Innovation Research & Entrepreneurship (ASPIRE)",
    image: "https://iitbresearchpark.com/wp-content/uploads/2024/02/CAP_6837-1536x1023.jpg",
    text: [
      "ASPIRE is where the seeds of innovation are sown and cultivated. With a mission to connect research with real-world applications, ASPIRE accelerates innovation and transforms ideas into tangible impact.",
      "The platform provides an ecosystem where academic brilliance converges with industry expertise, bridging the gap between research and industry."
    ]
  },
  {
    title: "Formation of Aspire",
    image: "https://iitbresearchpark.com/wp-content/uploads/2025/06/IMG_0067-scaled.jpg",
    text: [
      "In 2016, the Ministry of Education entrusted IIT Bombay with establishing the Research Park within the campus in Powai, Mumbai.",
      "This led to the creation of ASPIRE – the IIT Bombay Research Park Foundation – a non-profit organization dedicated to catalysing innovation."
    ]
  },
  {
    title: "What We Do",
    image: "https://iitbresearchpark.com/wp-content/uploads/2024/02/CAP_6998-1536x1023.jpg",
    text: [
      "ASPIRE cultivates R&D partnerships and builds a thriving innovation hub that advances technologies with meaningful societal impact.",
      "Students gain invaluable exposure to corporate research while industries collaborate with academic experts."
    ]
  },
  {
    title: "Indian Institute of Technology Bombay",
    image: "https://iitbresearchpark.com/wp-content/uploads/2024/02/IIT-Bombay_Imagee-1536x783.webp",
    text: [
      "ASPIRE proudly calls IIT Bombay its home, a globally recognized institution for engineering education and research.",
      "The ecosystem allows industries to tap into exceptional faculty, bright students, and cutting-edge research."
    ]
  }
];

let currentIndex = 0;
const titleElement = document.getElementById("aspireTitle");
const textElement = document.getElementById("aspireText");
const imageElement = document.getElementById("aspireImage");
const wrapperElement = document.getElementById("contentWrapper");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const sectionElement = document.querySelector('[data-purpose="about-aspire"]');

function renderContent(index) {
  wrapperElement.style.opacity = "0";
  wrapperElement.style.transform = "translateY(20px)";

  setTimeout(() => {
    titleElement.innerText = aspireData[index].title;
    imageElement.src = aspireData[index].image;
    textElement.innerHTML = aspireData[index].text.map(p => `<p>${p}</p>`).join("");
    wrapperElement.style.opacity = "1";
    wrapperElement.style.transform = "translateY(0)";
  }, 300);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % aspireData.length;
  renderContent(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + aspireData.length) % aspireData.length;
  renderContent(currentIndex);
}

if (prevBtn && nextBtn) {
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
}

let sliderInterval = setInterval(nextSlide, 6000);

if (sectionElement) {
  sectionElement.addEventListener("mouseenter", () => clearInterval(sliderInterval));
  sectionElement.addEventListener("mouseleave", () => {
    sliderInterval = setInterval(nextSlide, 6000);
  });
}

renderContent(currentIndex);

// Swiper for Connect Collocate
if (typeof Swiper !== 'undefined') {
  new Swiper(".featureSlider", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: false,
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
}

// Stats Cycling
const stats = [
  [
    { number: "500,000+", label: "Sq. Ft. Research Park Area" },
    { number: "60+", label: "WORKSPACES" }
  ],
  [
    { number: "50+", label: "ASPIRE member Companies" },
    { number: "9+", label: "Residential Units" }
  ],
  [
    { number: "Co-located", label: "With IIT Bombay" },
    { number: "15+", label: "Access to IITB Academic Units" }
  ],
  [
    { number: "14000+", label: "IITBS's Student Pool" },
    { number: "750+", label: "IITB Faculty Members" }
  ],
  [
    { number: "-", label: "Facilities Industry-Academia Partnerships" },
    { number: "-", label: "Enabling Joint Research Technology Pilots and knowledge exchange" }
  ],
  [
    { number: "-", label: "State of Art Infrastructure." },
    { number: "-", label: "Tailored Workspasce,meeting Rooms,and ready to use amenities." }
  ]
];

const statCards = document.querySelectorAll(".stat");
statCards.forEach((card, i) => {
  let statIndex = 0;
  const numberElement = card.querySelector(".stat-number");
  const labelElement = card.querySelector(".stat-label");

  function updateStat() {
    if (stats[i] && stats[i][statIndex]) {
      numberElement.innerText = stats[i][statIndex].number;
      labelElement.innerText = stats[i][statIndex].label;
      statIndex = (statIndex + 1) % stats[i].length;
    }
  }

  updateStat();
  setInterval(updateStat, 4000);
  card.addEventListener("mouseenter", updateStat);
});

// Team Members
const teamMembers = [
  {
    name: "Prof. Shireesh Kedare",
    role: "Director, IIT Bombay",
    department: ["Board of Director"],
    image: "https://iitbresearchpark.com/wp-content/uploads/2025/11/IITB_director-e1725965730815_900x900.jpg",
    email: "",
    bio: "Prof. Shireesh Kedare "
  },
  {
    name: "Prof. Ravindra Gudi​",
    role: "Deputy Director (Finance & External Affairs), IIT Bombay​",
    department: ["Board of Director"],
    image: "https://iitbresearchpark.com/wp-content/uploads/2026/01/Ravi_Gudi_900.jpeg",
    bio: "Oversees treasury operations."
  },
  {
    name: "Prof. Milind Atrey​​",
    role: "Deputy Director (Academics, Research and Translation), IIT Bombay​",
    department: ["Board of Director"],
    image: "https://iitbresearchpark.com/wp-content/uploads/2025/11/Prof.Milind-Atrey-Dean-RD_900x900.png",
    email: "elena@aspire.com",
    bio: "Leads infrastructure planning and development."
  },
  {
    name: "Prof. Sachin Patwardhan​",
    role: "Dean (Research & Development), IIT Bombay​",
    department: ["Board of Director"],
    image: "https://iitbresearchpark.com/wp-content/uploads/2025/11/SachinP_900x900.png",
    email: "david@aspire.com",
    bio: "Technology strategist focusing on innovation."
  },
  {
    name: "Prof. Devang Khakhar",
    role: "Professor, Department of Chemical Engineering",
    department: ["Board of Director"],
    image: "https://iitbresearchpark.com/wp-content/uploads/2025/11/Prof.-Devang-Khakhar-1_900X900.png",
    bio: "Driving leadership and research collaboration."
  },
  {
    name: "Dr. Nitin Kareer",
    role: "Additional Chief Secretary, Revenue & Forest Department, Government of Maharashtra",
    department: ["Board of Director"],
    image: "https://iitbresearchpark.com/wp-content/uploads/2025/11/Nitin-Kareer-900.png",
    email: "anna@aspire.com",
    bio: "Engineering infrastructure systems."
  },
  {
    name: "Prof. Vikram Vishal",
    role: "Professor-in-charge",
    department: ["Board of Director", "Leadership"],
    image: "https://iitbresearchpark.com/wp-content/uploads/2025/07/CAP_7019.jpg",
    email: "anna@aspire.com",
    bio: "Professor of Department of Earth Sciences, IIT Bombay.Adjunct Senior Lecturer Department of Civil Engineering, Monash University, Australia Associate Faculty Interdisciplinary Programme in Climate Studies, IIT Bombay"
  },
  {
    name: "Mr. Sharad Sanghi",
    role: "Chief Executive Officer, Neysa​",
    department: ["Board of Director"],
    image: "https://iitbresearchpark.com/wp-content/uploads/2025/11/IMG_Mr_Sharad_Sanghi__900.png",
    email: "anna@aspire.com",
    bio: "Engineering infrastructure systems."
  },
  {
    name: "Ms. Rekha Koita​",
    role: "Co-Founder, Koita Foundation",
    department: ["Board of Director"],
    image: "https://iitbresearchpark.com/wp-content/uploads/2025/11/Rekha-koita-900.png",
    email: "anna@aspire.com",
    bio: "Engineering infrastructure systems."
  },
  {
    name: "Shri. Aseemkumar Gupta",
    role: "Additional Chief Secretary, Urban Development Department, Government of Maharashtra",
    department: ["Board of Director"],
    image: "https://iitbresearchpark.com/wp-content/uploads/2025/11/Dr-Aseem-Gupta_900.png",
    email: "anna@aspire.com",
    bio: "Engineering infrastructure systems."
  },
  {
    name: "Dr. Rajappa Tadepalli",
    role: "Chief Executive Officer, ASPIRE",
    department: ["Leadership"],
    image: "https://iitbresearchpark.com/wp-content/uploads/2025/09/CEO_Headshot_Edited_2.png",
    email: "anna@aspire.com",
    bio: "Engineering infrastructure systems."
  },
  {
    name: "Ms. Faiza Pirani",
    role: "Associate (Legal)",
    department: ["Legal"],
    image: "https://iitbresearchpark.com/wp-content/uploads/2025/07/CAP_6977.jpg",
    email: "anna@aspire.com",
    bio: "Engineering infrastructure systems."
  },
  {
    name: "Ms. Deepabali Dasgupta",
    role: "Assistant Manager (Marketing & Communications)",
    department: ["Marketing & Communications"],
    image: "https://iitbresearchpark.com/wp-content/uploads/2025/07/CAP_6968-1.jpg",
    email: "anna@aspire.com",
    bio: "Engineering infrastructure systems."
  },
  {
    name: "Ms. Urvi Khadaria",
    role: "Associate (Marketing & Communications)",
    department: ["Marketing & Communications"],
    image: "https://iitbresearchpark.com/wp-content/uploads/2026/01/Urvi_headshot_updated.png",
    email: "anna@aspire.com",
    bio: "Engineering infrastructure systems."
  },
  {
    name: "Mr. Mayank Pandey",
    role: "Web Developer (Marketing & Communications)",
    department: ["Marketing & Communications"],
    image: "https://iitbresearchpark.com/wp-content/uploads/2026/03/Mayank_Headshot-1.webp",
    email: "anna@aspire.com",
    bio: "Engineering infrastructure systems."
  }
];

let filteredMembers = [...teamMembers];
const gridElement = document.getElementById("teamGrid");
const teamTitleElement = document.getElementById("teamTitle");
const selectedFilterElement = document.getElementById("selectedFilter");
const modalElement = document.getElementById("memberModal");
const modalContentElement = document.getElementById("modalContent");

function renderTeam() {
  gridElement.innerHTML = "";
  filteredMembers.forEach((member, index) => {
    const emailLink = member.email ? `<a href="mailto:${member.email}" class="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100"><span class="material-symbols-outlined text-sm">mail</span></a>` : '';
    const infoButton = member.bio ? `<button onclick="openModal(${index})" class="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100"><span class="material-symbols-outlined text-sm">info</span></button>` : '';
    gridElement.innerHTML += `
      <div class="teamCard flex flex-col gap-4 group">
        <div class="overflow-hidden rounded-2xl aspect-[3/4] bg-gray-100 cursor-pointer" onclick="openModal(${index})">
          <img src="${member.image}?auto=format&fit=crop&w=400&q=70" loading="lazy" class="w-full h-full object-cover transition duration-500 group-hover:scale-105">
        </div>
        <div>
          <h3 class="text-lg font-bold">${member.name}</h3>
          <p class="text-pink-500 text-sm font-medium">${member.role}</p>
        </div>
        <div class="flex gap-3 mt-1">
          ${emailLink}
          ${infoButton}
        </div>
      </div>
    `;
  });
}

renderTeam();

const scrollAmount = 300;
const teamNextBtn = document.getElementById("teamNextBtn");
const teamPrevBtn = document.getElementById("teamPrevBtn");

if (teamNextBtn) {
  teamNextBtn.onclick = () => {
    gridElement.scrollLeft += scrollAmount;
  };
}

if (teamPrevBtn) {
  teamPrevBtn.onclick = () => {
    gridElement.scrollLeft -= scrollAmount;
  };
}

let isDown = false;
let startX;
let scrollLeft;

gridElement.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - gridElement.offsetLeft;
  scrollLeft = gridElement.scrollLeft;
});

gridElement.addEventListener("mouseleave", () => isDown = false);
gridElement.addEventListener("mouseup", () => isDown = false);

gridElement.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - gridElement.offsetLeft;
  const walk = (x - startX) * 2;
  gridElement.scrollLeft = scrollLeft - walk;
});

document.querySelectorAll(".filterBtn").forEach(btn => {
  btn.onclick = () => {
    const dept = btn.dataset.filter;
    document.getElementById("filterMenu").classList.add("hidden");
    if (dept === "all") {
      filteredMembers = [...teamMembers];
      teamTitleElement.innerText = "Faces Behind ASPIRE";
      selectedFilterElement.innerText = "All Departments";
    } else {
      filteredMembers = teamMembers.filter(m => Array.isArray(m.department) ? m.department.includes(dept) : m.department === dept);
      teamTitleElement.innerText = dept;
      selectedFilterElement.innerText = dept;
    }
    renderTeam();
  };
});

document.getElementById("filterToggle").onclick = () => {
  document.getElementById("filterMenu").classList.toggle("hidden");
};

document.addEventListener("click", (e) => {
  if (!e.target.closest("#filterToggle") && !e.target.closest("#filterMenu")) {
    document.getElementById("filterMenu").classList.add("hidden");
  }
});

function openModal(index) {
  const member = filteredMembers[index];
  modalElement.classList.remove("hidden");
  modalElement.classList.add("flex");
  document.getElementById("modalImg").src = member.image;
  document.getElementById("modalName").innerText = member.name;
  document.getElementById("modalRole").innerText = member.role;
  document.getElementById("modalBio").innerText = member.bio || "";
}

document.getElementById("closeModal").onclick = () => {
  modalElement.classList.add("hidden");
};

modalElement.addEventListener("click", (e) => {
  if (!modalContentElement.contains(e.target)) {
    modalElement.classList.add("hidden");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalElement.classList.add("hidden");
  }
});

// Marquee for Announcement Bar
const marqueeContainer = document.querySelector('.marquee-container');
const marqueeContent = document.querySelector('.marquee-content');

if (marqueeContainer && marqueeContent) {
  const items = marqueeContent.querySelectorAll('.marquee-item');
  const [firstItem, secondItem] = items;
  if (firstItem && secondItem) {
    // Duplicate content for seamless looping
    secondItem.innerHTML = firstItem.innerHTML;
  }

  let marqueeTimeout;

  const checkMarquee = () => {
    const containerWidth = marqueeContainer.offsetWidth;
    const itemWidth = firstItem ? firstItem.scrollWidth : 0;

    if (itemWidth > containerWidth) {
      marqueeContainer.style.textAlign = '';
      marqueeContent.classList.remove('marquee-active');
      clearTimeout(marqueeTimeout);

      // Start sliding after a short pause
      marqueeTimeout = setTimeout(() => {
        marqueeContent.classList.add('marquee-active');
      }, 2000);
    } else {
      marqueeContent.classList.remove('marquee-active');
      marqueeContainer.style.textAlign = 'center';
    }
  };

  // Check on load and on resize
  checkMarquee();
  window.addEventListener('resize', checkMarquee);
}
