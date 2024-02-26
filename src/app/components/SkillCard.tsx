type IProps = {
  children:   React.ReactNode,
  title: string,
}

const SkillCard = ({children, title}: IProps) => {
  return (
    <article className="details">
      {children}
      <h4 className="text-sm">{title}</h4>
    </article>
  );
};

export default SkillCard;
