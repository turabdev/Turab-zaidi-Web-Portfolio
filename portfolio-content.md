# ═══════════════════════════════════════════════════════════════
# ZAIDI PORTFOLIO — STATIC CONTENT DATA FILE
# Give this file to your local AI with this instruction:
#
# "Replace all placeholder/dummy data in the React components
#  with the real data from this file. Match each section to
#  its corresponding component as indicated. Do NOT change
#  any CSS, animations, or component structure."
# ═══════════════════════════════════════════════════════════════


# ──────────────────────────────────────────────────────────────
# SECTION 1 — ABOUT ME
# Target: src/components/Windows/index.jsx → AboutWindow
# Target: src/pages/Admin/index.jsx → about form defaults
# ──────────────────────────────────────────────────────────────

name:        "Syed Turab Haider Zaidi"
nickname:    "Zaidi Sama"
title:       "Full Stack Developer & CS Student"
university:  "Superior University, Lahore"
degree:      "ADP — Computer Science (Completed)"
location:    "Lahore, Pakistan"

bio: >
  Full Stack MERN Developer and Computer Science graduate from Superior
  University, Lahore. I build responsive, creative websites and provide
  complete webpage solutions and consultancy to clients. Beyond the web,
  I have a solid grip on C++ with Data Structures & Algorithms, OOP,
  and Programming Fundamentals — giving me a strong CS foundation
  alongside my development work.

github:    "https://github.com/turabdev"
linkedin:  "https://www.linkedin.com/in/turab-zaidi-b4a7132b6/"
email:     "turabzaidi1971@gmail.com"
htb:       ""    # ← FILL IN your HTB profile URL when ready
cvUrl:     ""    # ← FILL IN hosted PDF link when ready
twitter:   ""    # ← FILL IN if applicable

# Stats shown in the About window stat card grid
stats:
  - num: "MERN"   label: "Stack"
  - num: "ADP"    label: "CS Degree"
  - num: "C++"    label: "Also Skilled"
  - num: "PKT"    label: "Lahore"


# ──────────────────────────────────────────────────────────────
# SECTION 2 — PROJECTS (Web Dev Desktop)
# Target: src/components/Windows/index.jsx → ProjectsWindow
# All 5 are demo/showcase websites
# ──────────────────────────────────────────────────────────────

projects:

  - name:     "Xhibiter"
    desc:     "NFT marketplace demo — modern Web3-style UI with animated hero, clean card layouts, and dark aesthetic."
    tech:     "HTML, CSS, JavaScript, React"
    url:      "https://xhibiter-nft-eta.vercel.app/"
    github:   ""    # ← FILL IN repo URL if available
    status:   "done"
    emoji:    "🖼️"
    gradient: "linear-gradient(135deg, #1a1a2e, #16213e)"

  - name:     "Ideko"
    desc:     "Modern business website demo — professional multi-section layout with services, testimonials, and clean typography."
    tech:     "HTML, CSS, JavaScript"
    url:      "https://ideko-modern.vercel.app/"
    github:   ""    # ← FILL IN repo URL if available
    status:   "done"
    emoji:    "💼"
    gradient: "linear-gradient(135deg, #e8f5e9, #c8e6c9)"

  - name:     "Project Onix"
    desc:     "Digital agency website demo — bold design with agency services, portfolio section, and creative transitions."
    tech:     "HTML, CSS, JavaScript"
    url:      "https://project-onix-digital.vercel.app/"
    github:   ""    # ← FILL IN repo URL if available
    status:   "done"
    emoji:    "🚀"
    gradient: "linear-gradient(135deg, #1a1a1a, #2d2d2d)"

  - name:     "HexShop"
    desc:     "E-commerce store demo — full product listing UI with cart interactions, filter system, and responsive grid layout."
    tech:     "HTML, CSS, JavaScript, React"
    url:      "https://hexshop.vercel.app/"
    github:   ""    # ← FILL IN repo URL if available
    status:   "done"
    emoji:    "🛒"
    gradient: "linear-gradient(135deg, #fce4ec, #f8bbd0)"

  - name:     "Fierce Finance"
    desc:     "Fintech landing page demo — professional financial services UI with stats, pricing section, and modern layout."
    tech:     "HTML, CSS, JavaScript"
    url:      "https://fierce-finance.vercel.app/"
    github:   ""    # ← FILL IN repo URL if available
    status:   "done"
    emoji:    "💰"
    gradient: "linear-gradient(135deg, #e8f5e9, #dcedc8)"


