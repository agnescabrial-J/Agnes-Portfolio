# Vinsinfo's FutureBox - Admin Panel

## Overview

**FutureBox Admin Panel** is a comprehensive administration dashboard developed by **Vision Hub Team** for managing the FutureBox innovation platform. It provides administrators with powerful tools to approve ideas, manage users, configure categories, and oversee the private innovation's.

### Key Features
- **Idea Management** - Review, approve, reject, and moderate submitted ideas
- **User Management** - Manage user accounts, and roles
- **Category Administration** - Create and organize idea categories

### Tech Stack
- **React 19.1.1** + **TypeScript 5.9.3**
- **Vite 7.1.7** - Build tool
- **Radix UI** - Headless UI components
- **Tailwind CSS 4.1.14** - Styling
- **React Router DOM** - Routing
- **React Hook Form** + **Zod** - Form handling

---

## Prerequisites

- **Node.js**: v20.x or higher
- **npm**: v10.x or higher
- **Git**: Latest version

```bash
# Verify installations
node --version
npm --version
git --version
```

---

## Installation & Setup

### 1. Clone Repository

```bash
git clone http://192.168.11.54/visionhub_team/futurebox_admin.git
cd futurebox-admin
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```
Access the admin panel at: **http://localhost:5050**

---

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## Project Structure

```
futurebox-admin/
├── src/
│   ├── components/                       # Reusable UI & feature-specific components
│   │   ├── Layout/                       # Footer, Sidebar, Wrapper layouts
│   │   ├── Modals/                       # All dialog/modals used across app
│   │   ├── ui/                           # Buttons, Inputs, Select, etc. (base UI components)
│   │   ├── UserManagement/               # Components specific to user management flows
│   │   └── ProtectedRoute.tsx            # Route guard for authenticated pages
│   │
│   ├── config/                           # App configuration, constants, tokens
│   ├── hooks/                            # Reusable custom React hooks
│   ├── lib/                              # Shared libraries and helpers (formatters, utils)
│   ├── mock/                             # Mock data for development/testing
│   │
│   ├── pages/                            # All route-level page components (no folders here)
│   │   ├── CategoryManagement.tsx        # Category listing and management page
│   │   ├── Dashboard.tsx                 # Dashboard overview screen
│   │   ├── Index.tsx                     # Main entry landing page (post-login router)
│   │   ├── Login.tsx                     # Authentication page
│   │   ├── NotFound.tsx                  # 404 page
│   │   ├── PrivateIdeas.tsx              # Private ideas page
│   │   └── UserManagement.tsx            # User list / user operations page
│   │
│   ├── services/                         # API calls and service handlers
│   │
│   ├── styles/                           # Global styles, animation.css, theme files
│   │
│   ├── App.tsx                           # App root with routing setup
│   └── main.tsx                          # Vite entry file (React root render)
│
├── public/                               # Public static assets (favicon, html template)
├── package.json                          # Project dependencies & scripts
└── vite.config.ts                        # Vite configuration

```

---

## Build for Production

```bash
# Create production build
npm run build

# Output will be in dist/ folder
```

---

## Admin Access & Roles

### Default Admin Credentials
```
Email: admin@vinsinfo.com
Password: [Contact VisionHub Team]
```

### Role Hierarchy
1. **Master Admin** - Full system access
2. **Category Admin** - Manage specific categories
3. **Contributor** - Normal users (default)

---

## License

Proprietary - © 2025-2026 Vinsinfo. All rights reserved.