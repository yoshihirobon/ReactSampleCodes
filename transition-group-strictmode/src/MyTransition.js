import { useState } from 'react';
import { TransitionGroup } from "react-transition-group";
import TransitionNumberList from './TransitionNumberList';

function MyTransition(props) {

	const [items, setItems] = useState([1, 2, 3, 4, 5]);
	const [nextNum, setNextNum] = useState(6);
	add.bind(this);
	remove.bind(this);

	function randomIndex() {
		return Math.floor(Math.random() * items.length)
	}
	function add(e) {
		setNextNum(nextNum + 1)
		items.splice(randomIndex(), 0, nextNum)
	};
	function remove(e) {
		setItems(items => {
			const n = items[randomIndex()];
			return items.filter(item => {
				return item !== n
			})
		})
	}

	return (
		<div>
			<h2>MyTransition</h2>
			<button onClick={add}>Add</button>
			<button onClick={remove}>Remove</button>
			<br />
			<TransitionGroup>
				{
					items.map((num) =>
						<TransitionNumberList key={num} number={num} />
					)
				}
			</TransitionGroup>
			<hr />
			<p>{JSON.stringify(items)}</p>
		</div>
	);
}

export default MyTransition;