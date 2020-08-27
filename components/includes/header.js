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
                        padding: 10px;
                        text-align: center;
                        font-size: 22px;
                        font-weight: 600;
                    }
                    nav {
                        text-align: center;
                        background-color: #e2e2e2;
                        padding: 15px;
                    }
                    nav a {
                        padding: 15px 15px;
                        text-decoration: none;
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