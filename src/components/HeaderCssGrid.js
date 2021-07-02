import React from 'react'
import './index.css'

function HeaderCssGrid() {
    return (
        <div>
            <div className="container">
                <div className="logo"><img src="media/icon-1.png"/></div>
            </div><br></br>
            <div className="container1">
                <div></div>
                <div id="each-box" style={{backgroundColor:"#808080"}}>
                    <div className="insight-box-grid">
                        <div className="each-box-text box-between">
                            <h3>Upload Prescription</h3>
                        </div>
                        <div className="each-box-icon box-between box-right-image">
                            <img src="media/icon-2.png" />
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor:"#00FFFF80"}}>middle</div>
                <div style={{backgroundColor:"#808080"}}>right</div>
                <div></div>
            </div><br></br>
            <div className="container2">
                <div></div>
                <div style={{backgroundColor:"#808080"}}>left</div>
                <div style={{backgroundColor:"#00FFFF80"}}>middle</div>
                <div></div>
            </div>
        </div>
    )
}

export default HeaderCssGrid
