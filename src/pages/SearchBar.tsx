import React, { useState, useEffect } from 'react'
import { Search, Mic } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

// Mock IPC sections for demonstration
const ipcSections = [
  { number: "302", description: "Punishment for murder" },
  { number: "307", description: "Attempt to murder" },
  { number: "354", description: "Assault of criminal force to woman with intent to outrage her modesty" },
  { number: "420", description: "Cheating and dishonestly inducing delivery of property" },
  // Add more sections as needed
]

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [suggestions, setSuggestions] = useState<typeof ipcSections>([])

  useEffect(() => {
    if (searchQuery) {
      const filteredSections = ipcSections.filter(section =>
        section.number.includes(searchQuery) || 
        section.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setSuggestions(filteredSections)
    } else {
      setSuggestions([])
    }
  }, [searchQuery])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
    // Implement actual search functionality here
  }

  const toggleRecording = () => {
    if (!isRecording) {
      startVoiceRecognition()
    } else {
      stopVoiceRecognition()
    }
    setIsRecording(!isRecording)
  }

  const startVoiceRecognition = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition()
      recognition.continuous = false
      recognition.interimResults = false

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setSearchQuery(transcript)
        stopVoiceRecognition()
      }

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event.error)
        stopVoiceRecognition()
      }

      recognition.start()
    } else {
      console.error('Speech recognition not supported')
    }
  }

  const stopVoiceRecognition = () => {
    setIsRecording(false)
  }

  return (
    <div className="mb-8">
      <form onSubmit={handleSearch} className="flex items-center max-w-2xl mx-auto">
        <Input
          type="text"
          placeholder="Search for legal information..."
          className="rounded-r-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button type="submit" className="rounded-l-none">
          <Search className="h-5 w-5 mr-2" />
          Search
        </Button>
        <Button
          type="button"
          variant={isRecording ? "destructive" : "secondary"}
          className="ml-2"
          onClick={toggleRecording}
        >
          <Mic className="h-5 w-5" />
          <span className="sr-only">{isRecording ? "Stop" : "Start"} voice input</span>
        </Button>
      </form>
      {suggestions.length > 0 && (
        <Card className="mt-4 max-w-2xl mx-auto">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Suggested IPC Sections:</h3>
            <ul className="space-y-2">
              {suggestions.map((section) => (
                <li key={section.number} className="flex">
                  <span className="font-medium mr-2">Section {section.number}:</span>
                  <span>{section.description}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default SearchBar