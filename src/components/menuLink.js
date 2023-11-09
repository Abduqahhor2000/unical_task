import Link from "next/link";
import { useRouter } from "next/router";

function MenuLink({ link, text }) {
  const router = useRouter();
  return (
    <Link
      href={`${link}`}
      className={`w-full text-base px-4 py-2 text-center font-semibold font-sans duration-200 cursor-pointer ${
        router.asPath == link
          ? "bg-[#1E90ff] text-white"
          : "bg-white text-black hover:bg-slate-200"
      }`}
    >
      {text}
    </Link>
  );
}

export default MenuLink;
