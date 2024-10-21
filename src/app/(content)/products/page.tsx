import { auth } from "@/auth";
import { ProductsComponent } from "@/components/products/ProductsComponent";
import { ProductService } from "@/services/ProductService";
import { IFilters } from "@/types/product";
import { IProfile } from "@/types/profile";
import { getProfile } from "../../../../actions/profile";
import { getProducts } from "../../../../actions/products";
import { getCategory } from "../../../../actions/category";


interface IProducts {
    searchParams: { [key: string]: string | string[] | undefined }
}

// async function getProducts(token: string, queryParams = {} as IFilters) {
//     const data = await ProductService.getProducts(token, queryParams)
//     return data;
// }

// async function getCategory(token: string) {
//     const data = await ProductService.getCategory(token)
//     return data;
// }



export default async function Products({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    const session = await auth()
    if (!session) return
    
    const page = typeof searchParams.page === "string" ? parseInt(searchParams.page, 10) : 1;
    const searchTerm = typeof searchParams.searchTerm === "string" ? searchParams.searchTerm : undefined
    const category = typeof searchParams.category === "string" ? searchParams.category : undefined
    const allowed = typeof searchParams.allowed === "string" ? searchParams.allowed : undefined


    const data = await getProducts(page, searchTerm, category, allowed)
    const categories = await getCategory()
    const profile: IProfile = await getProfile()
    return <ProductsComponent allowed={allowed as string} category={category as string} searchTerm={searchTerm as string} categories={categories} bloodProfile={profile.blood} products={data.products} />
}