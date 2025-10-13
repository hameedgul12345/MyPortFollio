// ... existing imports ...
import { 
    Github, 
    Linkedin, 
    Facebook, 
    Instagram, 
    Download, 
    Mail,
    Phone, 
    MapPin,
    ExternalLink,
    Code,
    Palette,
    Users,
    Award,
    Calendar,
    Star,
    Home, 
    User, 
    Wrench, 
    Zap, 
    Folder,
    Menu, // Add this import
    X // Add this import
  } from "lucide-react";
  
  function Page() {
    const [activeSection, setActiveSection] = useState("Home");
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Add this state
  
    // ... existing useEffect and functions ...
  
    return (
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen w-full flex flex-row">
        {/* Mobile Navbar */}
        <div className="md:hidden fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <div className="flex items-center">
              <Image 
                src="/images/Profilelogo1.png" 
                alt="Logo" 
                width={120} 
                height={50} 
                className="h-8 w-auto"
              />
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
  
          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="bg-white border-t border-gray-200 shadow-lg">
              <nav className="px-4 py-2">
                {links.map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveSection(link.name);
                      setIsMobileMenuOpen(false);
                      scrollToSection(link.name);
                    }}
                    className={`w-full p-3 px-4 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-3 mb-2 ${
                      activeSection === link.name
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                    }`}
                  >
                    <span className="text-lg">
                      <link.icon className="w-5 h-5" />
                    </span>
                    <span className="font-medium">{link.name}</span>
                  </button>
                ))}
              </nav>
              
              {/* Mobile Contact Info */}
              <div className="px-4 py-4 bg-gray-50 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3 text-sm">Quick Contact</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-3 h-3" />
                    <span>hameed@example.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-3 h-3" />
                    <span>+1 234 567 890</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-3 h-3" />
                    <span>Pakistan</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
  
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-[20%] fixed top-0 left-0 bg-white/80 backdrop-blur-md h-screen p-6 shadow-xl border-r border-gray-200 z-50">
          {/* ... existing sidebar content ... */}
        </div>
  
        {/* Main Content - Add top padding for mobile navbar */}
        <div className="md:w-[80%] w-[100%] md:ml-[20%] flex flex-col min-h-screen pt-16 md:pt-0">
          {/* ... rest of your existing content ... */}
        </div>
      </div>
    );
  }