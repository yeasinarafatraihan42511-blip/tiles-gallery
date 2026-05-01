import { Card } from "@heroui/react";
import Image from "next/image";


const PhotoCard = ({photo}) => {
    console.log(photo);
    return (
        <Card>
            <div>
                <Image>
                 src={photo.url} alt={photo.title} width={300} height={200} 
                </Image>
            </div>
        </Card>
    );
};

export default PhotoCard;