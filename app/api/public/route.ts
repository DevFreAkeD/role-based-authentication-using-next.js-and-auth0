import { NextResponse } from "next/server";

export async function GET() {
    const messages = [
        "Welcome to the open lands! No passport required. 🌍",
        "This is a public endpoint—because sharing is caring. ❤️",
        "You've reached the public zone! No secret handshake needed. 🤝",
        "Public API here! Grab some data and have a great day! 🎉",
        "No locks, no keys—just open data vibes. 🔓",
        "Free to access! But sorry, no free coffee. ☕😅",
        "You found it! But there’s no treasure here. 🏴‍☠️",
        "Welcome to the public API. Hope you’re having an awesome day! 😊",
        "This API loves visitors. Enjoy your stay! 🚀",
        "Data without borders. Just don’t break it! 🛠️",
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    return NextResponse.json({ message: randomMessage });
}