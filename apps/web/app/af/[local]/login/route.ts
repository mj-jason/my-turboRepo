
import { NextResponse, NextRequest } from "next/server";
import { redirect } from "next/navigation";

export const GET = (request: NextRequest, { params }: { params: { id: string } }) => {
    // console.log(`
    //     url: ${request.nextUrl}
    //     path: ${request.nextUrl.pathname}
    //     cookie: ${request.cookies}
    //     header: ${JSON.stringify(request.headers)}
    //     param name: ${request.nextUrl.searchParams.get('name')}
    //     id: ${params.id}   
    //     `);

    return NextResponse.json('11111', {
        status: 404,
        headers: {
            'Access-control-Allow-Origin': "*",
        }
    });
}
  
export const POST = async (request: NextRequest) => {
    const formData = await request.formData();
    const pw = formData.get('pw')?.toString();
    const local = request.headers.get('accept-language')?.startsWith('zh-CN') ? "cn" : "en";

    if (pw !== '123') {
        redirect(`/af/${local}/${pw}`);
    } else {
        redirect(`/af/${local}/demo`);
    }
}