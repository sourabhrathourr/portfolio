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
    description: "Anonymous platform for college students",
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
    <div className="flex relative antialiased border-b border-[#8f8f8f]/10 py-4 px-4 rounded-lg cursor-pointer items-center gap-6 hover:bg-[#EDEDED]/30 hover:border-[#EDEDED]/30">
      <BrandIcon />
      <div className="">
        <h1 className="antialiased">{project.name}</h1>
        <p className="text-sm text-[#8F8F8F] antialiased">
          {project.description}
        </p>
      </div>
      <span
        className={`absolute bottom-4 antialiased right-6 text-sm  ${project.tagProp}  px-3 rounded-full`}
      >
        {project.tag}
      </span>
    </div>
  );
};

export default ProjectSection;
