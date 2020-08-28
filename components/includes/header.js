import React from "react";
import Link from "next/link";

const Header = () => (
    <>
        <header>
            <div className="titleSite">
                Nextjs Auth
            </div>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/users">
                    <a>Users</a>
                </Link>
            </nav>
            <style jsx>
                {`
                    .titleSite {
                        padding: 40px 20px;
                        text-align: center;
                        font-size: 42px;
                        font-weight: 700;
                        text-transform: uppercase;
                    }
                    nav {
                        text-align: center;
                        background-color: #f1f1f1;
                        padding: 15px;
                    }
                    nav a {
                        padding: 15px 15px;
                        text-decoration: none;
                        text-transform: uppercase;
                        font-size: 18px;
                        font-weight: 100;
                    }
                    nav a:hover {
                        background-color: #ffffff;
                    }
                `}
            </style>
        </header>
    </>
)

export default Header;