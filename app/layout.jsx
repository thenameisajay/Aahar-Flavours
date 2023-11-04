import "./global.css";
import React from "react";





export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="container mx-auto px-4">

                    <main className="py-4">
                        {children}
                    </main>
                </div>
            </body>

        </html>
    );
}