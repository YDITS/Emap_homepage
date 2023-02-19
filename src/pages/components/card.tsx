
import { Card, Text } from "@nextui-org/react";

type Com = {
    title : string,
    text : string
}

export default function LinkCard({ title, text } : Com){
    return (
      <>
          <Card>
            <Text
              css={{ textGradient: "45deg, $blue500 -20%, $red500 100%" }}
              h2
            >{`${title} ->`}</Text>
            <Text>{text}</Text>
         </Card>
      </>
    );
  };