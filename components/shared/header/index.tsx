import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import CategoryDrawer from "./category-drawer";
import Search from "./search";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <CategoryDrawer />
          <Link href='/' className="flex-start ml-4">
            <Image src='/images/logo.svg'
              alt={`${APP_NAME}`}
              width={48}
              height={48}
              priority={true} />
          </Link>
          <div className="hidden lg:block font-bold text-2xl ml-3">
            {APP_NAME}
          </div>
        </div>
        <div className="hidden lg:block font-bold text-2xl ml-3">
          <Search />
        </div>
        <Menu />
      </div>
    </header>
  )
}

export default Header;
