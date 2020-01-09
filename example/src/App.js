import React, { Component } from 'react'

import {ColoredHeadingOne , Button } from 'pb-test'


export default class App extends Component {
	render () {
		return (
			<div>
				<ColoredHeadingOne
					text="Colored Heading"
					color={"red"}
				/>
				<Button
					text="I am Button"
				/>
			</div>
		)
	}
}
