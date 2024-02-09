const Rowpage=()=>{
    return(
        <>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-12 search-row">
                   
                        <input type="search" placeholder="search" className="searchbar "/>
                        <div className="p-3 search-button">Go</div>
                    
                    </div>
                </div>
                <div className ="row mt-5">
                    <div className="text-color">
                        <p>TOP NEWS FROM INDIA</p>
                    </div>
                
                    <div className="row mb-5">
                        <div className="col-sm-12 col-md-4 border border-dark box-size"></div>
                        <div className="col-sm-12 col-md-4 border border-dark box-size"></div>
                        <div className="col-sm-12 col-md-4 border border-dark box-size"></div>
                     </div>
                     <div className="row  mb-5">
                        <div className="col-sm-12 col-md-4 border border-dark box-size"></div>
                        <div className="col-sm-12 col-md-4 border border-dark box-size"></div>
                        <div className="col-sm-12 col-md-4 border border-dark box-size"></div>
                     </div>
                     <div className="row  mb-5">
                        <div className="col-sm-12 col-md-4 border border-dark box-size"></div>
                        <div className="col-sm-12 col-md-4 border border-dark box-size"></div>
                        <div className="col-sm-12 col-md-4 border border-dark box-size"></div>
                     </div>
                    
                </div>
            </div>
            


                
            
        </>
        
    )
}
export default Rowpage;
