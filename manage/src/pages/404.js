
import React from "react"
const picurl = require("../static/img/404.jpg")
function NotFound(){
    return <div style={{width:'100%',height:'100%'}}>
        <img src={picurl} style={{width:'100%',height:'100%'}}/>
    </div>
}
export default NotFound