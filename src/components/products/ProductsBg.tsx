import Image from "next/image";





export function ProductsBg() {
   
    return <div className="sm:hidden md:hidden lg:block absolute top-0 right-0 h-[100%] w-[430px]">
        <Image alt="bg-products" src={'/bg/bg-products.png'} fill/>
    </div>
}
