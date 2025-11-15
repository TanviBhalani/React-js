import { ShoppingBag } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
    const [mobileMenu, setMobilemenu] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("cart")) || []
        setCartItems(stored)
    }, [])

    useEffect(() => {
        const onstorage = () => setCartItems(JSON.parse(localStorage.getItem("cart")) || [])
        window.addEventListener("storage", onstorage)
        return () => window.removeEventListener("storage", onstorage)
    }, [])

    return (
        <div>
            <div className="bg-[#f3efe4] text-black py-4 px-6 border-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <button onClick={() => setMobilemenu(!mobileMenu)} className='lg:hidden text-xl text-black'>☰</button>
                        <ul className={`${mobileMenu ? "block" : "hidden"} lg:flex gap-6`}>
                            <li><button onClick={() => navigate("/")}>Home</button></li>
                            <li><button onClick={() => navigate("/shop")}>Shop</button></li>
                        </ul>
                    </div>

                    <div className="text-4xl font-medium font-serif cursor-pointer" onClick={() => navigate("/")}>
                        Mitti.
                    </div>

                    <div className="flex items-center gap-6">
                        <button onClick={() => setIsSearchOpen(!isSearchOpen)}>Search</button>

                        {isSearchOpen && <div className="p-4 bg-white">Search panel!</div>}

                        <button>User</button>

                        <Link to="/cart" className="flex items-center gap-1">
                            <div className="relative">
                                <ShoppingBag className="cursor-pointer" />
                                <span className="absolute -top-2 -right-2 text-xs bg-[#6e623a] text-white rounded-full w-4 h-4 flex items-center justify-center">
                                    {cartItems.length}
                                </span>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
