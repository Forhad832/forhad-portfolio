import why_addition_img from '../../images/js_addition.png'
import js_compare from '../../images/js_compare.png'
export const blog = [
    {
      id: 1,
      title: `Why: In Javascript 0.1+ 0.2 === 0.3 is not true? `,
      description: ['When You run this code and print the result of x == y, you may be surprised to see that its returns false.This is because of a limitation in how Javascript handles floating-point numbers','In Javascript, numbers are represented using the IEEE 754 standard for floating-point arithmetic.This means that not all decimal numbers can be represented exactly as binary floating-point number','In particular,the decimal number 0.1 cannot be respresented exactly in binary floating-point is actually slightly larger tha 0.3 due to rounding errors in the binary respresentation. Therefore,x is not qual to y'],
      date: 'Fab 23 2022',
      image: why_addition_img,
      route: 'why-addition-is-not-true',
      
    },
    {
      id: 2,
      title: `Why: In Javascript "5 + 2 = 52 but "5 - 2 = 3  ? `,
      description: ['In the first statement,x is a string("5") and y is a number (2).When you use the + operator with a string and a number,Javascript performs string concatenates: it coverts the number to a string and then soncatenate the two stings. si "5" and 2 are concatenated to produce the sting "52"','In the second statements,x is still string("5") and y is still a number.However, when you use the - operator with a string and a number,Javscript attempts to convert the string to a number. In this case, "5" can be converted to the number 5, so the expression evalutes to 5-2,which is 3'],
      date: 'Sep 06 2023',
      image: js_compare,
      route: 'why-addition-like-this',
    },
  ]
  