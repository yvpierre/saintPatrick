import React, {useEffect, useState} from 'react';
import Article from "../article";

const PageArticles = () => {
    const [data,setData]=useState([]);
    const getData=()=>{
        fetch('sample.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                return response.json();
            })
            .then(function(myJson) {
                setData(myJson)
            });
    }

    useEffect( () => {
            getData()
    }, [])

    return (
        <div>
            {data.map(elem => {
                return (
                    <Article infos={elem}/>
                )
            })}
        </div>
    );

};

export default PageArticles;