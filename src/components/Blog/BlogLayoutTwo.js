import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const BlogLayoutTwo = ({ blog }) => {
  return (
    <Link className="group grid grid-cols-12 gap-4 items-center text-dark dark:text-light" href={blog.url}>
      <div className="col-span-4 h-full rounded-xl overflow-hidden">
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          width={blog.image.width}
          height={blog.image.height}
          alt={blog.title}
          className="aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
        />
      </div>

      <div className="col-span-8 w-full">
        <span className="uppercase text-accent dark:text-accentDark font-medium text-sm">
          {blog.tags[0]}
        </span>
        {/* <Link className=" inline-block" href={blog.url}> */}
          <h2 className="my-1 font-semibold capitalize  text-lg relative ">
            {/* {blog.title} */}

            <span className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_6px] dark:from-accentDark/50 dark:to-accentDark/50">
              {blog.title}
            </span>
          </h2>
        {/* </Link> */}

        <span className="capitalize text-dark/50 dark:text-light/50 font-semibold">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </Link>
  );
};

export default BlogLayoutTwo;
