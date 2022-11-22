import React from 'react'
import vg from "../assests/2.jpeg"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai" 

function home() {
  return (
    <>
    <div className='home' id="#home">
    <main>
        <h1>TechStar.</h1>
        <p>Solution for all your problems</p>
    </main>
    </div>
    <div className="home2" >
        <img src={vg} alt="" />
        <div>
            <p>
                We Are Your One and Only solution to the tech problems
                you face everyday.
                We are Leading tech compny whom aim is to
                increase thw problem solving
                capability in children.
            </p>
        </div>
    </div>
    <div className="home3" id="about">
        <div>
        <h1>Who We Are ?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eligendi cum totam vitae ut dolor rem modi neque! Culpa voluptate nostrum cumque impedit harum, nam corrupti ducimus error suscipit! Soluta.
        Inventore est ullam ab quisquam quibusdam velit reiciendis aperiam quos earum quasi, saepe officia facilis, illum commodi iusto odio voluptates? Ullam porro cumque quas temporibus sint. Suscipit natus nostrum incidunt.
        Dicta velit tempora et, repudiandae excepturi dignissimos quod porro nulla nostrum reiciendis beatae praesentium quisquam consequatur illum voluptas, dolore non eos maxime soluta. Amet repudiandae, at consequuntur dignissimos aliquam ea.
        Illo quos temporibus quia sapiente perferendis numquam, placeat eligendi, cumque modi praesentium rerum saepe beatae officiis velit, deserunt ipsum quae! Optio vero dicta dolor hic reprehenderit debitis impedit voluptate quos.
        Esse reiciendis accusamus non laborum beatae pariatur iure sed repellat, ipsam, expedita tempore ex! Facilis iusto, quos fugit natus nihil voluptas, illo unde quam eligendi explicabo excepturi error ex vero.
        Maxime amet eveniet quisquam! In tempora, tempore quam nisi atque exercitationem? Harum repudiandae animi voluptate porro minus error nemo laboriosam, et culpa?</p>
        </div>
        
    </div>

    <div className="home4" id="brands">
        <div>
        <h1>Brands</h1>
        <article>
            <div style={{
                animationDeley:"0.1s"
            }}>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>
            <div style={{
                animationDelay:"0.2s"
            }}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>
            <div style={{
                animationDeley:"0.5s"
            }}>
                <AiFillYoutube/>
                <p>YouTube</p>
            </div>
            <div style={{
                animationDeley:"0.9s"
            }}>
                <AiFillInstagram/>
                <p>Instagram </p>
            </div>
        </article>
        </div>
    </div>
    </>
  )
}

export default home