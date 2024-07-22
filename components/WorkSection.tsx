import BrandIcon from "./BrandIcon";

type Work = {
  id: number;
  company: string;
  position: string;
  duration: string;
};

type WorkCardProps = {
  work: Work;
};

const workData = [
  {
    id: 1,
    company: "Better Stacks",
    position: "Full Stack Engineer",
    duration: "April 2024 - Present",
  },
  {
    id: 2,
    company: "Quantumx ",
    position: "Full Stack Engineer Intern",
    duration: "Jan 2024 - Mar 2024",
  },
];

const WorkSection = () => {
  return (
    <div>
      {workData.map((work) => (
        <WorkCard key={work.id} work={work} />
      ))}
    </div>
  );
};

const WorkCard = ({ work }: WorkCardProps) => {
  return (
    <div className="flex relative border-b border-[#8f8f8f]/10 py-4 px-4 max-sm:px-0 rounded-lg cursor-pointer items-center gap-6 sm:hover:bg-[#EDEDED]/30 sm:hover:border-[#EDEDED]/30">
      <BrandIcon />
      <div className="">
        <h1 className="antialiased text-base">{work.company}</h1>
        <p className="text-sm text-[#8F8F8F]">{work.position}</p>
      </div>
      <span className="absolute max-sm:hidden bottom-4 right-6 text-sm text-[#8F8F8F]">
        {work.duration}
      </span>
    </div>
  );
};

export default WorkSection;
