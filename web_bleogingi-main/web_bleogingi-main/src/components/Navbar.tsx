import Link from 'next/link';

export default function Navbar(){
    return(
        <div>
            <ul className="flex gap-8 justify-center border text-white bg-gray-600 h-12 text-lg p-2">
                <li>Home</li>
                <li>Read</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}