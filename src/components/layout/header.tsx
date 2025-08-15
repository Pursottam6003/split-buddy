"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, CircleUserRound, IndianRupeeIcon } from "lucide-react"
import { useRef } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const [isReturningUser, setIsReturningUser] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isGuest, setIsGuest] = useState(true) // true = guest, false = authenticated
  const [userName, setUserName] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  // Dropdown close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isDropdownOpen])
  // Dropdown menu actions
  const handleNavigateExpenses = () => {
    router.push("/expenses")
    setIsDropdownOpen(false)
  }
  // Toggle between guest and authenticated user
  const handleSwitchLoginMode = () => {
    setIsGuest((prev) => {
      const next = !prev;
      setUserName(next ? null : "John Doe"); // Example: set name when logging in
      return next;
    });
  }
  const handleLogout = () => {
    setIsDropdownOpen(false)
    // Implement logout logic here
    alert("Logged out!")
  }
  // Remove unused handleSwitchGroups

  useEffect(() => {
    // Check if user has previously used the website
    const storedGroupData = localStorage.getItem("paytogetherGroupData")
    const storedExpenses = localStorage.getItem("paytogetherExpenses")

    if (storedGroupData && storedExpenses) {
      setIsReturningUser(true)
    }
  }, [])

  const handleGetStarted = () => {
    const storedGroupData = localStorage.getItem("paytogetherGroupData")
    const storedExpenses = localStorage.getItem("paytogetherExpenses")

    if (storedGroupData && storedExpenses) {
      // If returning user, go directly to expenses page
      router.push("/expenses")
    } else {
      // If new user, go to group creation
      router.push("/create-group")
    }
  }

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "History", href: "/history" },
    { name: "Engineering", href: "/engineering" },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center mr-2">
                <IndianRupeeIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-blue-600">Splity</span>
              <span className="text-2xl font-bold text-gray-800">.AI</span>


            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium ${
                  pathname === item.href ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>


          {/* User Icon with Dropdown */}
          <div className="hidden md:block relative ml-4">
            <button
              className="flex items-center focus:outline-none"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              aria-label="User menu"
              type="button"
            >
              <CircleUserRound className="h-8 w-8 text-blue-500" />
            </button>
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50 animate-fadeIn"
              >
                <div className="px-4 py-2 border-b border-gray-100">
                  <span className="block text-xs text-gray-500 mb-1">
                    {isGuest ? "Guest User" : userName || "Authenticated User"}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={!isGuest}
                        onChange={handleSwitchLoginMode}
                      />
                      <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {isGuest ? "Switch to Authenticated" : "Switch to Guest"}
                      </span>
                    </label>
                  </div>
                </div>
                <ul className="py-1">
                  <li>
                    <button
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      onClick={handleNavigateExpenses}
                    >
                      Your Expenses
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Mobile menu button & user icon */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
            {/* Mobile user icon with dropdown (click only) */}
            <div className="relative">
              <button
                className="flex items-center focus:outline-none"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                aria-label="User menu"
                type="button"
              >
                <CircleUserRound className="h-7 w-7 text-blue-500" />
              </button>
              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50 animate-fadeIn"
                >
                  <div className="px-4 py-2 border-b border-gray-100">
                    <span className="block text-xs text-gray-500 mb-1">
                      {isGuest ? "Guest User" : userName || "Authenticated User"}
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={!isGuest}
                          onChange={handleSwitchLoginMode}
                        />
                        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                          {isGuest ? "Switch to Authenticated" : "Switch to Guest"}
                        </span>
                      </label>
                    </div>
                  </div>
                  <ul className="py-1">
                    <li>
                      <button
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        onClick={handleNavigateExpenses}
                      >
                        Your Expenses
                      </button>
                    </li>
                    <li>
                      <button
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-3 space-y-1 animate-fadeIn">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <Button onClick={handleGetStarted} className="w-full bg-blue-600 hover:bg-blue-700">
                {isReturningUser ? "My Expenses" : "Get Started"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

