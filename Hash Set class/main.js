import './style.css'


class MyHashSet {
  constructor() {
    this.HashSet = {}
  }


  add(key) {
    if(key >= 0 && key <= 106 && Object.keys(this.HashSet).length <104){
      this.HashSet[key] = true
    }
    
  }

  contains(key) {
    return this.HashSet[key] === true
  }

  remove(key) {
    if (this.contains(key)) {
      delete this.HashSet[key];
    }
  }
}


const myHashSet = new MyHashSet();


myHashSet.add(106);
myHashSet.add(2);
myHashSet.add(3);


console.log(myHashSet.contains(106));
console.log(myHashSet.contains(3));
console.log(myHashSet.contains(4));

myHashSet.remove(3);


console.log(myHashSet.contains(3));