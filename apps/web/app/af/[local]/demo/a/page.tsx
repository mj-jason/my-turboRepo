'use client';

import { useFetchData } from "@repo/fetch-list/getData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeContext } from "../context";
import { useContext } from "react";

export default () => {
    const path = usePathname();
    const baseName = path.split('/demo')[0];
    console.log(1111, path, baseName);

    const state = useFetchData(`${baseName}/list`);
    const { theme } = useContext(ThemeContext);

    console.log("Client Env: ", process.env.NEXT_PUBLIC_NAME)

    return (
        <>
            {state.map((item: { id: number }) => (
                <Link href={(item.id % 2 === 0) ? `${path}/item/${item.id}` : ''} key={item.id}>
                    <div key={item.id} style={{ width: '300px', height: '40px', background: '#ccc', lineHeight: '40px', border: '1px solid white' }}>
                        {item.id}
                    </div>
                </Link>
            ))}
        </>
    )
}