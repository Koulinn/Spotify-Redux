import React from 'react'
import { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import CardComp from './SharedComp/CardComp'

function Sections(props) {
    const [musics, setMusics] = useState(false)


    useEffect(()=> {
        getDataFromAPI(props.sectionTitle)
    },[])


const getDataFromAPI = async (query, endpoint = 'search?q=') => {
    try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/${endpoint}` + query)
        let dataRequested = await response.json()
        setMusics(dataRequested.data.slice(0, 7))
    } catch (e) {
        return e
    }
}


    return (
        <section className="row d-flex flex-column mt-3 py-0 px-4 m-0" id={props.sectionTitle}>
            <div className="col-12 p-0 d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column">
                    <h2 className="m-0">
                        {props.sectionTitle}
                    </h2>
                    <span className="section-text-aux mt-1 mb-2">Latest music</span>
                </div>

                <span className="seeMore">SEE ALL</span>
            </div>
            <Row className="row d-flex px-0 cardDeck">
                {musics && musics.map((music, i)=> 
                        i < 2 ? <CardComp key={music.id} setCurrentMusic={props.setCurrentMusic} music={music} responsiveness="d-flex card col flex-nowrap card-square" ></CardComp>
                        : i === 3 ? <CardComp key={music.id} setCurrentMusic={props.setCurrentMusic} music={music} responsiveness="card col flex-nowrap card-square d-none d-md-flex"></CardComp>
                        : i === 4 || i === 5 ? <CardComp setCurrentMusic={props.setCurrentMusic} key={music.id} music={music} responsiveness="card col flex-nowrap card-square d-none d-lg-flex"></CardComp>
                        : <CardComp key={music.id} setCurrentMusic={props.setCurrentMusic} music={music} responsiveness="card col flex-nowrap card-square d-none d-xl-flex"></CardComp>
                    )
                }
            </Row>

        </section>
    )
}

export default Sections
