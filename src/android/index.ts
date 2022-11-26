import path from 'path'
import { emulatorPath, runCmd, ANDROID, ANDROID_COMMANDS, androidExtraBootArgs } from '../utils'

const getAndroidPath = async () => {
    return (await runCmd(`echo "${emulatorPath()}"`)).trim().replace(/[\n\r"]/g, '')
}

export const getEmulatorPath = (androidPath: string) => {
    const emulatorPath = path.join(androidPath, ANDROID.PATH)
    if (process.platform.startsWith('win')) {
        return `"${emulatorPath}"`
    }
    return emulatorPath
}

export const getAndroidEmulators = async () => {
    const androidPath = await getAndroidPath()
    if (!androidPath) return false
    const command = `${getEmulatorPath(androidPath)}${ANDROID_COMMANDS.LIST_AVDS}`
    try {
        const res = await runCmd(command, {
            cwd: androidPath.replace('~', process.env.HOME || ''),
        })

        if (res) {
            return res.trim().split('\n')
        }
        // showErrorMessage(
        //     'There are no Android emulators found, please check if you have any emulators installed.',
        // )
        return false
    } catch (e) {
        // showErrorMessage(e.toString())
        // showErrorMessage(
        //     `Something went wrong fetching you Android emulators! Make sure your path is correct. Try running this command in your terminal: ${command}`,
        // )
        return false
    }
}

export const runAndroidEmulator = async (emulator: string, cold?: boolean) => {
    const androidPath = await getAndroidPath()
    if (!androidPath) return false

    const command = `${getEmulatorPath(androidPath)} ${androidExtraBootArgs()}${
        cold ? ANDROID_COMMANDS.RUN_AVD_COLD : ANDROID_COMMANDS.RUN_AVD
    }${emulator}`
    try {
        const res = await runCmd(command, {
            cwd: androidPath.replace('~', process.env.HOME || ''),
        })
        return res || false
    } catch (e) {
        // showErrorMessage(e.toString())
        // showErrorMessage(
        //     `Something went wrong running you Android emulator! Try running this command in your terminal: ${command}`,
        // )
        return false
    }
}
