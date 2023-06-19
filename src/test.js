function Test() {

    // //self invoked  regular function
    // (function () {
    //     console.log("hello Vansika")
    // })()

        //self invoked  Arrow function
        // (() => {
        //     console.log("Hi Arrow Function")
        // })()

        // closure Concept Example
        const outerFun = (a)=>{
            const innerFunc = (b)=>{
                return a*b
            }
            return innerFunc;
        }
        const b = outerFun(5)(2);
        //console.log(b,'2222222222222222')

        // Passby Reference
        const passByRef = (emp)=>{
            emp.fname = 'Vanshika'
            emp.lname = emp.lname
            console.log(emp,'passByRef1')
            
        }
        const person = {
            fname: "Van",
            lname: "Malik"
        }
        passByRef(person)
        console.log(person,'passByRef2')

        // Passby Value
        const passByValue = (t1,t2)=>{
            t1 = 5
            console.log(t1, t2 ,'passByValue1')
            
        }
        const t1 = 2
        const t2 = 3
        passByValue(t1, t2)
        console.log(t1, t2 ,'passByValue2')

        
}
export default Test;
