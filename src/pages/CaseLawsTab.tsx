import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const CaseLawsTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Case Laws</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300">
          Search and browse relevant case laws and landmark judgments.
        </p>
      </CardContent>
    </Card>
  )
}

export default CaseLawsTab