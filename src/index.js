import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'



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


export class CodeButton extends Component {
	static propTypes = {
		text: PropTypes.string,
	}

	render() {
		const { text } = this.props

		return (
			<button className={styles.codeCopy}>{text}</button>
		)
	}
}

export class LinkButton extends Component {
	static propTypes = {
		text: PropTypes.string,
	}

	render() {
		const { text } = this.props

		return (
			<button className={styles.link}>{text}</button>
		)
	}
}

export class FaucetRequestButton extends Component {
	static propTypes = {
		text: PropTypes.string,
	}

	render() {
		const { text } = this.props

		return (
			<button className={styles.faucetRequest}>{text}</button>
		)
	}
}
