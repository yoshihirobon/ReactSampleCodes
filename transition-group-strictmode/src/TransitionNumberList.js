import { useRef } from 'react';
import { CSSTransition } from "react-transition-group";

function TransitionNumberList(props) {
	const nodeRef = useRef(null)
	return (
		<CSSTransition
			nodeRef={nodeRef}
			timeout={{ enter: 100, exit: 1000 }}
			classNames="list-item"
			in={props.in} unmountOnExit={true}>

			<span ref={nodeRef} className="list-item">{props.number}</span>
		</CSSTransition>
	);
}

export default TransitionNumberList;