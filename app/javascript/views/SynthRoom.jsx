import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import ToneSynth from '../module_components/ToneSynth'
import ChorusEffect from '../module_components/ChorusEffect'
import Channel from '../module_components/Channel'
import VibratoEffect from '../module_components/VibratoEffect'
import ChebyshevEffect from '../module_components/ChebyshevEffect'
import TremoloEffect from '../module_components/TremoloEffect'

export default class SynthRoom extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { instruments, handlePropertyValueChange } = this.props
    const instrumentElements = []

    instruments.forEach((instrument, i) => {
      const { id, name, type, node, settings } = instrument
      let instrumentElement

      switch (type) {
        case 'ToneSynth':
          instrumentElement = (
            <ToneSynth
              id={id}
              name={name}
              node={node}
              settings={settings}
              handlePropertyValueChange={handlePropertyValueChange}
              key={i}
            />
          )
          break
        case 'Vibrato':
          instrumentElement = (
            <VibratoEffect
              id={id}
              name={name}
              node={node}
              settings={settings}
              handlePropertyValueChange={handlePropertyValueChange}
              key={i}
            />
          )
          break
      }

      instrumentElements.push(instrumentElement)
    })

    return <div className="SynthRoom">{instrumentElements}</div>
  }
}

SynthRoom.propTypes = {
  instruments: PropTypes.array.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
