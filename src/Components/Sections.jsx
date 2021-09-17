import React from 'react'
import { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import requests from '../lib'
import CardComp from './SharedComp/CardComp'
import { connect } from 'react-redux'
import { fillMusicsAction } from '../actions/LoadMusicsAction'
// const {getFromDeezerRapid} = requests

const mapStateToProps = (state)=>state

const mapDispatchToProps =dispatch=>({
    fetchData:(query)=>dispatch(fillMusicsAction(query))
    
})

function Sections({...props}) {
console.log('all props 1',props)
    useEffect(()=> {
        props.fetchData(props.sectionTitle)
    },[])
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
                {/* 
                // currently you are createing cards based on o the same list "songs"
                but each section must retrive the music from it's own list

                currently prop.musics.songs

                but what you need is to make props.musics[sectionListName]
                then each sectionListName will have it`s own list with musics

                */}
                {props.musics[props.sectionTitle] && props.musics[props.sectionTitle].map((music, i)=> 
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

export default connect(mapStateToProps,mapDispatchToProps)(Sections)
