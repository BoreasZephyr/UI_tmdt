import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';

function SpecialBtn(props) {
  return (
    <button className={`btn primary-btn ${props.className}`} type={props.type}>
      {props.value}
    </button>
  );
}
export default SpecialBtn;
