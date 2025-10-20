import React, { useEffect, useRef } from 'react'
import AnnouncementBar2 from '../Components/AnnoucementBar2'
import Card from '../Components/Card'

export default function Home() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let scrollAmount = 0;

        // Duplicate content for seamless infinite scroll
        scrollContainer.innerHTML += scrollContainer.innerHTML;

        const scroll = () => {
            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 1) {
                scrollContainer.scrollLeft = 0; // reset to start
            } else {
                scrollAmount += scrollContainer.clientWidth / 2; // how much to scroll each step
                scrollContainer.scrollTo({
                    left: scrollAmount,
                    behavior: "smooth",
                });
            }
        };

        const interval = setInterval(scroll, 2000); // every 1s
        return () => clearInterval(interval);
    }, []);

    const products = [
        {
            id: 1,
            img: "/images/1f.jpg",
            hoverimg: "/images/1b.jpg",
            title: "Cuba Chair - Oiled Oak",
            category: "Chair",
            price: "₹800",
            prePrice: "₹1000"
        },
        {
            id: 2,
            img: "/images/2f.jpg",
            hoverimg: "/images/2b.jpg",
            title: "Amphora Floor Light Beigx",
            category: "Light",
            price: "₹1200",
            prePrice: "₹1500"
        },
        {
            id: 3,
            img: "/images/3f.jpg",
            hoverimg: "/images/3b.jpg",
            title: "Lounge Chair Oiled Oak",
            category: "Oak",
            price: "₹700",
            prePrice: "₹1000"
        },
        {
            id: 4,
            img: "/images/4f.jpg",
            hoverimg: "/images/4b.jpg",
            title: "Malua lantern Lamp",
            category: "Lamp",
            price: "₹900",
            prePrice: "₹1200"
        },
        {
            id: 5,
            img: "/images/5f.jpg",
            hoverimg: "/images/5b.jpg",
            title: "Urna vase, olive",
            category: "Planter",
            price: "₹600",
            prePrice: "₹800"
        },
        {
            id: 6,
            img: "/images/6f.jpg",
            hoverimg: "/images/6b.jpg",
            title: "Nona Porcelian Table Vase",
            category: "Planter",
            price: "₹1500",
            prePrice: "₹2000"
        },
        {
            id: 7,
            img: "/images/7f.jpg",
            hoverimg: "/images/7b.jpg",
            title: "Alvar Aalto Vase",
            category: "Lamp",
            price: "₹900",
            prePrice: "₹1200"
        },
        {
            id: 8,
            img: "/images/8f.webp",
            hoverimg: "/images/8b.webp",
            title: "Dinnerware Plates",
            category: "Light",
            price: "₹1000",
            prePrice: "₹1400"
        },
    ]

    localStorage.setItem("products", JSON.stringify(products))
    return (
        <>
            {/* Banners */}
            <div className="flex flex-wrap bg-[#ebe5d5] w-full justify-between py-8 gap-6 max-sm:flex-col max-sm:items-center">
                {/* Banner 1 */}
                <div className="relative w-[48%] max-sm:w-full max-sm:px-5">
                    <img src="/images/slider-01.jpg" alt="" className="w-full h-auto object-cover " />
                    <div className="absolute bottom-6 left-4 right-10 flex flex-col sm:flex-row sm:justify-between sm:items-end max-sm:left-12">
                        <p className="font-medium font-serif text-white text-3xl sm:text-5xl leading-tight mb-3 sm:mb-0 w-100 max-sm:w-auto"> Elevate Your Style with Mitti</p>
                        <p className="text-white text-lg sm:text-xl underline font-serif cursor-pointer"> Discover More →</p>
                    </div>
                </div>

                {/* Banner 2 */}
                <div className="relative w-[48%] max-sm:w-full max-sm:px-5">
                    <img src="/images/slider-02.jpg" alt="" className="w-full h-auto object-cover " />
                    <div className="absolute bottom-6 left-4 right-10 flex flex-col sm:flex-row sm:justify-between sm:items-end  max-sm:left-12">
                        <p className="font-medium font-serif text-white text-3xl sm:text-5xl leading-tight mb-3 sm:mb-0 w-100 max-sm:w-auto"> Elevate Your Style with Mitti</p>
                        <p className="text-white text-lg sm:text-xl underline font-serif cursor-pointer">Discover More →</p>
                    </div>
                </div>
            </div>



            {/* Featured */}
            <div className="bg-[#f5f3eb] w-full py-10 px-8">
                <h1 className="text-5xl text-[#333333] font-serif max-sm:text-3xl">Featured Categories</h1>

                <div className="flex justify-between mt-4 max-sm:mt-1">
                    <p className="text-lg text-gray-500 tracking-wide max-sm:text-xs">Browse our curated collections for every style.</p>
                    <p className="text-[#333333] mr-10 text-lg sm:text-xl underline font-serif cursor-pointer max-sm:text-xs max-sm:mr-1">All Categories ↗</p>
                </div>

                {/* Scrollable Wrapper */}
                <div className="flex mt-10 justify-between gap-6 max-sm:space-x-4 max-sm:overflow-x-scroll ">
                    <div className="one flex-shrink-0 snap-center w-[300px]">
                        <img src="/images/categories-01.webp" alt="" className="w-78 h-45" />
                        <div className="flex my-4 justify-between border-b-1">
                            <p className="text-2xl text-[#333333] font-serif mb-4">Artisan Select</p>
                            <p className="text-2xl text-[#333333] font-serif mr-5 font-medium cursor-pointer">↗</p>
                        </div>
                    </div>

                    <div className="two flex-shrink-0 snap-center w-[300px]">
                        <img src="/images/categories-02.jpg" alt="" className="w-78 h-45" />
                        <div className="flex my-4 justify-between border-b-1">
                            <p className="text-2xl text-[#333333] font-serif mb-4">Chair Charm</p>
                            <p className="text-2xl text-[#333333] font-serif mr-5 font-medium cursor-pointer">↗</p>
                        </div>
                    </div>

                    <div className="three flex-shrink-0 snap-center w-[300px]">
                        <img src="/images/categories-03.jpg" alt="" className="w-78 h-45" />
                        <div className="flex my-4 justify-between border-b-1">
                            <p className="text-2xl text-[#333333] font-serif mb-4">Dream Sleep</p>
                            <p className="text-2xl text-[#333333] font-serif mr-5 font-medium cursor-pointer">↗</p>
                        </div>
                    </div>

                    <div className="four flex-shrink-0 snap-center w-[300px]">
                        <img src="/images/categories-04.webp" alt="" className="w-78 h-45" />
                        <div className="flex my-4 justify-between border-b-1">
                            <p className="text-2xl text-[#333333] font-serif mb-4">Sofa Studio</p>
                            <p className="text-2xl text-[#333333] font-serif mr-5 font-medium cursor-pointer">↗</p>
                        </div>
                    </div>
                </div>
            </div>


            <AnnouncementBar2 />



            {/* More  */}

            <div className="flex bg-[#f5f3eb] w-full py-20 max-sm:flex-col max-sm:py-10 max-sm:items-center">
                {/* Left Auto Slider */}
                <div
                    ref={scrollRef}
                    className="left flex w-[60rem] overflow-x-scroll scrollbar-hide scroll-smooth max-sm:w-full max-sm:overflow-x-auto max-sm:justify-start max-sm:px-4"
                >
                    <img src="/images/sm1.webp" alt="" className="h-150 mr-5 max-sm:h-50" />
                    <img src="/images/sm2.webp" alt="" className="h-150 mr-5 max-sm:h-50" />
                    <img src="/images/sm3.webp" alt="" className="h-150 mr-5 max-sm:h-50" />
                    <img src="/images/sm1.webp" alt="" className="h-150 mr-5 max-sm:h-50" />
                    <img src="/images/sm2.webp" alt="" className="h-150 mr-5 max-sm:h-50" />
                    <img src="/images/sm3.webp" alt="" className="h-150 mr-5 max-sm:h-50" />
                </div>

                {/* Right text section */}
                <div className="right px-12 py-40 w-140 max-sm:w-full max-sm:px-5 max-sm:py-6 max-sm:text-center">
                    <p className="text-[2.5rem] font-serif leading-12 max-sm:text-xl max-sm:leading-6">The Finest Art For The Finest Furniture</p>
                    <p className="text-[1.1rem] text-gray-500 my-5 max-sm:text-sm max-sm:my-3">Etiam facilisis lectus sit amet nisl bibendum, eget mollis ex fermentum.Interdum et malesuada fames ac ante.Etiam facilisis fermentum. Interdum et malesuada fames ac ante.</p>
                    <div className="flex my-4 justify-between border-b-1 w-38 max-sm:justify-center max-sm:my-2">
                        <p className="text-xl text-[#333333] font-serif mb-1 cursor-pointer max-sm:text-base">Discover More ↗</p>
                    </div>
                </div>
            </div>



            {/* Cards */}
            <div className="bg-[#f5f3eb] w-full pb-10 px-10 max-sm:px-10 max-sm:w-full max-sm:border-2">
                <h1 className="text-5xl text-[#333333] font-serif max-sm:text-3xl">
                    The Rest of Your Furniture
                </h1>

                <div className="flex justify-between mt-4 max-sm:mt-1 max-sm:flex-col max-sm:gap-2">
                    <p className="text-lg text-gray-500 tracking-wide max-sm:text-xs">
                        Visit our shop to see amazing creations from our designers. Big Sale
                    </p>
                    <p className="text-[#333333] mr-10 text-lg sm:text-xl underline font-serif cursor-pointer max-sm:text-xs max-sm:mr-0">
                        Big Sale ↗
                    </p>
                </div>

                <div className="flex w-full justify-between flex-wrap gap-6 max-sm:justify-center max-sm:gap-1">
                    {products.map((e, i) => (
                        <div key={i} className="max-sm:w-auto w-auto">
                            <Card
                                id={e.id}
                                img={e.img}
                                hoverimg={e.hoverimg}
                                title={e.title}
                                category={e.category}
                                price={e.price}
                                prePrice={e.prePrice}
                            />
                        </div>
                    ))}
                </div>
            </div>










        </>
    )
}