# ──────────────────────────────────────────────────────────────
# SECTION 3 — SKILLS (Web Dev Desktop)
# Target: src/components/Windows/index.jsx → SkillsWindow
# ──────────────────────────────────────────────────────────────

skills:

  Frontend:
    - { name: "HTML & CSS",          level: 90 }
    - { name: "JavaScript",          level: 82 }
    - { name: "React",               level: 85 }
    - { name: "Responsive Design",   level: 88 }
    - { name: "WordPress",           level: 75 }
    - { name: "Figma / UI Design",   level: 70 }

  Backend:
    - { name: "Node.js / Express",   level: 60 }
    - { name: "MongoDB",             level: 58 }
    - { name: "REST API Design",     level: 62 }

  CS Fundamentals:
    - { name: "C++ & OOP",                     level: 78 }
    - { name: "Data Structures & Algorithms",  level: 72 }
    - { name: "Programming Fundamentals",      level: 80 }

  Tools:
    - { name: "Git & GitHub",         level: 80 }
    - { name: "Vercel / Deployment",  level: 75 }
    - { name: "VS Code",              level: 90 }

# Tag cloud shown at bottom of Skills window
skill_tags:
  - "HTML5"
  - "CSS3"
  - "JavaScript"
  - "React"
  - "Node.js"
  - "Express"
  - "MongoDB"
  - "C++"
  - "DSA"
  - "OOP"
  - "WordPress"
  - "Figma"
  - "Git"
  - "GitHub"
  - "Vercel"
  - "MERN Stack"


# ──────────────────────────────────────────────────────────────
# SECTION 4 — RESUME (Web Dev Desktop)
# Target: src/components/Windows/index.jsx → ResumeWindow
# ──────────────────────────────────────────────────────────────

resume:
  name:    "Syed Turab Haider Zaidi"
  contact: "Lahore, Pakistan  ·  turabzaidi1971@gmail.com  ·  github.com/turabdev"

  education:
    - degree:   "ADP — Computer Science"
      school:   "Superior University, Lahore"
      period:   "Completed"
      desc:     ""

  experience:
    - title:  "Freelance Full Stack Developer"
      org:    "Self-employed"
      period: "2023 – Present"
      desc:   >
        Building responsive, creative websites and providing web solutions
        and consultancy to clients. Delivered 5 demo/showcase projects
        deployed live on Vercel covering NFT, e-commerce, fintech,
        digital agency, and business website niches.

    - title:  "Personal Projects — Web Developer"
      org:    "Portfolio"
      period: "2023 – Present"
      desc:   >
        Designed and developed NFT marketplace, e-commerce store, fintech
        landing page, digital agency site, and modern business website
        using HTML, CSS, JavaScript, and React.

  skills_summary: >
    HTML · CSS · JavaScript · React · Node.js · Express · MongoDB ·
    WordPress · C++ · DSA · OOP · Git · GitHub · Figma · Vercel


# ──────────────────────────────────────────────────────────────
# SECTION 5 — BLOG POSTS (Web Dev Desktop)
# Target: src/components/Windows/index.jsx → BlogWindow
# All are drafts — update status to "published" when you write them
# ──────────────────────────────────────────────────────────────

blog:

  - title:    "How I Built 5 Production-Quality Demo Websites"
    category: "Dev"
    date:     "2025-06-01"    # ← UPDATE to real publish date
    status:   "draft"
    excerpt:  >
      A walkthrough of my process building Xhibiter, Ideko, Onix,
      HexShop and Fierce Finance — design decisions, tech choices,
      and lessons learned.

  - title:    "MERN Stack from Zero: What I Learned as a CS Student"
    category: "Dev"
    date:     "2025-06-01"    # ← UPDATE to real publish date
    status:   "draft"
    excerpt:  >
      My honest experience learning MongoDB, Express, React, and Node.js
      as a CS student at Superior University — what clicked, what didn't.

  - title:    "C++ DSA Patterns Every CS Student Should Know"
    category: "Dev"
    date:     "2025-06-01"    # ← UPDATE to real publish date
    status:   "draft"
    excerpt:  >
      The data structures and algorithm patterns I found most useful
      from my CS fundamentals and OOP coursework at Superior University.

  # ← ADD real posts here as you write them


