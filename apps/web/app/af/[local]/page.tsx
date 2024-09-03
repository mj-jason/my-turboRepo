import Image from "next/image";
import React from "react";
import { LocalType } from "@repo/local/base";
import getLocal from "@repo/local/getLocal";

export const generateStaticParams = () => [
    {local: 'cn'},
    {local: 'en'}
]

export const dynamicParams = false;
export default ({ params }: { params: { local: LocalType } }) => {
    return (
        <>
            <p>runtime env NAME: {process.env.NAME}</p>
            <p>file env NAME: {process.env.ENV_NAME}</p>
            <form action={'/af/api/login'} method="post">
                <label htmlFor="pw">{getLocal(params.local).password}</label>
                <input type="password" name="pw" id="pw" />
                <br />
                <button type="submit" name="pw">submit</button>
            </form>
            <Image src="/next.svg" alt="null" width={200} height={200} priority />
        </>
    )
}
