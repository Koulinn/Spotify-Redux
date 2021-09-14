import React from 'react'
import { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import CardComp from '../SharedComp/CardComp'
import SadSearch from '../SharedComp/SadSearch'
import Spinner from '../SharedComp/Spinner'


function DisplaySearch(props) {
    const [musics, setMusics] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [noResults, setNoResults] = useState(false)


    useEffect(() =>
        getDataFromAPI()
        , [props.searchValue])

    const getDataFromAPI = async () => {
        
        if((props.searchValue.length > 1) && (props.searchValue.charAt(0) !== ' ')){
            setIsLoading(true)
            try {
                let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=` + props.searchValue)
    
                if (response.ok) {
                    setIsLoading(false)
    
                    let dataRequested = await response.json()
                    if(dataRequested.data.length === 0){
                        setNoResults(true)
                        setTimeout(()=>setMusics(dataRequested.data),500)
                    } else {
                        setNoResults(false)
                        setTimeout(()=>setMusics(dataRequested.data),500)
                    }
                }
            } catch (e) {
                return e
            }
        }
    }

    return (
        <section className="row d-flex flex-column mt-3 py-0 px-4 m-0" id='searchResults'>
            <div className="col-12 p-0 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <h3 className="m-0 mr-3" style={{color: 'white', transform: "translateY(-2px)", height:"48px"}}>
                        Search Results
                    </h3>
                    {isLoading && <Spinner></Spinner>}
                   
                </div>

                <span className="seeMore">FILTER</span>
            </div>
            <Row className="row d-flex px-0 justify-content-between cardDeck">
                {noResults && <SadSearch></SadSearch>}
                {musics.length > 0 && musics.map((music, i) => <CardComp key={i} setCurrentMusic={props.setCurrentMusic} music={music} responsiveness="d-flex card flex-nowrap card-square"></CardComp>)}
            </Row>
        </section>
    )
}

export default DisplaySearch
