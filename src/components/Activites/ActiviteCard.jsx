import { Card, Text } from "@nextui-org/react";

export const ActiviteCard = ({url, title, text}) => (
    <Card isPressable>
        <Card.Body css={{ p: 0 }}>
            <Card.Image
                className="zoomable-img"
                src={url}
                objectFit="cover"
                width="100%"
                height={140}
            />
        </Card.Body>
        <Card.Footer css={{ flexDirection: "column", alignItems: "flex-start" }}>
           
                <Text b>{title}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    {text}
                </Text>
  
      </Card.Footer>
    </Card>
);