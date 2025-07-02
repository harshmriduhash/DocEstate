# DocEstate - Document Intelligence for Real Estate

A modern SaaS platform that helps real estate professionals extract insights from documents using AI-powered intelligence.

## 🚀 Features

### Core Functionality
- **Document Upload**: Drag & drop PDF upload with file validation
- **Smart Extraction**: Automatically extract key information from real estate documents
- **PDF Viewer**: Built-in PDF viewer with sidebar insights
- **AI Summaries**: Generate comprehensive document summaries
- **Export Capabilities**: Download summaries in multiple formats
- **Dashboard**: Overview of all uploaded documents with status tracking

### Extracted Information
- Buyer/Seller names and details
- Agreement dates
- Property addresses
- Rent amounts and payment terms
- Lock-in periods
- Termination clauses
- Key contract terms

### Technical Features
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Real-time Processing**: Live status updates during document processing
- **Toast Notifications**: User-friendly feedback for all actions
- **Loading States**: Smooth loading experiences with spinners and skeletons
- **Authentication**: Sign up/sign in with social login options

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **PDF Viewer**: react-pdf
- **Icons**: Lucide React
- **Notifications**: react-hot-toast
- **TypeScript**: Full type safety
- **UI Components**: Custom component library

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <https://github.com/harshmriduhash/DocEstate>
   cd docestate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

```
docestate/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication pages
│   │   ├── signin/        # Sign in page
│   │   └── signup/        # Sign up page
│   ├── dashboard/         # Main dashboard
│   ├── document/[id]/     # Document viewer
│   ├── upload/            # Document upload page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # Reusable UI components
│   └── ui/               # Base UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       └── LoadingSpinner.tsx
├── lib/                  # Utility functions and stores
│   └── store.ts          # Zustand store
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## 🎯 Pages Overview

### Landing Page (`/`)
- Hero section with product introduction
- Feature highlights
- Call-to-action buttons
- Navigation to sign up/sign in

### Authentication (`/auth/signin`, `/auth/signup`)
- Clean, modern authentication forms
- Social login options (Google, Twitter)
- Form validation and error handling
- Responsive design

### Dashboard (`/dashboard`)
- Overview of uploaded documents
- Statistics cards (total, completed, processing)
- Document list with status indicators
- Quick actions for each document

### Upload (`/upload`)
- Drag & drop file upload
- File type validation (PDF only)
- Upload progress indication
- Feature highlights

### Document Viewer (`/document/[id]`)
- PDF viewer with navigation controls
- Sidebar with extracted information
- Summary panel
- Download functionality

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Add any environment variables here
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Custom color palette (primary, secondary)
- Inter font family
- Responsive breakpoints
- Custom utilities

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔮 Future Enhancements

### Backend Integration
- FastAPI backend with LLM integration
- Real document processing
- User authentication and authorization
- File storage and management

### Advanced Features
- Document comparison
- Template matching
- Advanced search and filtering
- Team collaboration
- API access for integrations

### UI/UX Improvements
- Dark mode support
- Advanced PDF annotations
- Document versioning
- Real-time collaboration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@docestate.com or create an issue in the repository.

---

**Note**: This is a frontend-only implementation with mock data. The backend integration will be added in future iterations. 
