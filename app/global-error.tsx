"use client"

export default function GlobalError({ error, }: { error: Error & { digest?: string }; }) {
    return (
        <html>
            <head></head>
            <body>
                <h2>Global Error</h2>
                <p>{error.message}</p>
            </body>
        </html>
)};