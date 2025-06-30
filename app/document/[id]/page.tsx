import React, { useState } from 'react'
import Link from 'next/link'
import { Document, Page, pdfjs } from 'react-pdf'
import { FileText, ArrowLeft, Download, User, Calendar, MapPin, DollarSign, Clock, FileX } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

// Mock data for demonstration
const mockDocument = {
  id: '1',
  name: 'Rental Agreement - 123 Main St.pdf',
  uploadedAt: '2024-01-15T10:30:00Z',
  status: 'completed' as const,
  extractedData: {
    buyer: 'John Smith',
    seller: 'ABC Properties LLC',
    agreementDate: '2024-01-15',
    propertyAddress: '123 Main Street, New York, NY 10001',
    rent: '$2,500/month',
    lockInPeriod: '12 months',
    terminationClause: '30 days notice required'
  },
  summary: `This rental agreement is between John Smith (Tenant) and ABC Properties LLC (Landlord) for the property located at 123 Main Street, New York, NY 10001. The lease term is 12 months with a monthly rent of $2,500. The agreement includes standard terms for utilities, maintenance, and termination with 30 days notice required. The tenant is responsible for maintaining the property in good condition and paying utilities. The landlord is responsible for major repairs and structural maintenance.`
}

export default function DocumentViewer({ params }: { params: { id: string } }) {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [isLoading, setIsLoading] = useState(true)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setIsLoading(false)
  }

  const downloadSummary = () => {
    // Mock download functionality
    const element = document.createElement('a')
    const file = new Blob([mockDocument.summary || ''], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = `${mockDocument.name.replace('.pdf', '')}_summary.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Dashboard
                </Button>
              </Link>
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">DocEstate</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={downloadSummary}>
                <Download className="mr-2 h-4 w-4" />
                Download Summary
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Extracted Data */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Document Info */}
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">Document Info</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Name</p>
                    <p className="text-sm text-gray-900">{mockDocument.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Uploaded</p>
                    <p className="text-sm text-gray-900">
                      {new Date(mockDocument.uploadedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Status</p>
                    <p className="text-sm text-green-600 font-medium">Completed</p>
                  </div>
                </CardContent>
              </Card>

              {/* Extracted Entities */}
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">Extracted Data</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <User className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Buyer/Tenant</p>
                      <p className="text-sm text-gray-900">{mockDocument.extractedData.buyer}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <User className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Seller/Landlord</p>
                      <p className="text-sm text-gray-900">{mockDocument.extractedData.seller}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-purple-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Agreement Date</p>
                      <p className="text-sm text-gray-900">{mockDocument.extractedData.agreementDate}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-red-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Property Address</p>
                      <p className="text-sm text-gray-900">{mockDocument.extractedData.propertyAddress}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <DollarSign className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Rent</p>
                      <p className="text-sm text-gray-900">{mockDocument.extractedData.rent}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-orange-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Lock-in Period</p>
                      <p className="text-sm text-gray-900">{mockDocument.extractedData.lockInPeriod}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <FileX className="h-5 w-5 text-red-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Termination Clause</p>
                      <p className="text-sm text-gray-900">{mockDocument.extractedData.terminationClause}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Summary */}
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900">Summary</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {mockDocument.summary}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content - PDF Viewer */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Document Viewer</h3>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                      disabled={pageNumber <= 1}
                    >
                      Previous
                    </Button>
                    <span className="text-sm text-gray-600">
                      Page {pageNumber} of {numPages}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
                      disabled={pageNumber >= numPages}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  {isLoading && (
                    <div className="flex items-center justify-center h-64">
                      <LoadingSpinner size="lg" />
                    </div>
                  )}
                  
                  {/* Mock PDF placeholder - in real app, you'd use actual PDF */}
                  <div className="w-full max-w-2xl bg-gray-100 rounded-lg p-8 text-center">
                    <FileText className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                    <p className="text-gray-600 mb-2">PDF Viewer Placeholder</p>
                    <p className="text-sm text-gray-500">
                      In a real implementation, this would display the actual PDF using react-pdf
                    </p>
                    <div className="mt-4 p-4 bg-white rounded border">
                      <p className="text-sm text-gray-700">
                        <strong>Document:</strong> {mockDocument.name}<br/>
                        <strong>Pages:</strong> 3 (estimated)<br/>
                        <strong>Status:</strong> Ready for viewing
                      </p>
                    </div>
                  </div>
                  
                  {/* Uncomment this when you have actual PDF files */}
                  {/* 
                  <Document
                    file="/path-to-your-pdf.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={(error) => {
                      console.error('Error loading PDF:', error)
                      setIsLoading(false)
                    }}
                  >
                    <Page
                      pageNumber={pageNumber}
                      width={Math.min(window.innerWidth * 0.6, 800)}
                    />
                  </Document>
                  */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 