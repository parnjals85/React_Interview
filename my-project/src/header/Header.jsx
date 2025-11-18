import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from '../header/Logo.png'
import { Link } from "react-router-dom";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    "Create",
    "Tips For Creation",
    "Ideas",
    "Explore",
    "Create Image",
    "Contact"
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full px-10 py-5 bg-white/80 backdrop-blur-lg shadow-md flex justify-between items-center sticky top-0 z-50 border-b border-gray-200"
    >
      {/* Logo */}
      <div className="text-3xl font-extrabold tracking-tight cursor-pointer select-none">
        <Link to="/"><img src={Logo}className="h-10 w-10 md:h-12 md:w-12 rounded-full"/></Link>      
        </div>
        <div className="">Login And SignUp </div>
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-[17px] font-semibold">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer transition ${item === "Create" ? "text-red-600" : "hover:text-red-600"}`}
          >
            {item}
          </motion.li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[72px] left-0 w-full bg-white/90 backdrop-blur-xl shadow-lg md:hidden p-5"
          >
            <ul className="flex flex-col gap-6 text-lg font-medium">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer transition ${item === "Create" ? "text-purple-600" : "hover:text-blue-600"}`}
                  onClick={() => setOpen(false)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
);
}