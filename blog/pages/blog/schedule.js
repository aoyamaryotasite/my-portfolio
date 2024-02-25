import { getPostBySlug } from "/lib/api";
import Container from "@/components/container";
import PostHeader from "@/components/post-header";
import PostBody from "@/components/post-body";
import { TwoColumn,TwoColumnMain,TwoColumnSidebar } from "@/components/two-column";
import ConvertBody from "@/components/convert-body";
import Image from 'next/image'

export default function Schedule({
  title,
  publish,
  content,
  eyecatch,
  categories
}) {
  return (
    <Container>
     <article>
        <PostHeader title={title} subtitle="Blog Article" publish={publish}/>
        <figute>
        <Image 
         src={eyecatch.url}
         alt=""
         layout="responsive"
         width={eyecatch.width}
         height={eyecatch.height}
         sizes="(min-width:1152px)1152px,100vw"
         property
        />
        </figute>
        <TwoColumn>
            <TwoColumnMain>
                <PostBody>
                    <ConvertBody contentHTML={content}/>
                </PostBody>
            </TwoColumnMain>
            <TwoColumnSidebar></TwoColumnSidebar>
        </TwoColumn>
     </article>
    </Container>
  );
}

export async function getStaticProps() {
    const slug ='schedule'

    const post = await getPostBySlug(slug);

    if (!post) {
        return {
          notFound: true,
        };
      }
    

    return {
        props: {
          title: post.title,
          publish: post.publishDate,
          content: post.content,
          eyecatch: post.eyecatch,
          categories: post.categories,
        },
      }
}