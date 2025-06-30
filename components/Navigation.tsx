import React from 'react'
import Link from 'next/link'
import { FileText, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface NavigationProps {
  showAuth?: boolean
  showUpload?: boolean
}

export function Navigation({ showAuth = true, showUpload = false }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">DocEstate</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {showUpload && (
              <Link href="/upload">
                <Button variant="primary" size="sm">
                  Upload Document
                </Button>
              </Link>
            )}
            {showAuth && (
              <>
                <Link href="/auth/signin">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button variant="primary" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {showUpload && (
                <Link href="/upload">
                  <Button variant="primary" size="sm" className="w-full justify-center">
                    Upload Document
                  </Button>
                </Link>
              )}
              {showAuth && (
                <div className="space-y-2 pt-2">
                  <Link href="/auth/signin">
                    <Button variant="ghost" size="sm" className="w-full justify-center">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button variant="primary" size="sm" className="w-full justify-center">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 