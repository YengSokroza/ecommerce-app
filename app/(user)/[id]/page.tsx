import CardDetailComponent from "@/components/card/CardDetailComponent";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  } 

const ENDPOINT = "https://store.istad.co/api/products/"

const getData = async(id: string) => {
    const res = await fetch(`${ENDPOINT}${id}`,{next: {revalidate: 10}});
    const data = await res.json();
   
    return data;
}


export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
   
    const id = params.id
   
    const product = await fetch(`https://store.istad.co/api/products/${id}`).then((res) => res.json())
   
    const previousImages = (await parent).openGraph?.images || []
   
    return {
      title: product.name,
      description: product.desc,
      openGraph: {
        images: product.image,
      },
    }
  }

export default async function detail(props: Props) {
    let data =  await getData(props.params.id)
    console.log(data);
    
    console.log("This is props: ", props)
    console.log(props.searchParams.title)
	return(
    <section className='flex justify-center flex-col items-center text-lg  py-8 space-y-4'> 
        <div className='space-y-2'>
          <h1 className='xl:text-5xl text-3xl text-center font-semibold text-gray-800 '>Ready to Make it Yours?</h1>
          <p className='text-lg text-center px-16 text-slate-800 '>Need personalized recommendations? Visit us today!</p>
        </div>
        <CardDetailComponent name={data?.name || "no title"}  desc={data?.desc || "no desctiption"} image={data?.image || "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" }  /> 
     </section>
  );

    
}
