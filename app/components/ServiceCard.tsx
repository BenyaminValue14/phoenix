import CheckIcon from "./svg/CheckIcon";

type IProps = {
  list: string[],
  title: string,

}

const ServiceCard = ({title, list}: IProps) => {
  return (
    <article className="service">
      <div className="service-header">
      <h2 className="text-sm font-bold">{title}</h2>
      </div>
      <ul className="list">
        {
          list.map((el,idx) => (
            <li key={`li-${idx}`}>
              <CheckIcon/>
              <span className="text-sm text-start">{el}</span>
            </li>
          ))
        }
      </ul>
    </article>
  );
};

export default ServiceCard;
