import { useState } from 'react'
//import { Button } from "@/components/ui/button"
import { LogOut, Menu } from "lucide-react"
import LogoutButton from './LogoutButton.jsx' 
// import { useAuthContext } from '../context/AuthContext';

export default function Header({ userName = "John Doe", userImage = "/vite.svg" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const { authUser } = useAuthContext();
  return (
    <header className="w-full bg-gradient-to-r from-primary/90 to-primary text-primary-foreground shadow-lg bg-[#141d4d]">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="/">
              <img src="/imageGeneratorIcon.png" alt="Logo" width={48} height={48} className=" transition-transform hover:scale-110" />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="/profile" className="flex items-center space-x-3 group hover:cursor-pointer hover:bg-[#26337e] hover:rounded-lg p-2">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary-foreground/30 transition-all duration-300 group-hover:ring-primary-foreground/60">
                <img
                  src={userImage}
                  alt={`${userName}'s profile`}
                  width={40}
                  height={40}
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg text-white font-medium">{userName}</span>
              </div>
            </a>
            <LogoutButton />
          </div>

          {/* Mobile menu button */}
          <button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 py-4 border-t border-primary-foreground/10 md:hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={userImage}
                    alt={`${userName}'s profile`}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{userName}</span>
                </div>
              </div>
              
                <LogoutButton />
              
            </div>
          </div>
        )}
      </div>
    </header>
  )
}