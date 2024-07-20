export async function GET(params :any) {
    // req.headers.forEach((value, key) => {
    //     console.log(`${key}: ${value}`)
    // })
    console.log(params)
    return new Response("Hello, Next.js js!")
} 