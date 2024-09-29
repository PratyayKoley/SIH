import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SearchBar from './SearchBar'
import LegalInfoTab from './LegalInfoTab'
import FIRDraftingTab from './FIRDraftingTab'
import CaseLawsTab from './CaseLawsTab'
import QuickLinksNotifications from './QuickLinksNotifications'

const MainContent: React.FC = () => {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <SearchBar />
      <Tabs defaultValue="legal-info" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="legal-info">Legal Information</TabsTrigger>
          <TabsTrigger value="fir-drafting">FIR Drafting</TabsTrigger>
          <TabsTrigger value="case-laws">Case Laws</TabsTrigger>
        </TabsList>
        <TabsContent value="legal-info">
          <LegalInfoTab />
        </TabsContent>
        <TabsContent value="fir-drafting">
          <FIRDraftingTab />
        </TabsContent>
        <TabsContent value="case-laws">
          <CaseLawsTab />
        </TabsContent>
      </Tabs>
      <QuickLinksNotifications />
    </main>
  )
}

export default MainContent