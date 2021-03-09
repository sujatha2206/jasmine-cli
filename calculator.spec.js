
describe('calculator.js',function(){
    
    describe('Calculator',function(){
        beforeEach(function(){
           const calculator = new Calculator();
          const calculator1 = new Calculator();
          this.calculator=calculator;
          this.calculator1=calculator1;
        })
        afterEach(function(){

        })
        it('for tobe instantiated',function(){
            jasmine.addMatchers(customMatchers);
            expect(this.calculator).toBeCalculator();
            expect(2).not.toBeCalculator();
            expect(this.calculator).not.toBe(this.calculator1);
            expect(this.calculator).toBeTruthy(this.calculator1);
        })
        it('should tobeequal',function(){
            //calculator.total=10; //if we change it will fail
            expect(this.calculator).toEqual(this.calculator1);
        })
        describe('add()',function(){
            it('should add to total',function(){
                this.calculator.add(10);
                expect(this.calculator.total).toBe(10);
            });
            it("returns total",function(){
                this.calculator.total=50;
                expect(this.calculator.add(20)).toBe(70);
                expect(this.calculator.total).toMatch(/^-?\d+/);
              //  expect(typeof calculator.total).toMatch('number');
            //  expect(typeof calculator.total).toBeNumber();
                //asymmetric mathers
                // not equal in each side
                expect(this.calculator.total).toEqual(jasmine.anything())
                expect(function(){}).toEqual(jasmine.anything())
              //  expect(null or undefined it fails).toEqual(jasmine.anything())
                })
                it('for tobeundefined',function(){
                    expect(this.calculator.add).not.toBeUndefined();
                    expect(this.calculator.add).toBeDefined();
                    expect(this.calculator.constructor.name).toContain("Cal");
            
                    
                })
                
        })
        describe('sub()',function(){
            it('should sub to total',function(){
                this.calculator.total=30;
                this.calculator.sub(10);
                expect(this.calculator.total).toBe(20);
                
            })
        })
        describe('multiply()',function(){
            it('should multiply to total',function(){
                this.calculator.total=30;
                this.calculator.multiply(2);
                expect(this.calculator.total).toBe(60);
            })
        })
        describe('divide()',function(){
            it('should divide to total',function(){
                this.calculator.total =30
                this.calculator.divide(3);
                expect(this.calculator.total).toBe(10);
            })
            it('handles divide by zero',function(){
                expect(function(){this.calculator.divide(0)}).toThrow();
                expect(function(){this.calculator.divide(0)}).toThrowError(Error)
               // expect(function(){this.calculator.divide(0)}).toThrowError(Error,'cannot divide by zero')
            })
        })
        // describe('getVersion()',function(){
        //     it('fetches version from exterbal source',function(done){
        //         calculator.version.then((function(version){
        //             expect(version).toBe('0.1');

        //             done();
        //         }))
        //     })
        // })
    })  
    
})