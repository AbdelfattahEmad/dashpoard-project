import React from 'react'
import classes from "./Files.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import pdf1 from "../../../assets/images/pdf1.png"
import pdf2 from "../../../assets/images/pdf2.avif"
import pdf3 from "../../../assets/images/pdf3.jpg"
import pdf4 from "../../../assets/images/pdf4.png"
import pdf from "../../../assets/images/pdf.avif"




const Files = () => {
  return (
    <div className={classes.Files_Container}>

        <h2> Files </h2>

        <div className={classes.Head_Files_Card}>

        <div className={classes.Files_Card}>
            <div className={classes.icon}>

            <FontAwesomeIcon icon={faDownload} size="lg" style={{color: "#8d8e91",}} />
            </div>

            <div className={classes.image}>
                <img src={pdf1} alt='pdf' />
                <h6 className='p-3'>My_File_Pdf</h6>

            </div>

            <hr />
            <div className={classes.Details}>
                <p className={classes.EEE}> 20 / 11 / 2002</p>
                <p className={classes.EEE}>256 MB</p>
            </div>

        </div>

        <div className={classes.Files_Card}>
            <div className={classes.icon}>

            <FontAwesomeIcon icon={faDownload} size="lg" style={{color: "#8d8e91",}} />
            </div>

            <div className={classes.image}>
                <img src={pdf2} alt='pdf' />
                <h6 className='p-3'>My_File_Pdf</h6>

            </div>

            <hr />
            <div className={classes.Details}>
                <p className={classes.EEE}> 20 / 11 / 2002</p>
                <p className={classes.EEE}>256 MB</p>
            </div>

        </div>

        <div className={classes.Files_Card}>
            <div className={classes.icon}>

            <FontAwesomeIcon icon={faDownload} size="lg" style={{color: "#8d8e91",}} />
            </div>

            <div className={classes.image}>
                <img src={pdf3} alt='pdf' />
                <h6 className='p-3'>My_File_Pdf</h6>

            </div>

            <hr />
            <div className={classes.Details}>
                <p className={classes.EEE}> 20 / 11 / 2002</p>
                <p className={classes.EEE}>256 MB</p>
            </div>

        </div>

        <div className={classes.Files_Card}>
            <div className={classes.icon}>

            <FontAwesomeIcon icon={faDownload} size="lg" style={{color: "#8d8e91",}} />
            </div>

            <div className={classes.image}>
                <img src={pdf4} alt='pdf' />
                <h6 className='p-3'>My_File_Pdf</h6>

            </div>

            <hr />
            <div className={classes.Details}>
                <p className={classes.EEE}> 20 / 11 / 2002</p>
                <p className={classes.EEE}>256 MB</p>
            </div>

        </div>

        <div className={classes.Files_Card}>
            <div className={classes.icon}>

            <FontAwesomeIcon icon={faDownload} size="lg" style={{color: "#8d8e91",}} />
            </div>

            <div className={classes.image}>
                <img src={pdf3} alt='pdf' />
                <h6 className='p-3'>My_File_Pdf</h6>

            </div>

            <hr />
            <div className={classes.Details}>
                <p className={classes.EEE}> 20 / 11 / 2002</p>
                <p className={classes.EEE}>256 MB</p>
            </div>

        </div>






        </div>


        <div className={classes.Head_Files_Card}>

            <div className={classes.Files_Card}>

                <div className={classes.icon}>

                <FontAwesomeIcon icon={faDownload} size="lg" style={{color: "#8d8e91",}} />
                </div>

                <div className={classes.image}>
                    <img src={pdf2} alt='pdf' />
                    <h6 className='p-3'>My_File_Pdf</h6>

                </div>

                <hr />

                <div className={classes.Details}>
                    <p className={classes.EEE}> 20 / 11 / 2002</p>
                    <p className={classes.EEE}>256 MB</p>
                </div>

            </div>

            <div className={classes.Files_Card}>
                <div className={classes.icon}>

                <FontAwesomeIcon icon={faDownload} size="lg" style={{color: "#8d8e91",}} />
                </div>

                <div className={classes.image}>
                    <img src={pdf4} alt='pdf' />
                    <h6 className='p-3'>My_File_Pdf</h6>

                </div>

                <hr />
                <div className={classes.Details}>
                    <p className={classes.EEE}> 20 / 11 / 2002</p>
                    <p className={classes.EEE}>256 MB</p>
                </div>

            </div>

            <div className={classes.Files_Card}>
                <div className={classes.icon}>

                <FontAwesomeIcon icon={faDownload} size="lg" style={{color: "#8d8e91",}} />
                </div>

                <div className={classes.image}>
                    <img src={pdf1} alt='pdf' />
                    <h6 className='p-3'>My_File_Pdf</h6>

                </div>

                <hr />
                <div className={classes.Details}>
                    <p className={classes.EEE}> 20 / 11 / 2002</p>
                    <p className={classes.EEE}>256 MB</p>
                </div>

            </div>

            <div className={classes.Files_Card}>
                <div className={classes.icon}>

                <FontAwesomeIcon icon={faDownload} size="lg" style={{color: "#8d8e91",}} />
                </div>

                <div className={classes.image}>
                    <img src={pdf1} alt='pdf' />
                    <h6 className='p-3'>My_File_Pdf</h6>

                </div>

                <hr />
                <div className={classes.Details}>
                    <p className={classes.EEE}> 20 / 11 / 2002</p>
                    <p className={classes.EEE}>256 MB</p>
                </div>

            </div>

            <div className={classes.Files_Card}>
                <div className={classes.icon}>

                <FontAwesomeIcon icon={faDownload} size="lg" style={{color: "#8d8e91",}} />
                </div>

                <div className={classes.image}>
                    <img src={pdf} alt='pdf' />
                    <h6 className='p-3'>My_File_Pdf</h6>

                </div>

                <hr />
                <div className={classes.Details}>
                    <p className={classes.EEE}> 20 / 11 / 2002</p>
                    <p className={classes.EEE}>256 MB</p>
                </div>

            </div>

        </div>

        <div className={classes.Head_Files_Card}>

<div className={classes.Files_Card}>

    <div className={classes.icon}>

    <FontAwesomeIcon icon={faDownload} size="lg" style={{color: "#8d8e91",}} />
    </div>

    <div className={classes.image}>
        <img src={pdf1} alt='pdf' />
        <h6 className='p-3'>My_File_Pdf</h6>

    </div>

    <hr />

    <div className={classes.Details}>
        <p className={classes.EEE}> 20 / 11 / 2002</p>
        <p className={classes.EEE}>256 MB</p>
    </div>

</div>

<div className={classes.Files_Card}>
    <div className={classes.icon}>

    <FontAwesomeIcon icon={faDownload} size="lg" style={{color: "#8d8e91",}} />
    </div>

    <div className={classes.image}>
        <img src={pdf2} alt='pdf' />
        <h6 className='p-3'>My_File_Pdf</h6>

    </div>

    <hr />
    <div className={classes.Details}>
        <p className={classes.EEE}> 20 / 11 / 2002</p>
        <p className={classes.EEE}>256 MB</p>
    </div>

</div>

<div className={classes.Files_Card}>
    <div className={classes.icon}>

    <FontAwesomeIcon icon={faDownload} size="lg" style={{color: "#8d8e91",}} />
    </div>

    <div className={classes.image}>
        <img src={pdf3} alt='pdf' />
        <h6 className='p-3'>My_File_Pdf</h6>

    </div>

    <hr />
    <div className={classes.Details}>
        <p className={classes.EEE}> 20 / 11 / 2002</p>
        <p className={classes.EEE}>256 MB</p>
    </div>

</div>

<div className={classes.Files_Card}>
    <div className={classes.icon}>

    <FontAwesomeIcon icon={faDownload} size="lg" style={{color: "#8d8e91",}} />
    </div>

    <div className={classes.image}>
        <img src={pdf4} alt='pdf' />
        <h6 className='p-3'>My_File_Pdf</h6>

    </div>

    <hr />
    <div className={classes.Details}>
        <p className={classes.EEE}> 20 / 11 / 2002</p>
        <p className={classes.EEE}>256 MB</p>
    </div>

</div>

<div className={classes.Files_Card}>
    <div className={classes.icon}>

    <FontAwesomeIcon icon={faDownload} size="lg" style={{color: "#8d8e91",}} />
    </div>

    <div className={classes.image}>
        <img src={pdf3} alt='pdf' />
        <h6 className='p-3'>My_File_Pdf</h6>

    </div>

    <hr />
    <div className={classes.Details}>
        <p className={classes.EEE}> 20 / 11 / 2002</p>
        <p className={classes.EEE}>256 MB</p>
    </div>

</div>

        </div>



        



    </div>
  )
}

export default Files