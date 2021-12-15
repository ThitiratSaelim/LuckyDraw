import './UploadPrize.css';

function UploadPrize(props) {
    const { panelImg, onBgClick } = props;
    return (
        <div className="upload-post">
            {/* ไม่มี tag ในต่อ tag เดี่ยวได้ */}
            <div className="upload-post-bg" onClick={onBgClick}/>
                <div className="upload-post-content">
                    <h1>Upload File</h1>
                    <p className="text-content">.xlss, .csv Should have column No., Name, Quantity.</p>
                    <div className="upload-post-file">
                        {/* <img className="img-content" src={panelImg.thumbnailUrl} /> */}
                        
                        <img className="img-content" src="/image/upload.png" />
                        <p className="text-content-file">Click or drag file to this area to upload</p>
                        <p className="text-content2">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                    </div>
                </div>
        </div>
    );
}

export default UploadPrize;