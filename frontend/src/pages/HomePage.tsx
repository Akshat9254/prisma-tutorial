import { Heading, Stack } from "@chakra-ui/react";
import Post from "../components/Post";
import { useGetAllPosts } from "../hooks/post";

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  // const [posts, setPosts] = useState<PostDto[]>([]);
  // useEffect(() => {
  //   getAllPosts()
  //     .then((res: AxiosResponse<ApiResponse<PostDto[]>>) => {
  //       const { data } = res;
  //       if (data.data) {
  //         setPosts(data.data);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const { data, isLoading } = useGetAllPosts();

  if (isLoading) return <h2>Loading...</h2>;

  const posts = data?.data.data;
  if (!posts) return null;
  return (
    <Stack py={6}>
      <Heading>Posts</Heading>
      <Stack gap={4}>
        {posts.length > 0 &&
          posts.map((post) => <Post key={post.id} {...post} />)}
      </Stack>
    </Stack>
  );
};
export default HomePage;
