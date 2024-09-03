import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export const GET = (request: NextRequest, { params }: { params: { id: string } }) => {
    const list = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
    ];

    return NextResponse.json(list);
}