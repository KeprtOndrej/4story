export default function Button(props){
    let className = "defaultButton";
    className += props.customClass ?? "";
    let style = props.customClass ?? {};
    return (
        <div
            className={className}
            style={style}
            onClick={() => {props.onClick()}}
        >
            {props.text}
        </div>
    )
}