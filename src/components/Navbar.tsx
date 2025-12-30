import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ShoppingCart, ChevronDown, Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm shadow-gray-400">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6">
        <div className="text-xl font-bold text-gray-900">
          SkillUp
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-1 text-sm">
              Explore
              <ChevronDown size={14} />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="start"
            className="w-72 rounded-md bg-white p-3 shadow-lg border-none"
          >
            <p className="px-2 py-1 text-xs font-semibold text-gray-400">
              EXPLORE BY GOAL
            </p>

            <DropdownMenuItem>Learn AI</DropdownMenuItem>
            <DropdownMenuItem>Launch a new career</DropdownMenuItem>
            <DropdownMenuItem>Prepare for a certification</DropdownMenuItem>
            <DropdownMenuItem>Practice with Role Play</DropdownMenuItem>

            <DropdownMenuSeparator className="my-2" />

            <p className="px-2 py-1 text-xs font-semibold text-gray-400">
              CATEGORIES
            </p>

            <DropdownMenuItem>Development</DropdownMenuItem>
            <DropdownMenuItem>Business</DropdownMenuItem>
            <DropdownMenuItem>Finance & Accounting</DropdownMenuItem>
            <DropdownMenuItem>IT & Software</DropdownMenuItem>
            <DropdownMenuItem>Design</DropdownMenuItem>
            <DropdownMenuItem>Marketing</DropdownMenuItem>
            <DropdownMenuItem>Health & Fitness</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <Input
            placeholder="Search for courses"
            className="pl-10 rounded-full"
          />
        </div>

        {/* Right */}
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <ShoppingCart size={18} />
          </Button>

          <Button variant="ghost">Login</Button>
          <Button className="rounded-full">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
