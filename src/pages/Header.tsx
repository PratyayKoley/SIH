import React from 'react'
import { Bell, Menu, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from '../ThemeContext'

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Home</DropdownMenuItem>
              <DropdownMenuItem>About</DropdownMenuItem>
              <DropdownMenuItem>Contact</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">LegalAssist AI</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</a></li>
            <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a></li>
            <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex items-center space-x-2">
            <Switch
              checked={isDarkMode}
              onCheckedChange={toggleTheme}
              aria-label="Toggle dark mode"
            />
            {isDarkMode ? (
              <Moon className="h-4 w-4 text-gray-400" />
            ) : (
              <Sun className="h-4 w-4 text-yellow-500" />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header