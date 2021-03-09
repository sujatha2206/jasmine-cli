describe('main.js',function(){
    describe("Calculate()",function(){
        it("validates EXpression when numberA is invalid",function(){
            spyOn(window,"updateResult").and.stub();
            Calculate('a+5'); //if u comment this test will fail
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith("operation not recognized");
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        })
        it("validates EXpression when numberB is invalid",function(){
            spyOn(window,"updateResult") //and.stub() is default it can be ommited
            Calculate('5+a');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith("operation not recognized");
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        })
        it("validates EXpression when operation is invalid",function(){
            spyOn(window,"updateResult").and.stub();
            Calculate('8m5');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith("operation not recognized");
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        })
        it("calls add",function(){
           let spy= spyOn(Calculator.prototype,'add');
            Calculate('5+6')
            expect(spy).toHaveBeenCalledTimes(2);
            expect(spy).toHaveBeenCalledWith(5);
            expect(spy).toHaveBeenCalledWith(6);
        });
        it("calls sub",function(){
            let spy= spyOn(Calculator.prototype,'sub');
            Calculate('8-5')
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).not.toHaveBeenCalledWith(8);
            expect(spy).toHaveBeenCalledWith(5);
        });
        it("calls mul",function(){
            let spy= spyOn(Calculator.prototype,'multiply');
            Calculate('8*5')
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).not.toHaveBeenCalledWith(8);
            expect(spy).toHaveBeenCalledWith(5);
        });
        it("calls divide",function(){
            let spy= spyOn(Calculator.prototype,'divide');
            Calculate('8/5')
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).not.toHaveBeenCalledWith(8);
            expect(spy).toHaveBeenCalledWith(5);
        });
        it("validate expression");
        it("calls update and exaple using and.callThrough",function(){
            spyOn(window,'updateResult');
            spyOn(Calculator.prototype,'multiply').and.callThrough();
            Calculate('5*5')
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(25);
        })
        it("calls update and exaple using and.callFake",function(){
            spyOn(window,'updateResult');
            spyOn(Calculator.prototype,'multiply').and.callFake(function(number){
                return 'It works';
            });
            Calculate('5*5')
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('It works');
        })
        it("calls update and exaple using and.returnValue",function(){
            spyOn(window,'updateResult');
            spyOn(Calculator.prototype,'multiply').and.returnValue('whatever [multiply] returns')
            Calculate('5*5')
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('whatever [multiply] returns');
        })
        it("calls update and exaple using and.returnValues",function(){
            spyOn(window,'updateResult');
            spyOn(Calculator.prototype,'add').and.returnValues(null,'whatever [add] returns')
            Calculate('5+5')
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('whatever [add] returns');
        })
        it("does not handle error",function(){
            spyOn(Calculator.prototype,'multiply').and.throwError('some error');

            expect(function(){Calculate('5*5')}).toThrowError('some error');
        })
    })
    describe("updateResult()",function(){
   
        beforeAll(function(){
            //execute once before all executed
           const element=document.createElement('div');
            element.setAttribute('id','result');
            document.body.appendChild(element);
            this.element =element;
        })
        afterAll(function(){
            //clean up step
             //execute once after all executed
            document.body.removeChild(this.element);
        })
        it("adds result to DOM",function(){
            updateResult('5');
            expect(this.element.innerText).toBe('5');
        })
    })
    describe('showVersion()',function(){
        it("CALLS CALCULATOR.SHOWvERSION",function(){
            spyOn(document,'getElementById').and.returnValue({
                innerText:null
            })
           
            let spy=spyOnProperty(Calculator.prototype,'version','get');
          // spyOnProperty(Calculator.prototype,'version','get');
            showVersion();
          expect(spy).toHaveBeenCalled();
          // expect(Object.getOwnPropertyDescriptor(Calculator.prototype,'version').get).toHaveBeenCalled()
        })
       

        })
})