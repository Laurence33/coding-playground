import Link from "next/link";
import Image from "next/image";
import MainHeaderBackgroud from "./main-header-background";
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackgroud />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals" text="Meals" />
            </li>
            <li>
              <NavLink href="/community" text="Community" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
