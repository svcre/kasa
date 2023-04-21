import '../styles/infos.css'



function LeftInfos(logement) {

    return(
    
        <>
                <h2> { logement.title } </h2>
                <p>{ logement.location }</p>

                
                <div className="tags">
                {
                    logement.tags.map((tag, index) => (
                        <div className="tag" key= {index}>{tag}</div>
                    ))
                }
                </div>
        </>
    )
} 

export default LeftInfos