const verificationToken = "de518053f34909a17cec8d71e72ccbd6";

export const dynamic = "force-static";

export function GET() {
  return new Response(verificationToken, {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
