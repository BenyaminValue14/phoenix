type IProps = {
  children: React.ReactNode
  title: string;
  content: string;
}
const AboutCards = ({children, content, title}: IProps) => {
  return (
    <article className='about-card'>
      {children}
      <h5 className="text-sm">{title}</h5>
      <small className="text-xs">{content}</small>
    </article>
  );
};

export default AboutCards;
