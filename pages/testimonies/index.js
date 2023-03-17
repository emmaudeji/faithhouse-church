import PageHeroBanner from "@/component/PageHeroBanner";

const index = () => {
  return (
    <>
      <PageHeroBanner
        pageTitle="Testimonies >"
        heading="Their testimonies are proves that God works miracles"
        image={"/testimony-woman.jpg"}
      />
      <div className="h-[50vh] w-full text-2xl font-bold text-zinc-300 section-container justify-center items-center text-center">
        Updating content
      </div>
    </>
  );
};

export default index;
