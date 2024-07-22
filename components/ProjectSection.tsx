import BrandIcon from "./BrandIcon";

type Project = {
  id: number;
  name: string;
  description: string;
  tag: string;
  tagProp: string;
};

type ProjectCardProps = {
  project: Project;
};

const projectData = [
  {
    id: 1,
    name: "Mask",
    description: "Anonymous platform",
    tag: "web",
    tagProp: "bg-[#DDFECE] text-[#3A7D44]",
  },
  {
    id: 2,
    name: "Flux",
    description: "A youtube notes generator app.",
    tag: "ai",
    tagProp: "bg-[#EAF7FE] text-[#1d4ed8]",
  },
  {
    id: 2,
    name: "Prodec",
    description: "Linear integration",
    tag: "ongoing",
    tagProp: "bg-[#FEF3DC] text-[#6B4006]",
  },
];

const ProjectSection = () => {
  return (
    <div>
      {projectData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex relative antialiased border-b border-[#8f8f8f]/10 py-4 px-4 max-sm:px-0 rounded-lg cursor-pointer items-center gap-6 sm:hover:bg-[#EDEDED]/30 sm:hover:border-[#EDEDED]/30">
      <BrandIcon />
      <div className="">
        <h1 className="antialiased text-base">{project.name}</h1>
        <p className="text-sm text-[#8F8F8F] antialiased">
          {project.description}
        </p>
      </div>
      <span
        className={`absolute bottom-4 max-sm:hidden antialiased right-6 text-sm  ${project.tagProp}  px-3 rounded-full`}
      >
        {project.tag}
      </span>
    </div>
  );
};

export default ProjectSection;
