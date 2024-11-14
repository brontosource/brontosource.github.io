import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="container h-[calc(100vh-324px)] min-h-fit flex flex-col flex-grow justify-center mx-auto text-center py-12">
      <h1 className="text-4xl mx-auto text-primary-content">
        Oops, Charlette Can't Find That Page!
      </h1>
      <Link href="/" className="btn btn-primary w-40 my-4 mx-auto">
        Back To Home
      </Link>
    </main>
  );
};

export default NotFoundPage;
