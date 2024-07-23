import React from 'react'

const Contect = () => {
  return (
    <div className='d-flex p-2 justify-content-around mb-5 '>
      <div className="card border border-white rounded-4 box-shadow-lg">
  <h5 className="card-header">Code Private Limited</h5>
  <div className="card-body">
    <h5 className="card-title">Contect US</h5>
    <p className="card-text">Mobile No - +919846598487</p>
    <p className="card-text">Email - codeprivt06@gmail.com</p>
    <p className="card-text">Instagram - Codeprivate</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>

</div>

<div className='border border-white p-3 bg-white card rounded-4 '>


<div className="mb-3 ">
    <h3>Fill this form for Quary</h3>
  <label for="formFile" className="form-label">Enter your Name </label>
  <input className="form-control" type="text" id="formFile"/>
</div>
<div className="mb-3">
  <label for="formFileMultiple" className="form-label">Enter your mobile Number</label>
  <input className="form-control" type="text" id="formFileMultiple" multiple/>
</div>
<div className="mb-3">
  <label for="formFileDisabled" className="form-label">Enter your Quary</label>
  <textarea className="form-control" name="formFileDisabled" id="formFileDisabled"></textarea>
</div>
<div className="mb-3">
  <label for="formFileSm" className="form-label">Enter your Address</label>
 
  <textarea className="form-control " name="formFileSm" id="formFileSm"></textarea>
</div>
<div>
  <label for="formFileLg" className="form-label">Please Attach quary related files</label>
  <input className="form-control " id="formFileLg" type="file"/>
</div>
</div>
    </div>
  )
}

export default Contect
