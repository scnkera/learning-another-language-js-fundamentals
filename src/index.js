// ======================
//      VARIABLES
// ======================
// veggie = "carrot"
// veggie = "onion"

let veggie = 'carrot';
console.log({ veggie });
veggie = 'onion';
console.log({ veggie });

//
//
// =========================
//      DATA STRUCTURES
// =========================

// animals = ["tiger", "panda", "raccoon"]
// animals.append("opossum")

const animals = ['tiger', 'panda', 'raccoon']
console.log({animals});
animals.push('opossum');
console.log({animals});

// dog = {"name": "Sprinkles", "age": 3}
// dog["is_friendly"] = True

const dog = {
  name: 'Sprinkles',
  age: 3,
};
console.log({ dog });
dog.isFriendly = true;
console.log({ dog });

//
//
// =================
//       LOOPS
// =================

// num = 5
// for i in range(num):
//    print(i)

const num = 5;
for (let i = 0; i < num; i += 1){
  console.log(i);
}

for (const animal of animals) {
  console.log(animal);
}

for (const [key, value] in Object.entries(dog)) {
  console.log(`${key}: ${value}`);
}

// for animal in animals:
//    print(animal)

// for k, v in dog.items():
//    print(f"{k}: {v}")

//
//
// ===================================
//       FUNCTIONS / CONDITIONALS
// ===================================

// def fizzbuzz(num):
//    if num % 3 == 0 and num % 5 == 0:
//        return "fizzbuzz"
//    elif num % 3 == 0:
//        return "fizz"
//    elif num % 5 == 0:
//        return "buzz"
//    else:
//        return num

// Old way: Function Declaration

//
// ES6 way: Function Expression

//
//
// ======================
//       CLASSES
// ======================

// class Animal:
//    def __init__(self,species,name):
//        self.species = species
//        self.name = name
//
//    def __str__(self):
//        return f"{self.name} is a {self.species}"

// class Dog(Animal):
//    def __init__(self, name, trick):
//        super().__init__(species="dog", name=name)
//        self.trick = trick
//
//    def __str__(self):
//        return f"{super().__str__()} that can {self.trick}"
