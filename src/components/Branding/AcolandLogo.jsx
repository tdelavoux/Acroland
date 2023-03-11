import { Image } from "@nextui-org/react"

export function AcolandLogo(){
    return (
        <Image
            height={40}
            width={40}  
            src="/img/squirrel.svg"
            alt="Acroland Logo"
            objectFit="cover"
            />
    );
}