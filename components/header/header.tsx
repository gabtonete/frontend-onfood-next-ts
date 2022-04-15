import Image from "next/image";
import Link from "next/link";
import Styles from './header.module.css';
import { ImageLogo } from '@/images';
import { IconBookmark, IconHome } from '@/icons';

export function Header() {
    return (
        <header className="w-full mx-auto">
            <nav className={Styles.nav}>
                <div className={Styles.brand}>
                    <Link href="/">
                        <a>
                            <Image
                                src={ImageLogo}
                                width={45}
                                height={36}
                                alt="OnFood Logo"
                            />
                            <span>OnFood</span>
                        </a>
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link href="/">
                            <a>
                                <IconHome />
                                <span>Home</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/favoritos">
                            <a>
                                <IconBookmark />
                                <span>Favoritos</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}