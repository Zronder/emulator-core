import { exec } from 'child_process'
import { getConfig } from './config'
import { showErrorMessage } from './message'
export * from './constants'
export * from './message'
export * from './config'

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
    if (process.platform.startsWith('win') && path.includes('/')) {
        showErrorMessage(
            'Make sure your Windows path is set correctly! Example: C:\\Users\\Me\\AppData\\Local\\Android\\Sdk\\emulator',
        )
        return false
    }
    return path
}

export const simulatorPath = () => {
    const config = getConfig()
    return config['simulatorPath']
}

const getPath = () => {
    const config = getConfig()
    const pathMac = config['emulatorPathMac']
    const pathLinux = config['emulatorPathLinux']
    const pathWindows = config['emulatorPathWindows']
    const emulatorPath = config['emulatorPath']

    if (process.platform === 'darwin' && pathMac) {
        return pathMac
    }
    if (process.platform === 'linux' && pathLinux) {
        return pathLinux
    }
    if (process.platform.startsWith('win') && pathWindows) {
        return pathWindows
    }
    return emulatorPath
}

export const androidExtraBootArgs = () => {
    const config = getConfig()
    return config['androidExtraBootArgs']
}
