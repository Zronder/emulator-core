import { runCmd, simulatorPath, showErrorMessage } from '../utils'
import { IOS_COMMANDS } from './constants'

export const getIOSSimulators = async () => {
    try {
        const res = await runCmd(IOS_COMMANDS.LIST_SIMULATORS)
        const { devices } = JSON.parse(res)
        return Object.keys(devices)
            .reduce((array: any[], item) => {
                if (devices[item].length > 0) {
                    return [...array, ...devices[item]]
                }
                return array
            }, [])
            .filter(item => item.isAvailable)
    } catch (e) {
        // showErrorMessage(e.toString())
        // showErrorMessage(
        //     `Something went wrong fetching you iOS simulators! Make sure you have Xcode installed. Try running this command in your terminal: ${IOS_COMMANDS.LIST_SIMULATORS}`,
        // )
        return false
    }
}

export const runIOSSimulator = async (simulator: string) => {
    let developerDir
    try {
        const configPath = simulatorPath()
        const xcodePath = await runCmd(IOS_COMMANDS.DEVELOPER_DIR)

        if (configPath) {
            developerDir = configPath
        } else {
            developerDir = xcodePath.trim() + IOS_COMMANDS.SIMULATOR_APP
        }

        const res = await runCmd('open ' + developerDir + IOS_COMMANDS.SIMULATOR_ARGS + simulator)
        return res || false
    } catch (e: any) {
        showErrorMessage(e.toString())
        showErrorMessage(
            `Something went wrong running you iOS simulator! Try running this command in your terminal: ${
                'open ' + developerDir?.trim() + IOS_COMMANDS.SIMULATOR_ARGS + simulator
            }`,
        )
        return false
    }
}
