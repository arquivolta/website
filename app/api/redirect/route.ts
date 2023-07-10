import { NextResponse, NextRequest } from "next/server";

export function GET(request: NextRequest) {
	let q = request.nextUrl.searchParams.get('q');
	return NextResponse.redirect(q = "ddg" ? "https://www.duckduckgo.com" : "https://google.com");
}
