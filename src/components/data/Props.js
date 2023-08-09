import "./props.css"

const Props = (props) => {
return (
    <>
    <div className="cards">
        <div className="card">
            <img src={props.imgsrc} alt="myPic" className="card__img" />
            <div className="card__info">
                <span className="card__category"></span>
                <h3 className="card__title"> {props.title} </h3>
                <a href="/#" download={props.link} target="_blank">
                    <button> Download </button>
                </a>
                
            </div>
        </div>
    </div>
    </>
)
    };
   
    export default Props;