# ──────────────────────────────────────────────────────────────
# SECTION 6 — CONTACT (Web Dev Desktop + Kali)
# Target: src/components/Windows/index.jsx → ContactWindow
# ──────────────────────────────────────────────────────────────

contact:
  email:    "turabzaidi1971@gmail.com"
  github:   "https://github.com/turabdev"
  linkedin: "https://www.linkedin.com/in/turab-zaidi-b4a7132b6/"
  location: "Lahore, Pakistan"
  htb:      ""    # ← FILL IN HTB profile URL
  twitter:  ""    # ← FILL IN if applicable


# ──────────────────────────────────────────────────────────────
# SECTION 7 — CV DOWNLOAD WINDOW (Web Dev Desktop)
# Target: src/components/Windows/index.jsx → CVWindow
# ──────────────────────────────────────────────────────────────

cv:
  cvUrl:       ""      # ← PASTE hosted PDF link (Google Drive / Notion / etc.)
  lastUpdated: "2025"
  # If cvUrl is empty, show this message instead of download button:
  emptyMsg:    "CV coming soon — add your PDF link in the admin panel."


# ══════════════════════════════════════════════════════════════
# KALI DESKTOP DATA
# ══════════════════════════════════════════════════════════════


# ──────────────────────────────────────────────────────────────
# SECTION 8 — CTF WRITEUPS (Kali Desktop)
# Target: src/components/Windows/index.jsx → CTFWindow
# ← Update dates to real ones. Add more machines as you root them.
# ──────────────────────────────────────────────────────────────

ctf:

  - name:       "Nibbles"
    platform:   "HTB"
    os:         "Linux"
    difficulty: "easy"
    tags:       "File Upload, PHP Webshell, Sudo Privesc"
    date:       "2025-03-15"    # ← UPDATE to real date
    status:     "rooted"

  - name:       "Jerry"
    platform:   "HTB"
    os:         "Windows"
    difficulty: "easy"
    tags:       "Apache Tomcat, WAR Upload, Msfvenom"
    date:       "2025-02-20"    # ← UPDATE to real date
    status:     "rooted"

  - name:       "Blue"
    platform:   "HTB"
    os:         "Windows"
    difficulty: "easy"
    tags:       "EternalBlue, MS17-010, Metasploit"
    date:       "2025-02-10"    # ← UPDATE to real date
    status:     "rooted"

  - name:       "Lame"
    platform:   "HTB"
    os:         "Linux"
    difficulty: "medium"
    tags:       "Samba, CVE-2007-2447, Command Injection"
    date:       "2025-01-28"    # ← UPDATE to real date
    status:     "rooted"

  # ← PASTE more machines below in same format as you root them


# ──────────────────────────────────────────────────────────────
# SECTION 9 — CERTIFICATIONS (Kali Desktop)
# Target: src/components/Windows/index.jsx → CertsWindow
# ──────────────────────────────────────────────────────────────

certifications:

  - name:          "ADP — Computer Science"
    org:           "Superior University, Lahore"
    progress:      100
    status:        "done"
    credentialUrl: ""    # ← FILL IN digital certificate URL if available

  - name:          "CPTS — Certified Penetration Testing Specialist"
    org:           "Hack The Box Academy"
    progress:      25    # ← UPDATE as you progress
    status:        "inprogress"
    credentialUrl: ""    # ← FILL IN when earned

  - name:          "HTB Starting Point — All Machines"
    org:           "Hack The Box"
    progress:      100
    status:        "done"
    credentialUrl: ""    # ← FILL IN if HTB provides a cert link

  - name:          "Getting Started Module"
    org:           "HTB Academy"
    progress:      100
    status:        "done"
    credentialUrl: ""

  - name:          "eJPT — Junior Penetration Tester"
    org:           "eLearnSecurity"
    progress:      0
    status:        "planned"
    credentialUrl: ""

  # ← ADD more certs here


