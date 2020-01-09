import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'


export class ColoredHeadingOne extends Component {
	static propTypes = {
		text: PropTypes.string,
		color: PropTypes.string
	}

	render() {
		const { text, color } = this.props

		return (
			<h1 style={{ color }}>{text}</h1>
		)
	}
}



export class Button extends Component {
	static propTypes = {
		text: PropTypes.string,
	}

	render() {
		const { text } = this.props

		return (
			<button>{text}</button>
		)
	}
}
