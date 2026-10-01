// ===== EDIT THIS PART. Anything left empty is hidden. =====
var CONTACT = {
  email: "vishnuy8555@gmail.com",
  phone: "+91-8555078039",
  linkedin: "https://www.linkedin.com/in/yarra-chaganti-vishnu-vardhan-reddy-a08397313",
  github: "https://github.com/vishnu85-sys",
  resume: "Yarra_Chaganti_Vishnu_Vardhan_Reddy_Resume.pdf"
};

var ROLES = ["Java Full Stack Developer", "Spring Boot and React.js Developer", "Python and Machine Learning Trainee"];

var STATS = [
  ["8.3/10", "CGPA, B.Tech CSE"],
  ["3", "Projects built"],
  ["5", "Certifications"],
  ["2026", "Graduate"]
];

var PROJECTS = [
  {
    name: "AI Skin Type Classification and Skincare Recommendation System",
    about: "A deep learning app that classifies skin type from an image and gives skincare and diet recommendations. Jan to Apr 2026.",
    problem: "",
    solution: "Fine-tuned a pretrained Vision Transformer (ViT-B16) with transfer learning to classify 3 skin types: oily, dry, and acne-prone.",
    architecture: "A TensorFlow/Keras model served through a Flask/Streamlit web app with image upload and real-time prediction.",
    features: [
      "Image upload with real-time skin type prediction",
      "Personalized skincare and diet recommendations",
      "Spoken guidance in English, Hindi, and Telugu using gTTS",
      "Model checked with a classification report, confusion matrix, and ROC and precision-recall curves",
      "Training and validation accuracy and loss plotted with Matplotlib and Seaborn"
    ],
    tech: ["Python", "TensorFlow", "Keras", "Vision Transformer", "scikit-learn", "Flask", "Streamlit", "Matplotlib", "Seaborn", "gTTS"],
    role: "I built and trained the model, evaluated it, and deployed it in the web app.",
    challenge: "The model overfit during training. I reduced it with early stopping and by adjusting the learning rate and dropout.",
    results: "About 85% test accuracy across the 3 classes.",
    learnings: "",
    code: "https://github.com/vishnu85-sys/ai-skincare-nutrition-recommendation", demo: ""
  },
  {
    name: "Learning Management System (LMS)",
    about: "A full stack learning platform. Capstone project of the Full Stack Development Training Program. May to Jul 2026.",
    problem: "",
    solution: "A Spring Boot backend and React.js frontend where Users, Courses, Content, and Enrolment are modelled using OOP and OOAD principles.",
    architecture: "Spring Boot REST APIs, a React.js frontend with dynamic routing and state management, and a MySQL database.",
    features: [
      "REST APIs for course creation, student enrolment, and progress tracking",
      "React.js pages with dynamic routing and state management",
      "Role-based access control (RBAC)",
      "Normalized MySQL schema with joins and subqueries for users, content, and completion records"
    ],
    tech: ["Java", "Spring Boot", "React.js", "REST APIs", "MySQL", "JPA", "JWT", "RBAC"],
    role: "I designed and built the backend, frontend, and database.",
    challenge: "", results: "", learnings: "",
    code: "https://github.com/vishnu85-sys/Learning-Management-System", demo: ""
  },
  {
    name: "Hospital Management System",
    about: "A full stack Hospital Management System built with Java Spring Boot, MySQL, HTML, CSS and JavaScript.",
    problem: "", solution: "", architecture: "",
    features: [],   // add 4 to 6 real features
    tech: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
    role: "", challenge: "", results: "", learnings: "",
    code: "https://github.com/vishnu85-sys/hospital-management-system", demo: ""
  }
];

var SKILLS = {
  "Machine learning": ["TensorFlow", "Keras", "Vision Transformer (transfer learning)", "scikit-learn", "Image classification"],
  "Full stack": ["Java (Core, OOP, J2EE: Servlets, MVC)", "Spring Boot", "React.js", "REST APIs"],
  "Data and charts": ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
  "Languages": ["Python", "Java"],
  "Databases": ["MySQL (schema design, joins, normalization)", "MongoDB (basic)"],
  "Cloud and tools": ["AWS EC2, S3, IAM", "Git", "Agile", "Flask", "Streamlit"]
};

