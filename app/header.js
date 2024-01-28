const Header=()=>{
    return(
        <>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center border-bottom-dark mt-5">
                    <div className="col-5 p-2">
                        <div className="row">
                            <div className="col-6 p-2 head-text">
                                <img src="NewsAPI.png"/>
                            </div>
                            <div className="col-2 p-2 symbol">
                                <img src="icon.png"/>
                                
                            </div>
                            <div className="col-4 p-2 head-text-2"> 
                                <img src="Org.png"/>
                            </div>                   
                        </div>
                        
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-2">
                    <div className="col-3 p-3">
                        <form className="d-flex" role="search">
                            <input className="bg-white text-black" type="search" />
                            <button className="btn bg-danger" type="submit">Go</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )


}
export default Header;
