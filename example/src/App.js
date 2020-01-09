import React, { Component } from 'react'

import { Button, CodeButton , LinkButton , FaucetRequestButton} from 'pb-test'


export default class App extends Component {
	render () {
		return (
			<div>
				<Button text="Button"/>
				<CodeButton text="Code Button"/>
				<LinkButton text="Link Button" />
				<FaucetRequestButton text="Faucet Request Button" />
			</div>
		)
	}
}