var EXPERIENCE = [
  { title: "Full Stack Development Training Program (Java)", org: "KodNest", when: "Feb to Sep 2026", note: "Built Spring Boot backend services and React.js interfaces connected to REST APIs. Worked with MySQL, Agile, Git, and clean code standards." },
  { title: "AWS Cloud Computing Virtual Internship", org: "SaRaj Info Tech", when: "Jun to Jul 2024", note: "Deployed web applications on AWS EC2, set up S3 storage, and used IAM for least-privilege access." }
];

var EDUCATION = [
  { title: "B.Tech Computer Science and Engineering (CGPA 8.3/10)", org: "K.S.R.M College of Engineering, Kadapa", when: "2022 to 2026" },
  { title: "Intermediate, MPC (81%)", org: "Sri Sai Siddhartha Junior College, Tadipatri", when: "2020 to 2022" },
  { title: "Certification: Java Full Stack Development", org: "KodNest", when: "Sep 2026" },
  { title: "Certification: Data Structures and Algorithms", org: "PrepInsta", when: "May 2026" },
  { title: "Certification: AWS Cloud Computing", org: "SaRaj Info Tech", when: "Jun 2025" },
  { title: "Certification: Python Programming", org: "PrepInsta", when: "Mar 2025" },
  { title: "Certification: Machine Learning", org: "", when: "" }
];
// ===== END OF EDIT AREA =====

function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; }
function ext(a) { a.target = "_blank"; a.rel = "noopener"; return a; }
function btn(text, href, main, external) { var a = el("a", "btn" + (main ? " main" : ""), text); a.href = href; return external ? ext(a) : a; }
function list(items, cls) { var u = el("ul", cls); items.forEach(function (t) { u.appendChild(el("li", "", t)); }); return u; }

// Buttons
function buttons(target, withResume) {
  var box = document.getElementById(target);
  if (withResume && CONTACT.resume) box.appendChild(btn("Download resume", CONTACT.resume, true, true));
  if (CONTACT.email) {
    box.appendChild(btn("Email me", "mailto:" + CONTACT.email, !(withResume && CONTACT.resume)));
    var c = el("button", "btn copy", "Copy email"); c.type = "button";
    c.addEventListener("click", function () {
      if (navigator.clipboard) navigator.clipboard.writeText(CONTACT.email).then(function () { c.textContent = "Copied"; setTimeout(function () { c.textContent = "Copy email"; }, 1500); });
    });
    box.appendChild(c);
  }
  if (CONTACT.linkedin) box.appendChild(btn("LinkedIn", CONTACT.linkedin, false, true));
  if (CONTACT.github) box.appendChild(btn("GitHub", CONTACT.github, false, true));
  if (CONTACT.phone) box.appendChild(btn(CONTACT.phone, "tel:" + CONTACT.phone.replace(/\s/g, ""), false));
}
buttons("cta", true);
buttons("contactlinks", false);

// Stats
STATS.forEach(function (s) { var d = el("div", "stat"); d.appendChild(el("b", "", s[0])); d.appendChild(el("span", "", s[1])); document.getElementById("stats").appendChild(d); });

// Projects + details popup
var modal = document.getElementById("modal");
function section(parent, title, node) { if (!node) return; parent.appendChild(el("h4", "", title)); parent.appendChild(node); }
function openProject(p) {
  modal.innerHTML = "";
  var x = el("button", "close", "Close"); x.type = "button"; x.addEventListener("click", function () { modal.close(); });
  modal.appendChild(x);
  modal.appendChild(el("h3", "", p.name));
  section(modal, "Overview", el("p", "", p.about));
  section(modal, "Problem it solves", p.problem ? el("p", "", p.problem) : null);
  section(modal, "My solution", p.solution ? el("p", "", p.solution) : null);
  section(modal, "How it is built", p.architecture ? el("p", "", p.architecture) : null);
  section(modal, "Main features", p.features.length ? list(p.features, "feat") : null);
  section(modal, "My role", p.role ? el("p", "", p.role) : null);
  section(modal, "Biggest challenge", p.challenge ? el("p", "", p.challenge) : null);
  section(modal, "Result", p.results ? el("p", "", p.results) : null);
  section(modal, "What I learned", p.learnings ? el("p", "", p.learnings) : null);
  section(modal, "Tech used", p.tech.length ? list(p.tech, "tags") : null);
  if (p.code || p.demo) { var l = el("div", "links"); if (p.code) { var a = el("a", "", "Source code"); a.href = p.code; l.appendChild(ext(a)); } if (p.demo) { var b = el("a", "", "Live demo"); b.href = p.demo; l.appendChild(ext(b)); } modal.appendChild(l); }
  modal.showModal();
}
modal.addEventListener("click", function (e) { if (e.target === modal) modal.close(); });
var pl = document.getElementById("projlist");
PROJECTS.forEach(function (p) {
  var c = el("article", "card");
  c.appendChild(el("h3", "", p.name)); c.appendChild(el("p", "", p.about));
  if (p.tech.length) c.appendChild(list(p.tech, "tags"));
  var m = el("button", "more", "View details"); m.type = "button"; m.addEventListener("click", function () { openProject(p); });
  c.appendChild(m); pl.appendChild(c);
});

