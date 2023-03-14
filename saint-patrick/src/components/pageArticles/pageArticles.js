import React, {useEffect, useState} from 'react';
import Article from "../article";
import '../../index.css';

const PageArticles = ({index = -1}) => {
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
    
    let isAdmin= false

    const getArticlesParCategorie = (index) => {
        if(index === -1){
            isAdmin= true;
            return data
        } else {
            return data.filter(elem => elem.category === index);
        }
      }
      console.log(getArticlesParCategorie(index))


    return (
        <div className={"containerArticles"}>
        {getArticlesParCategorie(index).map(elem => (
          <Article infos={elem} isAdmin= {isAdmin}  />
        ))}
      </div>
    );

};

export default PageArticles;