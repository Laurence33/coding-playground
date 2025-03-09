"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from './nav-link.module.css';

export default function NavLink({ href, text }) {
  const path = usePathname();
  return (
    <Link href={href}
      className={
        path.startsWith(href)
          ? `${classes.active} ${classes.link}`
          : classes.link
      }>{text}</Link>
  )
}
