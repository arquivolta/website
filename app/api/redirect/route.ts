import { NextResponse, NextRequest } from "next/server";

const redirectTable: Record<string, string> = {
  "arch-shasums-x8664":
    "https://mirror.rackspace.com/archlinux/iso/latest/sha256sums.txt",
  "arch-arm64-image":
    "https://os.archlinuxarm.org/os/ArchLinuxARM-aarch64-latest.tar.gz",
};

const defaultRedirect = "https://arquivolta.dev";

// Rather than ever hard-coding 3rd-party URLs in the desktop app or other places,
// always provide this redirect so that if that site ever goes pear-shaped, we can
// shim it server-side
export function GET(request: NextRequest) {
  let q = request.nextUrl.searchParams.get('q');
  if (q == 'arch-x8664-image') {
    let tgt = request.nextUrl.searchParams.get('tgt');
    if (!/^[a-zA-Z0-9\-\_\.]+$/.test(tgt ?? '')) {
      return new NextResponse(null, { status: 401, statusText: 'no' });
    }

    return NextResponse.redirect(`https://mirror.rackspace.com/archlinux/iso/latest/${tgt}`);
  }

  return NextResponse.redirect(redirectTable[q ?? '__nothere'] ?? defaultRedirect);
}
