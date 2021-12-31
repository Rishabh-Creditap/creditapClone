import React from 'react'
import './Documents.css'

const Documents = () => {
    return (
        <div>
            <div className="docs">
            <div className="doc">
              <h4>Selfie</h4>
              <div className="inputFile">
                <label className="fileInp">
                  <input type="file" label="" />
                  CLICK TO UPLOAD
                </label>
                <p>
                  * Please upload clear selfie Pic with the full face, facing
                  towards camera
                </p>
              </div>
            </div>
            <div className="doc">
              <h4>PAN Document</h4>
              <div className="inputFile">
                <label className="fileInp">
                  <input type="file" label="" />
                  CLICK TO UPLOAD
                </label>
                <p>
                  * Please upload clear ORIGINAL(not xerox/photocopy) PAN Pic in
                  image/pdf formatshowing all the details fully
                </p>
              </div>
            </div>
            <div className="doc">
              <h4>Aadhaar Document Front</h4>
              <div className="inputFile">
                <label className="fileInp">
                  <input type="file" label="" />
                  CLICK TO UPLOAD
                </label>
                <p>
                  * Please upload Front image/pdf of aadhaar card ORIGINAL(not
                  xerox/photocopy), covering name details clearly
                </p>
              </div>
            </div>
            <div className="doc">
              <h4>Aadhaar Document Back</h4>
              <div className="inputFile">
                <label className="fileInp">
                  <input type="file" label="" />
                  CLICK TO UPLOAD
                </label>
                <p>
                  * Please upload Back image/pdf of aadhaar card ORIGINAL(not
                  xerox/photocopy), covering address details clearly
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Documents
