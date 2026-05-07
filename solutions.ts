                                    // Problem 1 solution
const filterEvenNumbers = (numbers: number[]): number[] =>{
    return numbers.filter(number => number % 2 === 0);
};
filterEvenNumbers([1, 2, 3, 4, 5, 6]);


                                    // Problem 2 solution
const reverseString = (String: string): string => {
  return String.split("")
  .reverse()
  .join("");
};
reverseString("typescript");


                                    // Problem 3 solution
type StringOrNumber = string | number;
function checkType (input: StringOrNumber): string {
    if(typeof input === "string"){
        return "String";
    }else if(typeof input === "number"){
        return "Number";
    }else{
        return "Unknown";
    };
};
checkType("Rashid");
checkType(42);

                                    // Problem 4 solution
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};
const user = { 
    id: 1, 
    name: "John Doe",
    age: 21 };

getProperty(user, "name");


                                    // Problem 5 solution
interface Book {
    title: string;
    author: string;
    publishedYear: number;
};
function toggleReadStatus (book: Book): Book & { isRead: boolean } {
    return{
        ...book,
        isRead: true,
    };
};
const Book ={
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024
};
toggleReadStatus(Book);


                                    // Problem 6 solution
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age= age;
    }
}
class Student extends Person{
    grade: string;
    constructor(name:string, age:number, grade:string){
        super(name,age);
        this.grade = grade;
    }
    getDetails(): string{
        return `Name: ${this.name}, Age: ${this.age}, Grade: $this.grade`;
    }
}
const student = new Student("Alice", 20, "A");
student.getDetails();


                                    // Problem 7 solution
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const set1 = new Set(arr1);
  return arr2.filter((num) => set1.has(num));
};
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
