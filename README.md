# Aimshala - Consultant Platform

A comprehensive React-based consultant management platform built with modern web technologies. Aimshala provides a complete ecosystem for consultants to manage their business, connect with clients, and grow their professional network.

## 🚀 Features

### Core Functionality
- **Consultant Dashboard**: Complete business management interface
- **Profile Management**: Comprehensive consultant profile system
- **Session Management**: Schedule and manage client sessions
- **Resource Library**: Educational content and career resources
- **Community Features**: Networking and collaboration tools
- **Payment Processing**: Integrated payment management
- **Calendar Integration**: Appointment scheduling and management
- **Review System**: Client feedback and rating system

### Technical Features
- **Modern UI/UX**: Built with Tailwind CSS and Radix UI
- **Responsive Design**: Mobile-first approach
- **State Management**: Redux Toolkit for global state
- **Type Safety**: Full TypeScript implementation
- **Routing**: React Router for navigation
- **Authentication**: Clerk integration for user management

## 📁 Project Structure

```
Aimshala-/
├── public/                    # Static assets
│   └── logo.png
├── src/
│   ├── assets/               # Images, icons, and media files
│   │   ├── aim_logo.svg
│   │   ├── Consultant/       # Consultant-specific assets
│   │   │   ├── BecomeConsultant/
│   │   │   ├── Calendar.png
│   │   │   ├── Community/
│   │   │   ├── ConsultantEkyc/
│   │   │   ├── Landing/
│   │   │   └── Profile/
│   │   ├── Icons/           # UI icons and SVGs
│   │   │   ├── Sidebar/     # Navigation icons
│   │   │   └── ConsultantProfile/
│   │   ├── MegaMenu/        # Menu assets
│   │   └── Resources/       # Educational content assets
│   ├── components/          # Reusable UI components
│   │   └── ui/             # Base UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── separator.tsx
│   │       ├── switch.tsx
│   │       └── table.tsx
│   ├── lib/                # Utility functions
│   │   └── utils.ts
│   ├── modules/            # Feature-based modules
│   │   └── consultant/     # Consultant module
│   │       ├── components/ # Consultant-specific components
│   │       │   ├── ActiveTag.tsx
│   │       │   ├── AppointmentCard.tsx
│   │       │   ├── Calander.tsx
│   │       │   ├── CustomCheckbox.tsx
│   │       │   ├── DeactivateTag.tsx
│   │       │   ├── EventCard.tsx
│   │       │   ├── LikeButton.tsx
│   │       │   ├── NotificationCard.tsx
│   │       │   ├── RenderInput.tsx
│   │       │   ├── ResourceCard.tsx
│   │       │   └── SessionRequestCard.tsx
│   │       ├── layout/     # Layout components
│   │       │   ├── Footer.tsx
│   │       │   ├── Layout.tsx
│   │       │   ├── Navbar.tsx
│   │       │   ├── Sidebar.tsx
│   │       │   └── MegaMenu/
│   │       │       ├── Aim.tsx
│   │       │       ├── For.tsx
│   │       │       └── Insights.tsx
│   │       └── pages/      # Page components
│   │           ├── BecomeConsultant/
│   │           │   ├── BecomeConsultantForm.tsx
│   │           │   ├── ConsultantForm1.tsx
│   │           │   ├── ConsultantForm2.tsx
│   │           │   └── ConsultantForm3.tsx
│   │           ├── Dashboard.tsx
│   │           ├── LandingPage.tsx
│   │           ├── Popups/  # Modal and popup components
│   │           │   ├── Expertise/
│   │           │   └── ProfileSection/
│   │           ├── SidebarItems/ # Main navigation pages
│   │           │   ├── BusinessProfile.tsx
│   │           │   ├── Calender.tsx
│   │           │   ├── Community.tsx
│   │           │   ├── ConsultantDesk.tsx
│   │           │   ├── Expertise.tsx
│   │           │   ├── Masterclass.tsx
│   │           │   ├── Payments.tsx
│   │           │   ├── Profile.tsx
│   │           │   ├── ProfileTabs/
│   │           │   ├── ReferEarn.tsx
│   │           │   ├── Resource/
│   │           │   ├── Resources.tsx
│   │           │   ├── Reviews.tsx
│   │           │   ├── Sessions.tsx
│   │           │   └── Subscription.tsx
│   │           └── Verification/
│   │               ├── ConsultantKyc/
│   │               └── InPerson/
│   ├── redux/              # State management
│   │   ├── consultant/
│   │   │   └── consultantSlice.ts
│   │   └── store.ts
│   ├── App.tsx            # Main application component
│   ├── App.css
│   ├── index.css          # Global styles
│   ├── main.tsx          # Application entry point
│   └── vite-env.d.ts
├── package.json           # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── eslint.config.js      # ESLint configuration
```

## 🛠️ Technology Stack

### Frontend Framework
- **React 19**: Latest React with concurrent features
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and development server

### UI/UX Libraries
- **Tailwind CSS 4**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icons
- **React Icons**: Icon library
- **Heroicons**: Additional icon set

### State Management & Routing
- **Redux Toolkit**: Predictable state management
- **React Redux**: React bindings for Redux
- **React Router DOM**: Client-side routing

### Authentication & Communication
- **Clerk**: Authentication and user management
- **Stream Video React SDK**: Video communication

### Development Tools
- **ESLint**: Code linting
- **TypeScript ESLint**: TypeScript-specific linting rules

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Aimshala-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 📱 Key Features Breakdown

### Consultant Dashboard
- **Business Profile Management**: Complete profile setup and editing
- **Session Management**: Schedule and manage client sessions
- **Calendar Integration**: Appointment scheduling with calendar view
- **Payment Processing**: Integrated payment management system

### Resource Management
- **Career Library**: Educational content and career guidance
- **College Information**: Database of colleges and institutions
- **Exam Resources**: Preparation materials and guides
- **Scholarship Information**: Available scholarships and applications

### Community Features
- **Networking**: Connect with other consultants
- **Knowledge Sharing**: Share insights and experiences
- **Collaboration Tools**: Work together on projects

### Profile System
- **Multi-tab Profile**: About, Career Feed, Resources, Reviews, Specialties
- **Media Management**: Upload and manage profile media
- **Verification System**: KYC and in-person verification processes

## 🎨 Design System

The application uses a consistent design system with:
- **Color Palette**: Purple-based theme (#94278F primary)
- **Typography**: Poppins font family
- **Components**: Reusable UI components with consistent styling
- **Responsive Design**: Mobile-first approach with breakpoint system

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_STREAM_API_KEY=your_stream_key
```

### Vite Configuration
The project uses Vite with:
- React plugin for JSX support
- Tailwind CSS plugin for styling
- Path aliases for clean imports (`@` points to `src/`)

## 📦 Dependencies

### Core Dependencies
- **React 19**: Latest React with concurrent features
- **TypeScript**: Type safety and better development experience
- **Vite**: Fast build tool and dev server

### UI Libraries
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library

### State Management
- **Redux Toolkit**: Modern Redux with simplified API
- **React Redux**: React bindings for Redux

### Routing & Navigation
- **React Router DOM**: Client-side routing

### Authentication & Communication
- **Clerk**: Complete authentication solution
- **Stream Video**: Video communication SDK

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation in the `/docs` folder

---

**Aimshala** - Empowering consultants to build successful careers and businesses. 