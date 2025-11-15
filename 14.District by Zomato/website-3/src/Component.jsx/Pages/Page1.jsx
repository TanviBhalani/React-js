import React from 'react'
import Card1 from '../Cards/Card1';
import Card2 from '../Cards/Card2';
import Card3 from '../Cards/Card3';

export default function Page1() {
    const cardinfo = [
        { id: 1, image: "/images/card1.jpg", time: "Fri, 03 Oct, 9:00 PM", title: "Helena Hauff | New Delhi", location: "Odella, Delhi/NCR", price: "₹800 onwards" },
        { id: 2, image: "/images/card2.jpg", time: "22 Nov - 23 Nov, 3PM", title: "Rolling Loud India | Hip-Hop Festival | Karan Aujla, Central Cee", location: "Loud Park, Kharghar, Mumbai", price: "₹700 onwards" },
        { id: 3, image: "/images/card3.jpg", time: "Wed, 29 Oct, 6:30 PM", title: "Enrique Iglesias Live in Concert - New Show", location: "MMRDA Grounds, Mumbai", price: "₹7,000 onwards" },
        { id: 4, image: "/images/card4.png", time: "Sat, 29 Nov, 5:00 PM", title: "Zamna India | Gurugram", location: "Venue to be announced, Gurugram", price: "₹3,500 onwards" },
        { id: 5, image: "/images/card5.jpg", time: "Fri, 31 Oct, 7:00 PM", title: "Home In the Heart with Krishna Das | Delhi", location: "Brahmkamal Hall - Auditorium, Delhi", price: "₹3,999 onwards" },
        { id: 6, image: "/images/card6.jpg", time: "Sat, 8 Nov, 8:00 PM", title: "Papon | Shaam-E-Mehfil | Delhi", location: "Zorba Entertainment Private Limited, Delhi", price: "₹1,999 onwards" },
        { id: 7, image: "/images/card7.jpg", time: "Sun, 23 Nov, 10:00 PM", title: "Royal Enfield Motoverse 2025", location: "Hill Top Goa, Goa", price: "₹3,400 onwards" },
        { id: 8, image: "/images/card8.png", time: "Sun, 9 Nov, 7:00 PM", title: "Akon India Tour 2025 | Delhi", location: "Gate No 14, Jawaharlal Nehru Stadium, Delhi", price: "₹2,900 onwards" },
        { id: 9, image: "/images/card9.jpg", time: "Sat, 17 Jan, 2:00 PM", title: "Goa Sunsplash 2026", location: "Thalassa Beach Boutique Resort, Goa", price: "₹4,000 onwards" },
        { id: 10, image: "/images/card10.jpg", time: "Sat, 8 Nov, 7:00 PM", title: "Chal Man Vrindavan ft. Acyuta Gopi Live | Delhi", location: "Chhatrasal Stadium, Delhi", price: "₹1,199 onwards" },
    ];

    const cardinfo2 = [
        { id: 1, image: "/images/small1.jpg", title: "Jolly LLB 3", discription: "UA16+ | Hindi" },
        { id: 2, image: "/images/small2.jpg", title: "Mirai", discription: "UA16+ | Hindi and 1 more" },
        { id: 3, image: "/images/small3.jpg", title: "Ajey: The untold of a Yogi", discription: "UA13+ | Hindi" },
        { id: 4, image: "/images/small4.jpg", title: "The Bengal Files", discription: "A | Hindi" },

    ];

    const cardinfo3 =[
        { id: 1, image: "/images/card11.jpg", time: "Mon, 15 Dec, 1:30 PM", title: "G.O.A.T India Tour 2025 | Lionel Messi | Delhi", location: "Mon, 15 Dec, 1:30 PM", price: "₹1,200 onwards" },
        { id: 2, image: "/images/card12.png", time: "Fri, 21 Nov, 12:00 PM", title: "Royal Enfield Motoverse 2025", location: "Hill Top Goa, Goa", price: "₹3,499 onwards" },
        { id: 3, image: "/images/card13.png", time: "Sun, 9 Nov, 7:00 PM", title: "Akon India Tour 2025 | Delhi", location: "Jawaharlal Nehru Stadium, Delhi", price: "₹2,800 onwards" },
        { id: 4, image: "/images/card14.jpg", time: "Sun, 23 Nov, 7:00 PM", title: "Radhika Das India Tour 2025 | Ahmedabad", location: "SAVANNA Party Lawn, Ahmedabad", price: "₹1,900 onwards" },
        { id: 5, image: "/images/card15.jpg", time: "Sat, 29 Nov, 5:00 PM", title: "Zamna India | Gurugram", location: "Odella, Delhi/NCR", price: "₹3,400 onwards" },
        { id: 6, image: "/images/card16.jpg", time: "Sun, 5 Oct – Thu, 16 Oct", title: "Jack N Joey | TombEscape Mystery Room", location: "JACK N JOEY, Delhi", price: "₹800 onwards" },
        { id: 7, image: "/images/card17.jpg", time: "sat,October 11 | 7:30PM", title: "70th Hyundai Filmfare Awards 2025 with Gujarat Tourism", location: "EKA Arena, Ahmedabad", price: "₹5,000 onwards" },
        { id: 8, image: "/images/card18.jpg", time: "Sat, 11 Oct, 10:00 AM", title: "Blitz & Brews - Chess over Coffee", location: "Café Caffeinated, Noida", price: "₹999 onwards" },
        { id: 9, image: "/images/card19.jpg", time: "Sun, 12 Oct, 12:30 PM", title: "Craft Your Scent: A Perfume Workshop with Kastoor", location: "Travancore Palace, Delhi", price: "₹2,500 onwards" },
        { id: 10, image: "/images/card20.jpg", time: "Sat, 6 Dec, 7:00 PM", title: "Sunidhi Chauhan I Am Home | Live in Pune", location: "Odella, Delhi/NCR", price: "₹800 onwards" },
        { id: 11, image: "/images/card21.png", time: "Fri, 03 Oct, 9:00 PM", title: "G.O.A.T India Tour 2025 | Lionel Messi | Delhi", location: "Arun Jaitley Stadium, Delhi", price: "₹800 onwards" },
    ]

    const cardinfo4 = [
        { id: 1, image: "/images/small5.jpg", title: "Jolly LLB 3", discription: "UA16+ | Hindi" },
        { id: 2, image: "/images/small8.jpg", title: "Mirai", discription: "UA16+ | Hindi and 1 more" },
        { id: 3, image: "/images/small7.jpg", title: "The Conjuring", discription: "UA13+ | Hindi" },
        { id: 4, image: "/images/small6.jpg", title: "Demon slayers", discription: "UA16+ | English" },
    ];

    const cardinfo5 =[
        { id: 1, image: "/images/card22.png", time: "Mon, 20 Oct, 11:30 PM", title: "After Hours- A Stand Up Show for Night Owls", location: "The Project Comedy, Gurugram", price: "₹800 onwards" },
        { id: 2, image: "/images/card23.jpg", time: "Mon, 6 Oct, 9:00 PM", title: "Adult Jokes in Gurgaon", location: "Cafe Tuya Te, Gurugram", price: "₹999 onwards" },
        { id: 3, image: "/images/card24.jpg", time: "Fri, 10 Oct, 6:00 PM", title: "The Stupid Salesman | Delhi | India Tour", location: "Odella, Delhi/NCR", price: "₹800 onwards" },
        { id: 4, image: "/images/card25.jpg", time: "Every Sun, Fri & Sat", title: "Delhi's Finest Standup", location: "LIGHT ROOM, Delhi", price: "₹600 onwards" },
        { id: 5, image: "/images/card26.jpg", time: "Fri, 05 Oct", title: "The Late Night Comedy Show", location: "Guftagu Cafe, Gurugram", price: "₹799 onwards" },
        { id: 6, image: "/images/card27.png", time: "Sun, 5 Oct, Multiple slots", title: "Noida Comedy Bar", location: "Hitchin Bistro, Noida", price: "₹649 onwards" },
        { id: 7, image: "/images/card28.jpg", time: "Sun, 5 Oct – Fri", title: "Comedy Show Night at Noida Sec 18", location: "Comedy Club Sector 18 Noida", price: "₹400 onwards" },
        { id: 8, image: "/images/card29.png", time: "Sun, 5 Oct, 9:00 PM", title: "Hand Picked- A Surprise Lineup Show", location: "The Project Comedy, Gurugram", price: "₹599 onwards" },
        { id: 9, image: "/images/card30.jpg", time: "Sat, 11 Oct, 6:00 PM", title: "Ab Tumse Kya Chupana ft. Mohit Dudeja", location: "Hideout Comedy Club, Delhi", price: "₹500 onwards" },
    ]

    const cardinfo6 =[
        { id: 1, image: "/images/card31.jpg", time: "Daily, 11:00 AM to 10:30 PM", title: "Sky Gamer | Faridabad", location: "SKY GAMER, Faridabad", price: "₹500 onwards" },
        { id: 2, image: "/images/card32.jpg", time: "Daily, 11:00 AM to 10:00 PM", title: "Funtazia - Gaming Zone", location: "City Life Mall Faridabad", price: "₹800 onwards" },
        { id: 3, image: "/images/card33.jpg", time: "Daily, Multiple slots", title: "Turbo Track | Go Karting", location: "Turbo Track, Gurugram", price: "₹800 onwards" },
        { id: 4, image: "/images/card34.jpg", time: "Daily, 11:00 AM to 11:59 PM", title: "Ballistic Billiards Club", location: "Ballistic Billiards Club, Delhi", price: "₹750 onwards" },
        { id: 5, image: "/images/card35.png", time: "Daily, 10:00 AM to 11:00 PM", title: "Play and Plate - Gaming Arena", location: "Gaming Arena, Delhi", price: "₹450 onwards" },
        { id: 6, image: "/images/card36.png", time: "Daily, 11:00 AM to 10:30 PM", title: "USN Gaming Planet", location: "usn gaming planet, Noida", price: "₹520 onwards" },
        { id: 7, image: "/images/card37.png", time: "Daily, 4:00 PM to 9:00 PM", title: "Howl VR Gaming Zone", location: "Howl VR Gaming Zone ", price: "₹400 onwards" },
        { id: 8, image: "/images/card38.png", time: "Daily, 10:30 AM to 10:00 PM", title: "GameSpot | Trampoline Park", location: "Gamespot, Noida", price: "₹250 onwards" },
        { id: 9, image: "/images/card39.png", time: "Daily, 12:30 PM to 9:30 PM", title: "Weirds Gaming Arena", location: "Weirds Gamin Arena, Delhi", price: "₹500 onwards" },
        { id: 10, image: "/images/card40.jpg", time: "Daily, Multiple slots", title: "Arcade Gaming Lounge", location: "Arcade Gaming Lounge, Delhi", price: "₹450 onwards" },
    ];

    const cardinfo7 = [
        { id: 1, image: "/images/small9.jpg", title: "Chalo Jeete Hain", discription: "UA16+ | Hindi" },
        { id: 2, image: "/images/small10.jpg", title: "The GrandFather", discription: "UA16+ | Hindi and 1 more" },
    ];

    const cardinfo8 = [
        { id:1, image :"/images/person1.jpg", name:"Oreglo" },
        { id:2, image :"/images/person2.jpg", name:"MidivalPunditz" },
        { id:3, image :"/images/person3.png", name:"Papon" },
        { id:4, image :"/images/person4.jpg", name:"Karan Aujla" },
        { id:5, image :"/images/person5.png", name:"Akshay Srivastava" },
        { id:6, image :"/images/person6.png", name:"Arivu" },
        { id:7, image :"/images/person7.jpg", name:"Radhika Das" },
        { id:8, image :"/images/person8.jpg", name:"Krishna Das" },
    ]

    return (
        <>
           
            <div className="w-full bg-gradient-to-b from-[#9c1ac7]/10 via-[#af60e0]/5 to-[#af60e0]/5 pt-25 max-sm:pt-10 px-30 max-sm:w-162 max-sm:px-10 max-sm:border-0">
                <h1 className="text-2xl font-medium max-sm:text-4xl">Discover the best of Music Events</h1>

                {/* flex container here */}
                <div className="flex mt-6 overflow-x-auto space-x-4 scrollbar-hidden scroll-smooth">
                    {cardinfo.map((e, i) => (
                        <Card1 key={i} obj={e} />
                    ))}
                </div>
            </div>

            <div className='w-full pt-15 px-30 max-sm:pt-15 max-sm:w-162 max-sm:px-10 max-sm:border-0'>
                <h1 className="text-2xl font-medium max-sm:text-4xl">Top Hindi movies near you</h1>
                <div>
                    <div className="flex mt-6 overflow-x-auto space-x-4 scrollbar-hidden scroll-smooth">
                        {cardinfo2.map((e, i) => (
                            <Card2 key={i} obj={e} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full pt-15 px-30 max-sm:pt-15 max-sm:w-162 max-sm:px-10 max-sm:border-0">
                <h1 className="text-2xl font-medium max-sm:text-4xl">India’s Top Events</h1>

                {/* flex container here */}
                <div className="flex mt-6 overflow-x-auto space-x-4 scrollbar-hidden scroll-smooth">
                    {cardinfo3.map((e, i) => (
                        <Card1 key={i} obj={e} />
                    ))}
                </div>
            </div>

            <div className='w-full pt-15 px-30 max-sm:pt-15 max-sm:w-162 max-sm:px-10 max-sm:border-0'>
                <h1 className="text-2xl font-medium max-sm:text-4xl">Hits from previous weeks</h1>
                <div>
                    <div className="flex mt-6 overflow-x-auto space-x-4 scrollbar-hidden scroll-smooth">
                        {cardinfo4.map((e, i) => (
                            <Card2 key={i} obj={e} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full pt-15 px-30 max-sm:pt-15 max-sm:w-162 max-sm:px-10 max-sm:border-0">
                <h1 className="text-2xl font-medium max-sm:text-4xl">Best in Comedy</h1>

                {/* flex container here */}
                <div className="flex mt-6 overflow-x-auto space-x-4 scrollbar-hidden scroll-smooth">
                    {cardinfo5.map((e, i) => (
                        <Card1 key={i} obj={e} />
                    ))}
                </div>
            </div>

            <div className="w-full pt-15 px-30 max-sm:pt-15 max-sm:w-162 max-sm:px-10 max-sm:border-0">
                <h1 className="text-2xl font-medium max-sm:text-4xl">Offers on Activities</h1>

                {/* flex container here */}
                <div className="flex mt-6 overflow-x-auto space-x-4 scrollbar-hidden scroll-smooth">
                    {cardinfo6.map((e, i) => (
                        <Card1 key={i} obj={e} />
                    ))}
                </div>
            </div>

            <div className='w-full pt-15 px-30 max-sm:pt-15 max-sm:w-162 max-sm:px-10 max-sm:border-0'>
                <h1 className="text-2xl font-medium max-sm:text-4xl">Timeless Hits</h1>
                <div>
                    <div className="flex mt-6 overflow-x-auto space-x-4 scrollbar-hidden scroll-smooth">
                        {cardinfo7.map((e, i) => (
                            <Card2 key={i} obj={e} />
                        ))}
                    </div>
                </div>
            </div>

            <div className='w-full pt-15 px-30 max-sm:pt-15 max-sm:w-162 max-sm:px-10 max-sm:border-0'>
                <h1 className="text-2xl font-medium max-sm:text-4xl">Artists in your District</h1>
                <div>
                    <div className="flex mt-6 overflow-x-auto space-x-4 scrollbar-hidden scroll-smooth">
                        {cardinfo8.map((e, i) => (
                            <Card3 key={i} obj={e} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
