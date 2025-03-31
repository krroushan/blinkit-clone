import Image from "next/image";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import ProductSlider from "./components/ProductSlider";
import Link from "next/link";

export default function Home() {
  // Sample product data
  const dairyProducts = [
    {
      id: 1,
      image: "/products/product.jpg",
      name: "Amul Fresh Gold Full Cream Pasteurised Cow Milk",
      quantity: "500 ml",
      price: "35",
      deliveryTime: "9"
    },
    {
      id: 2,
      image: "/products/product.jpg",
      name: "Amul Classic White Bread",
      quantity: "400 g",
      price: "40",
      deliveryTime: "9"
    },
    {
      id: 3,
      image: "/products/product.jpg",
      name: "Harvest Gold Bread",
      quantity: "400 g",
      price: "45",
      deliveryTime: "9"
    },
    {
      id: 4,
      image: "/products/product.jpg",
      name: "Sodhi's Dairy Brand Fresh Milk",
      quantity: "500 ml",
      price: "40",
      deliveryTime: "9"
    },
    {
      id: 5,
      image: "/products/product.jpg",
      name: "Haldiram's Aloo Bhujia",
      quantity: "150 g",
      price: "50",
      deliveryTime: "9"
    },
    {
      id: 6,
      image: "/products/product.jpg",
      name: "Haldiram's Aloo Bhujia",
      quantity: "150 g",
      price: "50",
      deliveryTime: "9"
    },
    {
      id: 7,
      image: "/products/product.jpg",
      name: "Haldiram's Aloo Bhujia",
      quantity: "150 g",
      price: "50",
      deliveryTime: "9"
    }
  ];

  const tobaccoProducts = [
    {
      id: 1,
      image: "/products/product.jpg",
      name: "Pan Raas Natural Hookah Flavor",
      quantity: "50 g",
      price: "65",
      deliveryTime: "9"
    },
    {
      id: 2,
      image: "/products/product.jpg",
      name: "Elements Rolling Paper with Filter Tips",
      quantity: "32 papers",
      price: "99",
      deliveryTime: "9"
    },
    {
      id: 3,
      image: "/products/product.jpg",
      name: "Classic Rolling Paper",
      quantity: "King Size",
      price: "60",
      deliveryTime: "9"
    },
    {
      id: 4,
      image: "/products/product.jpg",
      name: "Brown Rolling Paper",
      quantity: "Classic Pre Rolls",
      price: "85",
      deliveryTime: "9"
    },
    {
      id: 5,
      image: "/products/product.jpg",
      name: "Haldiram's Aloo Bhujia",
      quantity: "150 g",
      price: "50",
      deliveryTime: "9"
    },
    {
      id: 6,
      image: "/products/product.jpg",
      name: "Haldiram's Aloo Bhujia",
      quantity: "150 g",
      price: "50",
      deliveryTime: "9"
    },
    {
      id: 7,
      image: "/products/product.jpg",
      name: "Haldiram's Aloo Bhujia",
      quantity: "150 g",
      price: "50",
      deliveryTime: "9"
    }
  ];
  const snacksProducts = [
    {
      id: 1,
      image: "/products/product.jpg",
      name: "Bingo! Tedhe Medhe Masala Grill Sticks",
      quantity: "55 g",
      price: "30",
      deliveryTime: "9"
    },
    {
      id: 2,
      image: "/products/product.jpg",
      name: "Kurkure Masala Munch Crunchy Puffs",
      quantity: "90 g",
      price: "30",
      deliveryTime: "9"
    },
    {
      id: 3,
      image: "/products/product.jpg",
      name: "Lays Classic Salted Potato Chips",
      quantity: "52 g",
      price: "20",
      deliveryTime: "9"
    },
    {
      id: 4,
      image: "/products/product.jpg",
      name: "Haldiram's Aloo Bhujia",
      quantity: "150 g",
      price: "50",
      deliveryTime: "9"
    },
    {
      id: 5,
      image: "/products/product.jpg",
      name: "Haldiram's Aloo Bhujia",
      quantity: "150 g",
      price: "50",
      deliveryTime: "9"
    },
    {
      id: 6,
      image: "/products/product.jpg",
      name: "Haldiram's Aloo Bhujia",
      quantity: "150 g",
      price: "50",
      deliveryTime: "9" 
    },
    {
      id: 7,
      image: "/products/product.jpg",
      name: "Haldiram's Aloo Bhujia",
      quantity: "150 g",
      price: "50",
      deliveryTime: "9"
    } 
  ];

  // Category icons for the quick access section
  const categories = [
    { name: "Fruits & Vegetables", subtitle: "Fresh & Vegetables", image: "/categories/product.jpg" },
    { name: "Dairy, Bread & Eggs", subtitle: "Dairy, Bread & Eggs", image: "/categories/product.jpg" },
    { name: "Snacks & Munchies", subtitle: "Snacks & Munchies", image: "/categories/product.jpg" },
    { name: "Cold Drinks", subtitle: "Cold Drinks", image: "/categories/product.jpg" },
    { name: "Biscuits & Treats", subtitle: "Biscuits & Treats", image: "/categories/product.jpg" },
    { name: "Breakfast & Instant", subtitle: "Breakfast & Instant", image: "/categories/product.jpg" },
    { name: "Tea, Coffee & Health", subtitle: "Tea, Coffee & Health", image: "/categories/product.jpg" },
    { name: "Atta, Rice & Dal", subtitle: "Atta, Rice & Dal", image: "/categories/product.jpg" },
    { name: "Masala, Oil & More", subtitle: "Masala, Oil & More", image: "/categories/product.jpg" },
    { name: "Sauces & Spreads", subtitle: "Sauces & Spreads", image: "/categories/product.jpg" },
    { name: "Chicken, Meat & Fish", subtitle: "Chicken, Meat & Fish", image: "/categories/product.jpg" },
    { name: "Organic & Healthy Living", subtitle: "Organic & Healthy Living", image: "/categories/product.jpg" },
    { name: "Baby Care", subtitle: "Baby Care", image: "/categories/product.jpg" },
    { name: "Pet Care", subtitle: "Pet Care", image: "/categories/product.jpg" },
    { name: "Pharmacy", subtitle: "Pharmacy", image: "/categories/product.jpg" },
    { name: "Baby Care", subtitle: "Baby Care", image: "/categories/product.jpg" },
    { name: "Pet Care", subtitle: "Pet Care", image: "/categories/product.jpg" },
    { name: "Pharmacy", subtitle: "Pharmacy", image: "/categories/product.jpg" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Main Banner */}
        <div className="rounded-lg overflow-hidden mb-6 bg-green-600 relative">
          <div className="p-6 text-white relative z-10">
            <h2 className="text-2xl font-bold">Paan corner</h2>
            <p className="text-sm">Your favourite paan shop is now online</p>
            <button className="mt-3 bg-white text-green-600 px-3 py-1 rounded-md text-sm font-medium">
              Shop Now
            </button>
          </div>
          <div className="absolute right-0 top-0 h-full flex items-center">
            <Image
              src="/banners/paan-corner.jpg"
              alt="Paan Corner"
              width={300}
              height={120}
              className="object-contain"
            />
          </div>
        </div>

        {/* Promotional Banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-teal-500 rounded-lg p-4 text-white relative overflow-hidden">
            <div className="w-2/3">
              <h3 className="font-bold">Pharmacy at your doorstep!</h3>
              <p className="text-xs mt-1">Medicines, health drinks, testing kits & more</p>
              <button className="mt-3 bg-white text-teal-600 px-3 py-1 rounded-md text-xs font-medium">
                Order Now
              </button>
            </div>
            <div className="absolute right-0 bottom-0">
              <Image
                src="/banners/pharmacy.jpg"
                alt="Pharmacy"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          </div>

          <div className="bg-yellow-500 rounded-lg p-4 text-white relative overflow-hidden">
            <div className="w-2/3">
              <h3 className="font-bold">Pet Care supplies in minutes</h3>
              <p className="text-xs mt-1">Food, toys & more</p>
              <button className="mt-3 bg-white text-yellow-600 px-3 py-1 rounded-md text-xs font-medium">
                Order Now
              </button>
            </div>
            <div className="absolute right-0 bottom-0">
              <Image
                src="/banners/pet-care.jpg"
                alt="Pet Care"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          </div>

          <div className="bg-purple-500 rounded-lg p-4 text-white relative overflow-hidden">
            <div className="w-2/3">
              <h3 className="font-bold">No time for a diaper run?</h3>
              <p className="text-xs mt-1">Baby care essentials in minutes</p>
              <button className="mt-3 bg-white text-purple-600 px-3 py-1 rounded-md text-xs font-medium">
                Order Now
              </button>
            </div>
            <div className="absolute right-0 bottom-0">
              <Image
                src="/banners/baby-care.jpg"
                alt="Baby Care"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Category Icons - Updated for better visibility */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-2 md:gap-3">
            {categories.map((category, index) => (
              <Link href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 mb-1 bg-blue-100 rounded-lg overflow-hidden">
                    <Image
                      src="/categories/product.png"
                      alt={category.name}
                      width={128}
                      height={128}
                      className="object-cover object-bottom absolute bottom-0"
                    />
                  </div>
                  <div className="flex flex-col items-center w-24">
                    <span className="font-medium text-[14px] text-gray-800 text-center" style={{ 
                      width: '100%',
                      whiteSpace: 'wrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: 'block'
                    }}>{category.name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Product Sections with Sliders */}
        <ProductSlider 
          title="Dairy, Bread & Eggs" 
          products={dairyProducts}
          categorySlug="dairy-bread-eggs"
        />

        <ProductSlider 
          title="Rolling paper & tobacco" 
          products={tobaccoProducts}
          categorySlug="rolling-paper-tobacco"
        />

        <ProductSlider 
          title="Snacks & Munchies" 
          products={snacksProducts}
          categorySlug="snacks-munchies"
        />

        {/* Footer Links */}
        <div className="mt-12 border-t pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Useful Links</h3>
              <ul className="text-sm space-y-2 text-gray-600">
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Press</Link></li>
                <li><Link href="#">Lead</Link></li>
                <li><Link href="#">Values</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Categories</h3>
              <ul className="text-sm space-y-2 text-gray-600">
                <li><Link href="#">Vegetables & Fruits</Link></li>
                <li><Link href="#">Dairy & Breakfast</Link></li>
                <li><Link href="#">Cold Drinks & Juices</Link></li>
                <li><Link href="#">Snacks & Biscuits</Link></li>
                <li><Link href="#">Instant & Frozen Food</Link></li>
                <li><Link href="#">Tea, Coffee & Health Drinks</Link></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-4">
                <span>Download App</span>
                <Image src="/app-store.png" alt="App Store" width={120} height={40} />
                <Image src="/play-store.png" alt="Play Store" width={120} height={40} />
              </div>
              <div className="flex space-x-4">
                <Link href="#"><Image src="/facebook.png" alt="Facebook" width={24} height={24} /></Link>
                <Link href="#"><Image src="/twitter.png" alt="Twitter" width={24} height={24} /></Link>
                <Link href="#"><Image src="/instagram.png" alt="Instagram" width={24} height={24} /></Link>
                <Link href="#"><Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} /></Link>
                <Link href="#"><Image src="/youtube.png" alt="YouTube" width={24} height={24} /></Link>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-xs text-gray-500 text-center">
            © 2023 Innovative Products Limited. (PH: 123-4567)
          </div>
        </div>
      </main>
    </div>
  );
}
