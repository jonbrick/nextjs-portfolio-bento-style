import Footer from "@/components/footer";
import LeftSide from "@/components/left-side";
import RightSide from "@/components/right-side";

export default function Home() {
  return (
    <main className="container flex flex-col  flex-1  h-full  w-full gap-6 xl:gap-10 mx-auto xl:flex-row ">
      {/* Left Side */}
      <LeftSide />
      {/* Right Side */}
      <RightSide />
      {/* Footer */}
      <div className="flex w-full px-8 pb-10 xl:hidden">
        <Footer />
      </div>
    </main>
  );
}
