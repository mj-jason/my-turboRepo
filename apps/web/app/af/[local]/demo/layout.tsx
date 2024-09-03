"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useState } from "react";
import { ThemeContext } from './context';

function adjustRoute(route: string) {
    const index = route.indexOf("demo");
    return route.slice(0, index + 4);
}

export default ({ children }: { children: JSX.Element }) => {
    const path = usePathname();
    const baseName = adjustRoute(path);
    const list = ["a", "b", "c"];
    const [theme, setTheme] = useState('blue');

    const toggleTheme = (color: string) => {
        setTheme(color);
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div style={{ background: theme, height: '80px', fontSize: '24px', color: 'white' }}>
                DEMO
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ padding: '15px' }}>
                    {
                        list.map(item => (
                            <div style={{ width: "40px", marginBottom: '10px', fontSize: '20px' }} key={item}>
                                <Link href={`${baseName}/${item}`} style={{ color: "blcak" }}> to {item}</Link>
                            </div>
                        ))
                    }
                </div>
                <div style={{ padding: '15px' }}>
                    {children}
                </div>
            </div>
        </ThemeContext.Provider>
    )
}