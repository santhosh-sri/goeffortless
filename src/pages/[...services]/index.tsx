import Landing from "@/components/Landing";
import { fetchServiceData } from "@/utils/fetchServiceData";
import { GetServerSideProps } from "next";

interface Props {
  content?: {
    [key: string]: unknown;
  };
}

const Index = ({ content }: Props) => {
  return (
    <div>
      <Landing {...content} />
    </div>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const service = Array.isArray(context?.params?.services)
    ? context?.params?.services.join("/")
    : context?.params?.services;
    console.log(service, "service")
  try {
    const content = await fetchServiceData(service);

    let parsedContent: Props["content"] | null = null;
    if (typeof content === "string") {
      try {
        parsedContent = JSON.parse(content);
      } catch (error) {
        console.error("Error parsing JSON content:", error);
        return { notFound: true };
      }
    } else {
      parsedContent = content as Props["content"];
    }

    if (!parsedContent) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        content: parsedContent,
      },
    };
  } catch (error) {
    console.error("Error fetching service data:", (error as Error).message);
    return {
      notFound: true,
    };
  }
};
