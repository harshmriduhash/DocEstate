import { create } from 'zustand'

export interface Document {
  id: string
  name: string
  uploadedAt: string
  status: 'processing' | 'completed' | 'error'
  extractedData?: {
    buyer: string
    seller: string
    agreementDate: string
    propertyAddress: string
    rent: string
    lockInPeriod: string
    terminationClause: string
  }
  summary?: string
  fileUrl?: string
}

interface AppState {
  documents: Document[]
  currentDocument: Document | null
  isLoading: boolean
  user: {
    isAuthenticated: boolean
    name: string
    email: string
  } | null
  
  // Actions
  addDocument: (document: Document) => void
  updateDocument: (id: string, updates: Partial<Document>) => void
  setCurrentDocument: (document: Document | null) => void
  setLoading: (loading: boolean) => void
  setUser: (user: AppState['user']) => void
  logout: () => void
}

export const useAppStore = create<AppState>((set) => ({
  documents: [],
  currentDocument: null,
  isLoading: false,
  user: null,

  addDocument: (document) =>
    set((state) => ({
      documents: [document, ...state.documents],
    })),

  updateDocument: (id, updates) =>
    set((state) => ({
      documents: state.documents.map((doc) =>
        doc.id === id ? { ...doc, ...updates } : doc
      ),
    })),

  setCurrentDocument: (document) =>
    set({ currentDocument: document }),

  setLoading: (loading) =>
    set({ isLoading: loading }),

  setUser: (user) =>
    set({ user }),

  logout: () =>
    set({ user: null, documents: [], currentDocument: null }),
})) 