import getBuffer from './getBuffer';

export default class ArrayBufferConverter {
  load() {
    this.uploadedData = getBuffer();
  }

  toString() {
    if (!this.uploadedData) {
      throw new Error('No data');
    }
    let text = '';

    for (let i = 0; i < this.uploadedData.length; i += 1) {
      text += String.fromCharCode(this.uploadedData[i]);
    }

    return text;
  }
}