# ──────────────────────────────────────────────────────────────
# SECTION 10 — HTB STATS (Kali Desktop)
# Target: src/components/Windows/index.jsx → HTBStatsWindow
# ──────────────────────────────────────────────────────────────

htb_stats:
  username:      "z41d1_sama"    # ← UPDATE to your real HTB username
  rank:          "Hacker"        # ← UPDATE: Noob / Script Kiddie / Hacker / Pro Hacker / Elite Hacker
  machinesPwned: 4               # ← UPDATE with real count
  cptsProgress:  25              # ← UPDATE as you go
  primaryOS:     "ParrotOS"
  thmProfile:    ""              # ← FILL IN TryHackMe URL if you use it

  # Stat cards shown in the window
  statCards:
    - { num: "4+",      label: "Machines Pwned",  color: "#48bb78" }
    - { num: "25%",     label: "CPTS Progress",   color: "#2e7fff" }
    - { num: "Easy",    label: "Highest Diff",    color: "#f6e05e" }
    - { num: "Parrot",  label: "Primary OS",      color: "#a259ff" }

  # Keep this in sync with ctf section above
  completedMachines:
    - { name: "Nibbles", os: "Linux",   difficulty: "easy"   }
    - { name: "Jerry",   os: "Windows", difficulty: "easy"   }
    - { name: "Blue",    os: "Windows", difficulty: "easy"   }
    - { name: "Lame",    os: "Linux",   difficulty: "medium" }


# ──────────────────────────────────────────────────────────────
# SECTION 11 — TOOLS ARSENAL (Kali Desktop)
# Target: src/components/Windows/index.jsx → ToolsWindow
# Remove tools you don't use. Add tools you use that aren't listed.
# ──────────────────────────────────────────────────────────────

tools:
  - { icon: "🗺️", name: "Nmap",        cat: "Recon",        desc: "Network scanner. Port discovery, OS detection, service enumeration." }
  - { icon: "💥", name: "Metasploit",  cat: "Exploitation", desc: "World's most used exploit framework. Multi-handler, payloads, post-ex." }
  - { icon: "🕷️", name: "Burp Suite",  cat: "Web Security", desc: "Web proxy for intercepting, modifying and fuzzing HTTP requests." }
  - { icon: "🔑", name: "Hydra",       cat: "Brute Force",  desc: "Fast network login cracker — SSH, FTP, HTTP, SMB and more." }
  - { icon: "📂", name: "Gobuster",    cat: "Recon",        desc: "Directory and DNS brute-forcing written in Go." }
  - { icon: "🌐", name: "spiderfoot",  cat: "OSINT",        desc: "Automated OSINT framework. 200+ data sources, passive recon." }
  - { icon: "📡", name: "Wireshark",   cat: "Traffic",      desc: "Network protocol analyzer. Capture and inspect packets live." }
  - { icon: "🔍", name: "recon-ng",    cat: "OSINT",        desc: "Full-featured web recon framework with module system." }
  - { icon: "📶", name: "Wifite",      cat: "Wireless",     desc: "Automated wireless attack tool — WEP, WPA, WPS cracking." }
  - { icon: "🐍", name: "msfvenom",    cat: "Payloads",     desc: "Payload generator and encoder. Reverse shells, stageless." }
  - { icon: "🔓", name: "Hashcat",     cat: "Cracking",     desc: "GPU-accelerated password recovery. All major hash types." }
  # ← ADD more tools below in the same format


# ──────────────────────────────────────────────────────────────
# SECTION 12 — FAKE TERMINAL (Kali Desktop)
# Target: src/components/Windows/index.jsx → FakeTerminal
# Cosmetic only — nothing executes
# ──────────────────────────────────────────────────────────────

