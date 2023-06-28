import { Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { PostDto } from "../../types/post";
import moment from "moment";
import { BiComment } from "react-icons/bi";
import { IconType } from "react-icons";
import { useGetCommentsByPostId } from "../../hooks/comment";

type PostProps = PostDto;

type FooterIconProps = {
  Icon: IconType;
  text: number | string;
  fetchComments: () => void;
};
const FooterIcon: React.FC<FooterIconProps> = ({
  Icon,
  text,
  fetchComments,
}) => {
  return (
    <Button
      leftIcon={<Icon />}
      variant={"ghost"}
      size={"sm"}
      onClick={fetchComments}
    >
      {text}
    </Button>
  );
};

const Post: React.FC<PostProps> = ({
  id,
  user,
  updatedAt,
  title,
  body,
  _count,
}) => {
  const { data, refetch, isFetched, isLoading, isRefetching, isFetching } =
    useGetCommentsByPostId(id);

  console.log({ isLoading, isFetched, isFetching, isRefetching, data });

  return (
    <Stack
      borderColor={"whiteAlpha.200"}
      borderRadius={"md"}
      borderWidth={1}
      p={4}
    >
      <HStack justifyContent={"space-between"}>
        <Text fontSize={"sm"}>{user.name}</Text>
        <Text fontSize={"sm"}>{moment(updatedAt).fromNow()}</Text>
      </HStack>
      <Heading fontSize={"md"}>{title}</Heading>
      <Text textAlign={"justify"}>{body}</Text>
      <HStack>
        <FooterIcon
          Icon={BiComment}
          text={_count.comments}
          fetchComments={refetch}
        />
      </HStack>
    </Stack>
  );
};
export default Post;
