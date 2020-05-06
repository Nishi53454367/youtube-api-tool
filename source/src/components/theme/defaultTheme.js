import {createMuiTheme} from '@material-ui/core/styles'
import {blue, red} from '@material-ui/core/colors'

const defaultTheme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: red
    },
    overrides: {
        MuiCard: {
            root: {
                margin: 4,
                padding: 8
            }
        },
        MuiSvgIcon: {
            root: {
                verticalAlign: "middle"
            }
        },
        MuiCheckbox: {
            root: {
                margin: 8
            }
        },
        MuiFormGroup: {
            root: {
                margin: 8
            }
        },
        MuiInputBase: {
            root: {
                margin: 8
            }
        },
        MuiFormLabel: {
            root: {
                display: "block"
            }
        },
        MuiTextField: {
            root: {
                width: 600
            }
        }
    }
});

export default defaultTheme;