// Skills
var sl = document.getElementById("skilllist");
Object.keys(SKILLS).forEach(function (k) { var d = el("div"); d.appendChild(el("h3", "", k)); d.appendChild(list(SKILLS[k], "tags")); sl.appendChild(d); });

// Timeline (experience) and rows (education)
function timeline(target, data) {
  var box = el("div", "tl");
  data.forEach(function (r) { var i = el("div", "item"); i.appendChild(el("strong", "", r.title)); i.appendChild(el("small", "", r.org + ", " + r.when)); if (r.note) i.appendChild(el("p", "", r.note)); box.appendChild(i); });
  document.getElementById(target).appendChild(box);
}
function rows(target, data) {
  var box = document.getElementById(target);
  data.forEach(function (r) { var row = el("div", "row"), left = el("div"); left.appendChild(el("strong", "", r.title)); if (r.org) left.appendChild(el("small", "", r.org)); row.appendChild(left); row.appendChild(el("span", "when", r.when)); box.appendChild(row); });
}
timeline("explist", EXPERIENCE);
rows("edulist", EDUCATION);

// Typing effect for the role line (static if reduced motion)
var typed = document.getElementById("typed"), ri = 0, ci = 0, del = false;
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  (function tick() {
    var w = ROLES[ri];
    typed.textContent = w.slice(0, ci);
    if (!del && ci === w.length) { del = true; return setTimeout(tick, 1600); }
    if (del && ci === 0) { del = false; ri = (ri + 1) % ROLES.length; }
    ci += del ? -1 : 1;
    setTimeout(tick, del ? 35 : 70);
  })();
}

// Highlight current section in the menu
var links = document.querySelectorAll(".top nav a");
var io = new IntersectionObserver(function (es) {
  es.forEach(function (e) { if (e.isIntersecting) links.forEach(function (a) { a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id); }); });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section[id]").forEach(function (s) { io.observe(s); });

// Search-engine data (helps recruiters find you)
var ld = { "@context": "https://schema.org", "@type": "Person", name: "Vishnu Vardhan Reddy", jobTitle: "Java Full Stack Developer",
  address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressCountry: "IN" }, alumniOf: "K.S.R.M College of Engineering", email: CONTACT.email ? "mailto:" + CONTACT.email : undefined,
  sameAs: [CONTACT.linkedin, CONTACT.github].filter(Boolean) };
var ldTag = document.createElement("script"); ldTag.type = "application/ld+json"; ldTag.textContent = JSON.stringify(ld); document.head.appendChild(ldTag);

// Add ?check to the page address to see what is still empty
if (location.search.indexOf("check") > -1) {
  var miss = [];
  ["email", "linkedin", "github", "resume"].forEach(function (k) { if (!CONTACT[k]) miss.push("CONTACT." + k); });
  PROJECTS.forEach(function (p) { ["problem", "solution", "architecture", "features", "role", "challenge", "results", "learnings", "code", "demo"].forEach(function (k) { if (!p[k] || !p[k].length) miss.push(p.name + ": " + k); }); });
  if (miss.length) document.body.insertBefore(el("div", "check", "Still empty: " + miss.join(", ")), document.body.firstChild);
}

// Photo fallback
var photo = document.getElementById("photo");
photo.addEventListener("error", function () { photo.hidden = true; document.getElementById("initials").hidden = false; });

// Theme toggle
var root = document.documentElement;
try { var saved = localStorage.getItem("theme"); if (saved) root.setAttribute("data-theme", saved); } catch (e) {}
document.getElementById("theme").addEventListener("click", function () {
  var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});
