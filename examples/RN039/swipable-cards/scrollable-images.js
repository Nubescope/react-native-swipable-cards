import React, { PropTypes, PureComponent } from 'react'
import {
  View,
  Image,
  ScrollView,
} from 'react-native'

class ScrollableImages extends PureComponent {

  render() {
    const { style, height = 300, sources = [] } = this.props
    console.warn('hola!', sources)
    return (
        <ScrollView
          //contentContainerStyle={{ flex: 1 }}
          bounces={false}
          pagingEnabled
        >
          {sources.map((source, i) =>
            <Image key={i} style={style} source={source} />
          )}
        </ScrollView>

    )
  }
}

ScrollableImages.propTypes = {
  ...Image.propTypes,
  sources: PropTypes.arrayOf(Image.propTypes.source),
}

export default ScrollableImages