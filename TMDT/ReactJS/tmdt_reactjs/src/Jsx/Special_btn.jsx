import '../Css/Base.css';
import '../Css/Grid.css';
import '../Css/Main.css';

function SpecialBtn(props) {
  return (
    <button className={`btn primary-btn ${props.className}`} type={props.type} reference={props.ref} onClick={props.validate}>
      {props.value}
    </button>
  );
}
export default SpecialBtn;
