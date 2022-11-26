import { getAndroidEmulators, runAndroidEmulator } from './android'
import { getIOSSimulators, runIOSSimulator } from './ios'
import { setConfig } from './utils'

export type EmulatorConfig = {
    emulatorConfig?: any
}
export type EmulatorType = 'android' | 'ios'

export class Emulator {
    static single: Emulator | undefined
    static getInstance(config?: EmulatorConfig) {
        if (!Emulator.single) {
            setConfig(config?.emulatorConfig)
            Emulator.single = new Emulator()
        }
        return Emulator.single
    }
    constructor() {}
    async getEmulators(type: EmulatorType) {
        switch (type) {
            case 'android':
                return getAndroidEmulators()
            case 'ios':
                return getIOSSimulators()
        }
    }

    async runEmulator(type: EmulatorType, emulator: string, clod?: boolean) {
        switch (type) {
            case 'android':
                return runAndroidEmulator(emulator, clod)
            case 'ios':
                return runIOSSimulator(emulator)
        }
    }
}
