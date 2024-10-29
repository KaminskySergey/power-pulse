import Image from "next/image";





export function ProductsBg() {
   
    return <div className="sm:hidden md:hidden lg:block absolute top-0 right-0 h-[100%] w-[430px]">
        <Image alt="bg-products"  priority src={'/bg/bg-products.jpg'} fill/>
    </div>
}
