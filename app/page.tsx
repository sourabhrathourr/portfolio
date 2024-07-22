import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <main className="flex max-sm:px-6 max-sm:py-12  l-0 r-0 m-auto flex-col  xl:w-[45%] lg:w-[60%] antialiased  gap-4 p-24">
      <Navbar />
      <h1 className="text-3xl max-sm:text-2xl antialiased mt-6 ">
        hi 👋🏻 this is sourabh rathour
      </h1>
      <p className="text-xl max-sm:text-base antialiased">
        i'm a software engineer who loves to solve complex and challenging
        problems through code and design, i work at
        <span className="text-blue-700 cursor-pointer"> betterstacks</span> as a
        full stack engineer building the future of search and ai.
      </p>
      <p className="text-xl max-sm:text-base antialiased">
        in the past, i have developed and designed various side projects where i
        worked as a founding engineer.
      </p>
      <h2 className="text-xl max-sm:text-base antialiased mt-6 text-[#444]">
        work
      </h2>
      <WorkSection />
      <h2 className="text-xl max-sm:text-base antialiased mt-6 text-[#444]">
        side projects
      </h2>
      <ProjectSection />
      <Footer />
    </main>
  );
}
