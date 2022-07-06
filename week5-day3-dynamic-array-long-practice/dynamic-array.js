class DynamicArray {

  constructor(defaultSize=4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if(this.length === this.capacity){
      this.resize();
    }
    this.data[this.length] = val;
    this.length++;
  }


  pop() {
    let pop = this.data[this.length - 1];
    this.data[this.length - 1] = undefined;
    this.length--;
    return pop;
  }

  shift() {
    let shift = this.data[0];
    for(let idx = 0; idx < this.length; idx++) {
      this.data[idx] = this.data[idx + 1];
    }
    this.data[this.length - 1] = undefined;
    this.length--;
    return shift;
  }

  unshift(val) {
    if(this.length === this.capacity){
      this.resize();
    }
    for(let idx = this.length - 1; idx >= 0; idx--) {
      this.data[idx+1] = this.data[idx];
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf (val) {
    for(let idx = 0; idx < this.length; idx++) {
      if(val === this.data[idx]){
        return idx;
      }
    }
    return -1;
  }

  resize () {
    this.capacity *= 2;
    let newArr = new Array(this.capacity);
    for(let idx = 0; idx < this.length; idx++) {
      newArr[idx] = this.data[idx];
    }
    this.data = newArr;
  }
}


module.exports = DynamicArray;
