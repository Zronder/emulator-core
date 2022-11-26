import { exec } from 'child_process'
export * from './constants'

export const runCmd = (cmd: string, options?: any): Promise<string> => {
    return new Promise((resolve, reject) => {
        exec(cmd, options, (error, stdout, stderr) => {
            if (error) {
                return reject(stderr)
            }
            return resolve(stdout.toString())
        })
    })
}

export const emulatorPath = () => {
    const path = getPath()

    // if (process.platform.startsWith('win') && path.includes('/')) {
    //     showErrorMessage(
    //         'Make sure your Windows path is set correctly! Example: C:\\Users\\Me\\AppData\\Local\\Android\\Sdk\\emulator',
    //     )
    //     return false
    // }

    return path
}

const getPath = () => {
    const pathMac = ''
    const pathLinux = ''
    const pathWindows = ''

    if (process.platform === 'darwin' && pathMac) {
        return pathMac
    }
    if (process.platform === 'linux' && pathLinux) {
        return pathLinux
    }
    if (process.platform.startsWith('win') && pathWindows) {
        return pathWindows
    }
    return '~/Library/Android/sdk/emulator'
}

export const androidExtraBootArgs = () => {
    return ''
}
