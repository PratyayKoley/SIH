import React from 'react'
import { Bell, BookOpen, FileText, Scale } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const QuickLinksNotifications: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <Card>
        <CardHeader>
          <CardTitle>Quick Links</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center">
                <BookOpen className="h-5 w-5 mr-2" /> Case Laws
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center">
                <FileText className="h-5 w-5 mr-2" /> Draft FIR
              </a>
            </li>
            <li>
              <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center">
                <Scale className="h-5 w-5 mr-2" /> Legal Updates
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <Bell className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
              <span>New legal update available</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <Bell className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
              <span>Reminder: Case hearing tomorrow</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default QuickLinksNotifications