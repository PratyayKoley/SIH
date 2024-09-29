import React, { useState, useEffect } from 'react'
import { FileText, List } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

// Mock IPC sections for demonstration
const ipcSections = [
  { number: "302", description: "Punishment for murder" },
  { number: "307", description: "Attempt to murder" },
  { number: "354", description: "Assault of criminal force to woman with intent to outrage her modesty" },
  { number: "420", description: "Cheating and dishonestly inducing delivery of property" },
  { number: "376", description: "Punishment for rape" },
  { number: "392", description: "Punishment for robbery" },
  // Add more sections as needed
]

const FIRDraftingTab: React.FC = () => {
  const [incident, setIncident] = useState('')
  const [suggestedSections, setSuggestedSections] = useState<typeof ipcSections>([])
  const [generatedFIR, setGeneratedFIR] = useState('')
  const [isReportGenerated, setIsReportGenerated] = useState(false);
  const [savedFIRs, setSavedFIRs] = useState<string[]>([])

  useEffect(() => {
    // Load saved FIRs from local storage when component mounts
    const loadedFIRs = localStorage.getItem('savedFIRs')
    if (loadedFIRs) {
      setSavedFIRs(JSON.parse(loadedFIRs))
    }
  }, [])

  useEffect(() => {
    if (incident) {
      const suggestions = ipcSections.filter(section =>
        incident.toLowerCase().includes(section.description.toLowerCase())
      )
      setSuggestedSections(suggestions)
    } else {
      setSuggestedSections([])
    }
  }, [incident])

  const generateFIR = () => {
    const sections = suggestedSections.map(s => s.number).join(', ')
    const fir = `
First Information Report (FIR)

Date: ${new Date().toLocaleDateString()}
Time: ${new Date().toLocaleTimeString()}

Incident Description:
${incident}

Applicable IPC Sections: ${sections}

This is to report that an incident as described above has occurred. Based on the initial information provided, the following sections of the Indian Penal Code may be applicable: ${sections}. A thorough investigation will be conducted to ascertain the full details and circumstances of the incident.

This FIR is being registered for further action as per the law.

Signature of the Reporting Officer: ____________________

Note: This is a computer-generated FIR draft and may require further verification and processing by the appropriate authorities.
    `
    setGeneratedFIR(fir.trim())
    setIsReportGenerated(true)
  }

  const saveFIR = () => {
    if (generatedFIR) {
      const updatedFIRs = [...savedFIRs, generatedFIR]
      setSavedFIRs(updatedFIRs)
      localStorage.setItem('savedFIRs', JSON.stringify(updatedFIRs))
      setGeneratedFIR('')
      setIncident('')
      setSuggestedSections([])
      setIsReportGenerated(false)
      toast({
        title: "FIR Saved",
        description: "The FIR has been successfully saved.",
      })
    } else {
      toast({
        title: "Error",
        description: "No FIR to save. Please generate an FIR first.",
        variant: "destructive",
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>FIR Drafting Assistant</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Describe the incident here to get suggestions for FIR drafting..."
          value={incident}
          onChange={(e) => setIncident(e.target.value)}
          className="min-h-[100px]"
        />
        {suggestedSections.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold mb-2">Suggested IPC Sections:</h3>
            <div className="flex flex-wrap gap-2">
              {suggestedSections.map((section) => (
                <Badge key={section.number} variant="secondary">
                  Section {section.number}: {section.description}
                </Badge>
              ))}
            </div>
          </div>
        )}
        <div className="flex space-x-2">
          <Button onClick={generateFIR}>
            <FileText className="h-5 w-5 mr-2" />
            Generate FIR Draft
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <List className="h-5 w-5 mr-2" />
                View Saved FIRs
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Saved FIRs</DialogTitle>
              </DialogHeader>
              <ScrollArea className="mt-4 max-h-[60vh]">
                <div className="space-y-4 pr-4">
                  {savedFIRs.map((fir, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <pre className="whitespace-pre-wrap text-sm">{fir}</pre>
                      </CardContent>
                    </Card>
                  ))}
                  {savedFIRs.length === 0 && (
                    <p>No saved FIRs yet.</p>
                  )}
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>
        {generatedFIR && (
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Generated FIR Draft</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="whitespace-pre-wrap text-sm">{generatedFIR}</pre>
            </CardContent>
          </Card>
        )}
        {isReportGenerated && <Button onClick={saveFIR}>Save FIR</Button>}
      </CardContent>
    </Card>
  )
}

export default FIRDraftingTab