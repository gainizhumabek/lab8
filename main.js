let lab1 = [5, 5, 0, 5, 5, 10, 10];
let lab2 = [5, 5, 5, 5, 5, 5, 10];
let lab3 = [5, 10, 10, 15, 1];
let lab4_5 = [10, 5, 5, 5, 5, 10, 10, 10, 10, 5];
let lab6 = [0, 0, 0, 0, 0, 0];
let quiz1 = [36];
let sum1 = lab1[0] + lab1[1] + lab1[2] + lab1[3] + lab1[4] + lab1[5] + lab1[6];
let sum2 = lab2[0] + lab2[1] + lab2[2] + lab2[3] + lab2[4] + lab2[5] + lab2[6];
let sum3 = (lab3[0] + lab3[1] + lab3[2] + lab3[3]) * 0.5 * lab3[4];
let sum4_5 = lab4_5[0] + lab4_5[1] + lab4_5[2] + lab4_5[3] + lab4_5[4] + lab4_5[5] + lab4_5[6] + lab4_5[7] + lab4_5[8] + lab4_5[9];
let sum6 = lab6[0] + lab6[1] + lab6[2] + lab6[3] + lab6[4] + lab6[5];
let sums = [sum1, sum2, sum3, sum4_5, sum6];
let total_score = (sums[0] + sums[1] + sums[2] + sums[3] + sums[4]) * 0.6 + quiz1[0] * 0.4;
const results = {
lab1: […], 
lab2: […], 
lab3: […], 
lab4_5: […], 
lab6: […], 
quiz1: … , 
sums: […], 
total_score: …, 
}
console.log(results)