import { Dimensions } from 'react-native';

//Width and Height of window
const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;

export const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
};

export const randomPair = (offset = 0) => {
    let yTopP = -randomNumber(300, wHeight - 100);

    const collisionTop = { position: { x: wWidth + offset, y: yTopP }, size: { height: wHeight * 2, width: 50 } }
    const collisionBottom = { position: { x: wWidth + offset, y: wHeight * 2 + 200 - yTopP }, size: { height: wHeight * 2, width: 50 } }

    return { collisionBottom, collisionTop }
}