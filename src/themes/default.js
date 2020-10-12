import sro from 'self-referenced-object'
import tinycolor from 'tinycolor2'

const Default = sro({
    colors: {
        primary: 'blue',
        secondary: 'yellow',
        dark: 'black',
        light: 'white',
        positive: 'green',
        negative: 'red',
    },
    navbar: {
        item: {
            padding: '1em',
            hoverColor: '${this.colors.secondary}',
        }
    }
})


export { Default }