import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CrtiticScore = ({ score }: Props) => {
  let color = score > 90 ? "green" : score > 80 ? "yellow" : "";
  return (
    <Badge colorScheme={color} paddingX={2} borderRadius={"4px"} fontSize={"14px"}>
      {score}
    </Badge>
  );
};

export default CrtiticScore;
