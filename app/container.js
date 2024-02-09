const Container_page=()=>{
    return(
        <>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-12 col-sm-auto p-3 d-flex text-center">
                   
                        <input className="p-3 bg-white text-black" type="search" />
                        <button className="btn bg-danger" type="submit">Go</button>
                    
                    </div>
                </div>
                <div className ="row mt-5 border border-dark">
                    <div className="text-color">
                        <p>TOP NEWS FROM INDIA</p>
                    </div>
                
                    <div className="row border border-dark box-size mb-5">
                        <div className="col-sm-12 col-md-4 border border-dark "></div>
                        <div className="col-sm-12 col-md-4 border border-dark "></div>
                        <div className="col-sm-12 col-md-4 border border-dark "></div>
                     </div>
                     <div className="row border border-dark box-size mb-5">
                        <div className="col-sm-12 col-md-4 border border-dark "></div>
                        <div className="col-sm-12 col-md-4 border border-dark "></div>
                        <div className="col-sm-12 col-md-4 border border-dark "></div>
                     </div>
                     <div className="row border border-dark box-size">
                        <div className="col-sm-12 col-md-4 border border-dark "></div>
                        <div className="col-sm-12 col-md-4 border border-dark "></div>
                        <div className="col-sm-12 col-md-4 border border-dark "></div>
                     </div>
                    
                </div>
            </div>
            


                
            
        </>
        
    )
}
export default Container_page;
