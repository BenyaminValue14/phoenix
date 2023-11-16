type IProps = {
  url: string,
  srcImage: string,
  title: string,
  content:string,
}

const ProjectCard = ({url, srcImage, title, content}: IProps) => {
  return (
    <article className="project-container">
      <a className="project-image" href={url}>
        <img src={srcImage} alt={title} />
      </a>
      <h3 className="project-title">{title}</h3>
      <p className="project-text">{content}</p>
      <div className="buttons-container text-start py-4">
        <a href={url} className="button active text-white hover:text-white inline-block">Ver demo</a>
      </div>
    </article>
  );
};

export default ProjectCard;
