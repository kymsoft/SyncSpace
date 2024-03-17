import Image from "next/image";

export default function Introduction() {
  return (
    <div className="md:w-[800px] w-[600px] ml-10">
      <div className="mb-10">
        <h3 className="mb-5  scroll-m-20 text-2xl font-semibold tracking-tight">
          INTRODUCTION
        </h3>
        <p className="text-lg">
          Syncspace is a collaborative platform for document management ans
          sharing. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem voluptatibus tenetur possimus voluptate quod dolore
          repellendus ex? Mollitia totam magnam tenetur molestias architecto
          harum consectetur, modi dolorem, soluta recusandae delectus.
        </p>
      </div>
      <div className="mb-10">
        <h3 className="mb-5  scroll-m-20 text-2xl font-semibold tracking-tight">
          User Authentication
        </h3>
        <p className="text-lg">
          Syncspace is a collaborative platform for document management ans
          sharing. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem voluptatibus tenetur possimus voluptate quod dolore
          repellendus ex? Mollitia totam magnam tenetur molestias architecto
          harum consectetur, modi dolorem, soluta recusandae delectus.
        </p>
        <div className=" my-3 flex w-full justify-center items-center">
            <Image 
              src="/assets/auth.png"
              alt="Auth"
              height={400}
              width={400}
            />

        </div>
      </div>
      <div className="mb-10">
        <h3 className="mb-5  scroll-m-20 text-2xl font-semibold tracking-tight">
          Customization
        </h3>
        <p className="text-lg">
          Syncspace is a collaborative platform for document management ans
          sharing. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem voluptatibus tenetur possimus voluptate quod dolore
          repellendus ex? Mollitia totam magnam tenetur molestias architecto
          harum consectetur, modi dolorem, soluta recusandae delectus.
        </p>
        <div className=" my-3 flex w-full justify-center items-center">
            <Image 
              src="/assets/worker.png"
              alt="Auth"
              height={600}
              width={600}

            />

        </div>
      </div>
    </div>
  );
}
