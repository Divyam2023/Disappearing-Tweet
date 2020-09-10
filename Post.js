import React from 'react';
import './Post.css';
import {useSelector} from 'react-redux';



const Post = () => {



    
    const posts = useSelector(state=> state.posts)
  
    // const current = new Date();
    // console.log(current);

    // const deletehandler = (e,id) =>{
    //     e.preventDefault();
    //     postRemove({
    //         id
    //     })
    // }

    

    

    return (
        <div className='searchResult'>
        
            {posts && posts.map(post => (
                <div className='searchResultInfo'> 
                            
                        <h3>{post.tweet}</h3>
                          <p style={{fontSize:'13px',fontWeight:'bolder'}}>{`will expire on ${post.dates}`}</p>
                        
                   
                    </div>    
               
            ))} 

            
        </div>
    )
}

export default Post
