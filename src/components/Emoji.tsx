import { Icon } from "@chakra-ui/react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { FiMeh } from "react-icons/fi";
import { GiBullseye } from "react-icons/gi";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: React.ElementType } = {
    3: FiMeh,
    4: BsFillHandThumbsUpFill,
    5: GiBullseye,
  };

  const color = rating === 5 ? "#711414" : "#ffd42a";
  const boxSize = rating === 5 ? 30 : 25;
  return <Icon as={emojiMap[rating]} boxSize={boxSize} color={color} />;
};

export default Emoji;
