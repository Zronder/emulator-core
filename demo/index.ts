import { Emulator } from '../src'

const run = async () => {
    const emulator = Emulator.getInstance()
    const android = await emulator.getEmulators('android')
    if (android) {
        await emulator.runEmulator('android', android[0])
        return
    }
    const ios = await emulator.getEmulators('ios')
    if (ios) {
        await emulator.runEmulator('ios', ios[0])
        return
    }
}

run()
