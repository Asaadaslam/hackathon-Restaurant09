"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LowerHeader() {
  // Get the current pathname
  const pathname = usePathname();

  // Function to format the page name from the pathname
  const getPageName = (path: string) => {
    const page = path === "/" ? "Home" : path.replace("/", "");
    return page.charAt(0).toUpperCase() + page.slice(1);
  };

  return (
    <div className="relative">
      <Image
        src="/lowerHeader.png"
        alt="Opening Hours"
        width={1920}
        height={410}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <li>
          <h1 className="text-white text-2xl font-bold bg-black bg-opacity-10 px-4 py-2 rounded">
            {getPageName(pathname)} {/* Display the current page name */}
          </h1>
          <br />
          <h4 className="flex justify-center text-center text-white text-m bg-black bg-opacity-10 px-4 py-2 rounded">
            <Link href="/">
              <span className="hover:underline">Home</span>
            </Link>{" "}
            {"   >   "}{" "} {" "}
            <Link href="/SignIn">
              <span className="hover:underline">Sign In</span>
            </Link>
          </h4>
        </li>
      </div>
    </div>
  );
}

