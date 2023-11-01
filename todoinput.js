function TodoInput() {
  return (
    <>
        <div>Todo List   </div>
        <br/> 
        <div className="input">
            <label className="lable">Name :- 
            <input type="text" className="box" placeholder="Enter your Name"/>
            </label>
        </div>
        <br/>
        <div className="input">
            <label className="lable">Pryority :-</label>
            <input type="text" className="box" placeholder="Enter your Pryority"/> 
        </div>
        <br/>
        <div className="input" > 
            <label className="lable">Time :-</label>           
            <input type="text" className="box" placeholder="Enter your Time"/>
        </div>
        <br/>
            <button  className="button" type="butun">+</button>  
        <div>
            <label>Reset:-</label>
            <input type="reset" className="reset"/>
        </div>
    </>
  );
}
export default TodoInput;
                    
