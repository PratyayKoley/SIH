import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const LegalInfoTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Legal Information</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300">
          Enter a legal query or describe an incident to get relevant information, suggested sections, and case laws.
        </p>
      </CardContent>
    </Card>
  )
}

export default LegalInfoTab