import { emulator as _emulator } from '../../config.json'
let emulator = _emulator
export const setConfig = (e: any) => {
    if (!e) return
    emulator = {
        ..._emulator,
        ...e,
    }
}
export const getConfig = (key?: string): { [str: string]: any } => {
    const result = Object.keys(emulator).reduce((prev: any, current: string) => {
        const value = emulator[current as keyof typeof emulator]
        return {
            ...prev,
            [current]: value.default,
        }
    }, {})
    if (!key) return result
    return result[key]
}
