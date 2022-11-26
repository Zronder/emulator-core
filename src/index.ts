import { getAndroidEmulators, runAndroidEmulator } from './android'

const run = async (str: string) => {
    console.log(await getAndroidEmulators())
    runAndroidEmulator('Pixel_XL_API_29', true)
}

run('这是一个node工程')
