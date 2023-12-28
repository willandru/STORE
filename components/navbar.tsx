import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";


export const revalidate =0; // SO IT NEVER CASH BuT NOT WORKING

const Navbar = async () => {
    const categories = await getCategories();

    return(
        <div className="border-b">
            <Container>
               <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
               <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                    <p className="font-bold text-xl"> STORE</p>                
                </Link>
                <MainNav data={categories} />
               </div>
            </Container>
        </div>
    );
}

export default Navbar;