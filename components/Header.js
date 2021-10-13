import Image from "next/image";

function Header() {
    return (
        <div>
            <div className="flex justify-between max-w-6xl">
                {/* Left */}
                <div className="relative hidden lg:inline-grid h-24 w-24">
                    <Image src="https://drive.google.com/uc?export=view&id=17FqQM3pP-BVT5ZeeUYgnF_bHgMJw1Qts"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <h1>Hello
                </h1>
                {/* Middle */}

                {/* Right */}
            </div>
        </div>
    )
}

export default Header