terminal:
  hostname:   "kali"
  username:   "root"
  # Prompt will display as:  root@kali:~#

  command_responses:
    whoami:        "root"
    id:            "uid=0(root) gid=0(root) groups=0(root)"
    uname_a:       "Linux kali 6.1.0-kali9-amd64 #1 SMP PREEMPT_DYNAMIC Kali 6.1.27 x86_64 GNU/Linux"
    pwd:           "/root"
    ls:            "Documents  Downloads  Tools  recon.sh  scan.py  notes.md"
    uptime:        "03:22:14 up 2:41,  1 user,  load average: 0.42, 0.38, 0.35"
    date:          "# generate dynamically: new Date().toString()"


# ══════════════════════════════════════════════════════════════
# TODO — THINGS STILL NEEDED FROM YOU
# Fill these in and re-run this file through your local AI
# ══════════════════════════════════════════════════════════════

TODO:
  high_priority:
    - "Add your real HTB username to htb_stats.username"
    - "Update htb_stats.rank to your actual HTB rank"
    - "Add CV/Resume hosted PDF link to cv.cvUrl and contact.cvUrl"
    - "Confirm/correct CTF machine dates"

  medium_priority:
    - "Update htb_stats.machinesPwned with real count"
    - "Update certifications.CPTS.progress % as you continue"
    - "Add GitHub repo URLs to projects that have public repos"
    - "Add TryHackMe URL to htb_stats.thmProfile if applicable"

  low_priority:
    - "Write and publish blog posts — change status from 'draft' to 'published'"
    - "Add Twitter/X or other social links to contact"
    - "Add credential URLs for completed certs"
    - "Add more CTF machines as you root them"
    - "Add more tools to tools section if you use others"
    - "Add more projects as you build them"


# ══════════════════════════════════════════════════════════════
# INSTRUCTIONS FOR LOCAL AI
# ══════════════════════════════════════════════════════════════

INSTRUCTIONS: |

  You are helping update a React + Vite portfolio website with real
  personal data. The portfolio has two desktop UIs — Linux Mint
  (Web Dev) and Kali Linux (Pentester) — and an admin CMS panel.

  Your job: replace all dummy/placeholder data in the React components
  with the exact real data from this file.

  STRICT RULES:
  - Do NOT change any CSS, animations, layouts, or component structure
  - Do NOT rename any components or files
  - ONLY replace text content, data arrays, and string values
  - For any field marked "← FILL IN" — use empty string "" and add
    a // TODO comment in the code so it's easy to find later
  - Keep all existing fallback/error UI logic intact

  FILE TARGETS:

  1. src/components/Windows/index.jsx
     - AboutWindow    → SECTION 1 (About Me)
     - ProjectsWindow → SECTION 2 (Projects) — replace dummy cards with real 5
     - SkillsWindow   → SECTION 3 (Skills) — group by category, use levels
     - ResumeWindow   → SECTION 4 (Resume)
     - BlogWindow     → SECTION 5 (Blog) — all drafts, show DRAFT badge
     - ContactWindow  → SECTION 6 (Contact)
     - CVWindow       → SECTION 7 (CV) — if cvUrl empty, show emptyMsg
     - CTFWindow      → SECTION 8 (CTF Writeups)
     - CertsWindow    → SECTION 9 (Certifications)
     - HTBStatsWindow → SECTION 10 (HTB Stats)
     - ToolsWindow    → SECTION 11 (Tools Arsenal)
     - FakeTerminal   → SECTION 12 (Terminal) — update hostname + command responses

  2. src/pages/Admin/index.jsx
     - Pre-populate about form default values from SECTION 1

  SPECIAL CASES:

  CVWindow: If cv.cvUrl is empty string:
    - Disable the download button
    - Show text: "CV coming soon — add your PDF link in the admin panel."
    - Do not show a broken link

  BlogWindow: All posts have status "draft"
    - Show them in the list but add a small "DRAFT" badge next to category
    - When status becomes "published" the badge disappears

  ProjectsWindow: Each project card should:
    - Show the emoji as the card header icon
    - Use the gradient as the card header background
    - Make the card title clickable → opens project URL in new tab
    - Show tech stack as tags

  Skills: Render in 4 groups (Frontend, Backend, CS Fundamentals, Tools)
    - Animated progress bar per skill using the level value
    - Skill tags cloud at the bottom using skill_tags array

  ContactWindow: If a field (htb, twitter) is empty string:
    - Hide that contact card entirely — do not show empty cards
