# ZAIDI Portfolio API — Setup & Reference

## 🚀 Quick Start

### 1. Install dependencies
```bash
cd zaidi-server
npm install
```

### 2. Configure environment
```bash
cp .env.example .env
# Edit .env and fill in your values
```

### 3. Get your MongoDB URI
- Go to https://cloud.mongodb.com
- Create free cluster → Connect → Drivers
- Copy the URI into .env

### 4. Generate a strong JWT secret
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
# Paste output into JWT_SECRET in .env
```

### 5. Create admin account (ONE TIME only)
```bash
npm run dev
# Then in another terminal:
curl -X POST http://localhost:5000/api/auth/setup \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"YourStrongPassword123!"}'
```

### 6. Start server
```bash
npm run dev      # Development (auto-restart)
npm start        # Production
```

---

## 📡 API Endpoints

### Auth
| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | `/api/auth/setup` | ❌ | One-time admin creation |
| POST | `/api/auth/login` | ❌ | Login → returns JWT token |
| GET  | `/api/auth/verify` | ✅ | Verify token is valid |
| POST | `/api/auth/change-password` | ✅ | Change admin password |

**Login example:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"YourPassword"}'
# Returns: { token: "eyJ..." }
```

**Using the token:**
```bash
curl http://localhost:5000/api/projects \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

### Projects `/api/projects`
| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| GET | `/api/projects` | ❌ | Get all projects |
| GET | `/api/projects/:id` | ❌ | Get single project |
| POST | `/api/projects` | ✅ | Create project |
| PUT | `/api/projects/:id` | ✅ | Update project |
| DELETE | `/api/projects/:id` | ✅ | Delete project |

**Query params:** `?search=react&limit=10&page=1`

**Create body:**
```json
{
  "name": "Bahifazat",
  "desc": "School transport safety PWA",
  "tech": "Next.js, NestJS, PostgreSQL",
  "url": "https://bahifazat.com",
  "github": "https://github.com/zaidi-sama/bahifazat",
  "status": "active",
  "featured": true,
  "order": 1
}
```

---

### Skills `/api/skills`
Same CRUD pattern.

**Create body:**
```json
{
  "name": "React / Next.js",
  "category": "Frontend",
  "level": 88,
  "order": 1
}
```
Categories: `Frontend | Backend | Security | Tools | Other`

---

### CTF Writeups `/api/ctf`
Same CRUD pattern.

**Create body:**
```json
{
  "name": "Nibbles",
  "platform": "HTB",
  "os": "Linux",
  "difficulty": "easy",
  "tags": "File Upload, PHP Webshell, Sudo Privesc",
  "writeup": "## Enumeration\n...",
  "date": "2025-03-15"
}
```
Platforms: `HTB | THM | CTFtime | Other`
Difficulties: `easy | medium | hard | insane`

---

### Certifications `/api/certs`
Same CRUD pattern.

**Create body:**
```json
{
  "name": "CPTS",
  "org": "Hack The Box Academy",
  "progress": 25,
  "status": "inprogress"
}
```
Statuses: `planned | inprogress | done`

---

### Blog `/api/blog`
| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| GET | `/api/blog` | ❌ | Get published posts (drafts hidden) |
| GET | `/api/blog/:idOrSlug` | ❌ | Get single post |
| POST | `/api/blog` | ✅ | Create post |
| PUT | `/api/blog/:id` | ✅ | Update post |
| DELETE | `/api/blog/:id` | ✅ | Delete post |

**Query params:** `?search=nmap&category=HTB+Writeup`

**Create body:**
```json
{
  "title": "Nibbles — File Upload RCE",
  "category": "HTB Writeup",
  "excerpt": "Full walkthrough of Nibbles machine...",
  "body": "## Enumeration\n\nnmap -sV -sC...",
  "status": "published",
  "date": "2025-03-15",
  "readTime": 8
}
```
Slug auto-generated from title.

---

### About `/api/about`
| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| GET | `/api/about` | ❌ | Get profile data |
| PUT | `/api/about` | ✅ | Update profile (upsert) |

**Update body:**
```json
{
  "name": "Syed Turab Haider Zaidi",
  "nickname": "Zaidi Sama",
  "title": "Full Stack Developer & Pentester",
  "bio": "CS student...",
  "location": "Lahore, Pakistan",
  "email": "zaidi@email.com",
  "github": "github.com/zaidi-sama",
  "linkedin": "linkedin.com/in/zaidi-sama",
  "htb": "app.hackthebox.com/profile/zaidi"
}
```

---

## 🔌 Wiring to Frontend (Admin Panel)

In `admin.html`, replace the `loadDB()` / `saveDB()` functions with API calls.

**Example — Load projects:**
```javascript
const API = 'https://your-api.onrender.com/api';
const token = sessionStorage.getItem('zaidi_token');

async function loadProjects() {
  const res = await fetch(`${API}/projects`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  const { data } = await res.json();
  return data;
}
```

**Example — Create project:**
```javascript
async function createProject(projectData) {
  const res = await fetch(`${API}/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(projectData)
  });
  return res.json();
}
```

---

## 🚀 Deploy to Render (Free)

1. Push `zaidi-server/` to a GitHub repo
2. Go to https://render.com → New Web Service
3. Connect your repo
4. Set environment variables (copy from .env)
5. Build command: `npm install`
6. Start command: `npm start`
7. Copy your Render URL → update `CLIENT_URL` in .env

**Your API will be live at:**
`https://zaidi-api.onrender.com/api/health`

---

## 🗂️ File Structure
```
zaidi-server/
├── server.js              ← Entry point
├── .env.example           ← Copy to .env
├── .gitignore
├── package.json
├── middleware/
│   └── auth.js            ← JWT protect middleware
├── models/
│   ├── Admin.js           ← Admin user model
│   └── index.js           ← All content models
├── routes/
│   ├── auth.js            ← Login, setup, verify
│   ├── projects.js
│   ├── skills.js
│   ├── ctf.js
│   ├── certs.js
│   ├── blog.js            ← Custom (published filter)
│   └── about.js           ← Singleton upsert
└── config/
    └── crudRouter.js      ← Reusable CRUD factory
```
