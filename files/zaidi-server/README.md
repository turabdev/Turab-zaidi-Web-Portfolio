# ZAIDI Portfolio — Backend API

Express + MongoDB backend for the ZAIDI OS Portfolio.

---

## Stack
- **Node.js + Express** — REST API
- **MongoDB Atlas** — Database (free tier)
- **Mongoose** — ODM
- **JWT** — Authentication
- **bcryptjs** — Password hashing
- **Helmet + Rate Limiter** — Security

---

## Quick Start

### 1. Clone and install
```bash
cd zaidi-server
npm install
```

### 2. Setup environment
```bash
cp .env.example .env
# Edit .env with your real values
```

### 3. Get MongoDB Atlas URI
1. Go to https://cloud.mongodb.com
2. Create free cluster
3. Click Connect → Drivers → copy URI
4. Paste into MONGO_URI in .env

### 4. Generate JWT secret
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```
Paste output into JWT_SECRET in .env

### 5. Seed database
```bash
npm run seed
# Creates: admin/zaidi2025 + all default data
```

### 6. Run development server
```bash
npm run dev       # requires: npm install -g nodemon
# or
npm start
```

Server runs on: http://localhost:5000

---

## API Endpoints

### Auth
| Method | Route | Access | Description |
|--------|-------|--------|-------------|
| POST | /api/auth/login | Public | Login → returns JWT |
| POST | /api/auth/register | Public (1st use only) | Create admin |
| GET | /api/auth/me | Protected | Get current user |
| POST | /api/auth/change-password | Protected | Change password |

### Content (all GET are public, POST/PUT/DELETE require JWT)
| Method | Route | Description |
|--------|-------|-------------|
| GET/POST | /api/projects | List / Create projects |
| GET/PUT/DELETE | /api/projects/:id | Get / Update / Delete |
| GET | /api/projects/featured/list | Featured projects only |
| GET/POST | /api/skills | Skills CRUD |
| GET/POST | /api/ctf | CTF writeups CRUD |
| GET | /api/ctf/stats/summary | CTF stats |
| GET/POST | /api/certs | Certifications CRUD |
| GET/POST | /api/blog | Blog posts CRUD |
| GET | /api/blog/published/list | Published posts only |
| GET | /api/blog/slug/:slug | Post by slug |
| GET/PUT | /api/about | About me (singleton) |
| GET/PUT | /api/contact | Contact info |
| POST | /api/contact/message | Submit contact form |
| GET | /api/health | Server health check |

### Auth header (for protected routes)
```
Authorization: Bearer <your_jwt_token>
```

---

## Deploy to Render (free)

1. Push to GitHub
2. Go to https://render.com → New Web Service
3. Connect your GitHub repo
4. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Environment:** Node
5. Add environment variables from .env
6. Deploy

Your API will be live at: `https://zaidi-api.onrender.com`

---

## Wiring to Frontend

In your React app, create `src/api/client.js`:

```js
const BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = {
  get:    (url)       => fetch(`${BASE}${url}`, headers()).then(r => r.json()),
  post:   (url, data) => fetch(`${BASE}${url}`, { method:'POST',  ...headers(), body: JSON.stringify(data) }).then(r => r.json()),
  put:    (url, data) => fetch(`${BASE}${url}`, { method:'PUT',   ...headers(), body: JSON.stringify(data) }).then(r => r.json()),
  delete: (url)       => fetch(`${BASE}${url}`, { method:'DELETE',...headers() }).then(r => r.json()),
};

function headers() {
  const token = localStorage.getItem('zaidi_token');
  return {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    }
  };
}
```

Then replace localStorage calls in admin.html with real API calls:
```js
// Instead of: DB.projects = [...]
const projects = await api.get('/projects');
```
