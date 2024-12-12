import sum from "../Basic_Js/sum";

//Test function takes three parameters 1-message, 2-call back func (write inside tesing output), 3-setTimeout for setting time for how much time after output will show. Add after the func },there)
test("testing for sum function-1",()=>{
expect(sum(10,10)).toBe(20)  //toBe means muje itna output chahiye batana hai
});

// Add more test functions this type also declare the variables there
test("testing for sum function-2",()=>{
    let a =10;
    let b =20;
    let output= 30;
    expect(sum(a,b)).toBe(output)  //toBe means muje itna output chahiye batana hai
    });