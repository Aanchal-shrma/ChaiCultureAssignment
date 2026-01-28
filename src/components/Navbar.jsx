import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://www.svgrepo.com/show/15490/hot-cup-of-coffee.svg"
            alt="logo"
            className="h-8 w-8"
          />
          <span className="text-xl font-bold">ChaiCulture</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/" className="hover:text-primary">
            Home
          </a>
          <a href="/about" className="hover:text-primary">
            About
          </a>
          <a href="/contact" className="hover:text-primary">
            Contact
          </a>

          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-6">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>

                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
