import Link from "next/link";
import ProjectCard from "../ProjectCard";

const LastProjects = () => {
  return (
    <div className="projects">
    <h1 className="subtitle">Últimos Proyectos</h1>
    <div className="projects-list">
      <ProjectCard
        content="lorem ipsum"
        srcImage="https://d1l9597hydyb9x.cloudfront.net/cms_masuno/images/project/12/cover/12/12.png"
        title="Ecommerce San Fernando"
        url="https://benyaroot.com"
      />
      <ProjectCard
        content="lorem ipsum"
        srcImage="https://d1l9597hydyb9x.cloudfront.net/cms_masuno/images/project/12/cover/12/12.png"
        title="Planificador de gastos"
        url="https://benyaroot.com"
      />
      <ProjectCard
        content="lorem ipsum"
        srcImage="https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/62484c52eba34b77a562524d/screenshot_2022-04-02-13-15-14-0000.png"
        title="Dashboard CMS"
        url="https://benyaroot.com"
      />
    </div>
    <Link href={"/projects"} className="text-orangeNormal">Ver más</Link>
  </div>
  );
};

export default LastProjects;
