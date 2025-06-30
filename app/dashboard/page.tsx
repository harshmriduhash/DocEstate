import React from 'react'
import Link from 'next/link'
import { FileText, Upload, Eye, Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

// Mock data for demonstration
const mockDocuments = [
  {
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
    }
  },
  {
    id: '2',
    name: 'Purchase Agreement - 456 Oak Ave.pdf',
    uploadedAt: '2024-01-14T14:20:00Z',
    status: 'processing' as const
  },
  {
    id: '3',
    name: 'Lease Extension - 789 Pine Rd.pdf',
    uploadedAt: '2024-01-13T09:15:00Z',
    status: 'completed' as const,
    extractedData: {
      buyer: 'Sarah Johnson',
      seller: 'XYZ Real Estate',
      agreementDate: '2024-01-13',
      propertyAddress: '789 Pine Road, Los Angeles, CA 90210',
      rent: '$3,200/month',
      lockInPeriod: '24 months',
      terminationClause: '60 days notice required'
    }
  }
]

function getStatusIcon(status: string) {
  switch (status) {
    case 'completed':
      return <CheckCircle className="h-5 w-5 text-green-500" />
    case 'processing':
      return <Clock className="h-5 w-5 text-yellow-500" />
    case 'error':
      return <AlertCircle className="h-5 w-5 text-red-500" />
    default:
      return <Clock className="h-5 w-5 text-gray-400" />
  }
}

function getStatusText(status: string) {
  switch (status) {
    case 'completed':
      return 'Completed'
    case 'processing':
      return 'Processing'
    case 'error':
      return 'Error'
    default:
      return 'Unknown'
  }
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">DocEstate</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/upload">
                <Button variant="primary" size="sm">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Document
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Manage and analyze your real estate documents</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Documents</p>
                  <p className="text-2xl font-bold text-gray-900">{mockDocuments.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {mockDocuments.filter(doc => doc.status === 'completed').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Processing</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {mockDocuments.filter(doc => doc.status === 'processing').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Documents List */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900">Recent Documents</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockDocuments.map((document) => (
                <div
                  key={document.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <FileText className="h-8 w-8 text-gray-400" />
                    <div>
                      <h3 className="font-medium text-gray-900">{document.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(document.uploadedAt).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          {getStatusIcon(document.status)}
                          <span className="ml-1">{getStatusText(document.status)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Link href={`/document/${document.id}`}>
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 