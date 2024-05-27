
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// // import { pdfjs } from "react-pdf";
// // import PdfComp from "./PdfComp";

// // pdfjs.GlobalWorkerOptions.workerSrc = new URL(
// //   "pdfjs-dist/build/pdf.worker.min.js",
// //   import.meta.url
// // ).toString();


// function App() {
//   const [title, setTitle] = useState('');
//   const [file, setFile] = useState('');
//   const [message, setMessage] = useState('');
//   const [allImage, setAllImage] = useState(null);

// useEffect(()=>{
//   getPdf()
// },[]);

// const getPdf=async()=>{
//   const result=await axios.get("http://localhost:5000/get-files");
//   console.log(result.data.data);
//   setAllImage(result.data.data);
// }

//   const submitImage = async (e) => {
//     e.preventDefault();
//     if (!title || !file) {
//       setMessage('Title and file are required');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('file', file);
//     console.log(title, file);

//     try {
//       const result = await axios.post('http://localhost:5000/upload-files', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       console.log(result);
//       setMessage('File uploaded successfully');
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       setMessage('Failed to upload file');
//     }
//     getPdf()
//   };

//   const showPdf=(pdf)=>{
//     window.open(`http://localhost:5000/files/${pdf}`,"_blank","noreferrer");
//   }

//   return (
//     <div className="App">
//       <form className="formStyle" onSubmit={submitImage}>
//         <h4>Upload PDF in React</h4><br/>
//         <input
//           type='text'
//           className='form-control'
//           placeholder='Title'
//           required
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <br/>
//         <input
//           type='file'
//           className='form-control'
//           accept='application/pdf'
//           required
//           onChange={(e) => setFile(e.target.files[0])}
//         />
//         <br/>
//         <button className='btn btn-primary' type='submit'>Submit</button>
//       </form>
//       {message && <p>{message}</p>}

// {/* here */}
//       <div className="uploaded">
//         <h4>Uploaded PDF:</h4>
//         <div className="output-div">
//           {allImage == null
//             ? ""
//             : allImage.map((data) => {
//                 return (
//                   <div className="inner-div">
//                     <h6>Title:{data.title}</h6>
//                     <button
//                       className="btn btn-primary"
//                       onClick={() => showPdf(data.pdf)}
//                     >
//                       Show Pdf
//                     </button>
//                   </div>
//                );
//               })} 
//         </div>
//       </div>
//       {/* <PdfComp pdfFile={pdfFile}/> */}
//     </div>
//   );
// }

// export default App;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './appoinment.css'; // Import the CSS file
// // import { pdfjs } from "react-pdf";
// // import PdfComp from "./PdfComp";

// // pdfjs.GlobalWorkerOptions.workerSrc = new URL(
// //   "pdfjs-dist/build/pdf.worker.min.js",
// //   import.meta.url
// // ).toString();

// function App() {
//   const [title, setTitle] = useState('');
//   const [file, setFile] = useState('');
//   const [message, setMessage] = useState('');
//   const [allImage, setAllImage] = useState(null);

//   useEffect(() => {
//     getPdf();
//   }, []);

//   const getPdf = async () => {
//     try {
//       const result = await axios.get("http://localhost:5000/get-files");
//       console.log(result.data.data);
//       setAllImage(result.data.data);
//     } catch (error) {
//       console.error('Error fetching files:', error);
//     }
//   }

//   const submitImage = async (e) => {
//     e.preventDefault();
//     if (!title || !file) {
//       setMessage('Title and file are required');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('file', file);
//     console.log(title, file);

//     try {
//       const result = await axios.post('http://localhost:5000/upload-files', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       console.log(result);
//       setMessage('File uploaded successfully');
//       getPdf();
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       setMessage('Failed to upload file');
//     }
//   };

//   const showPdf = (pdf) => {
//     window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
//   }

//   return (
//     <div className="App">
//       <form className="formStyle" onSubmit={submitImage}>
//         <h4>Upload PDF in React</h4><br />
//         <input
//           type='text'
//           className='form-control'
//           placeholder='Title'
//           required
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <br />
//         <input
//           type='file'
//           className='form-control'
//           accept='application/pdf'
//           required
//           onChange={(e) => setFile(e.target.files[0])}
//         />
//         <br />
//         <button className='btn btn-primary' type='submit'>Submit</button>
//       </form>
//       {message && <p>{message}</p>}

//       <div className="uploaded">
//         <h4>Uploaded PDF:</h4>
//         <div className="output-div">
//           {allImage == null
//             ? ""
//             : allImage.map((data, index) => {
//               return (
//                 <div className="inner-div" key={index}>
//                   <h6>Title: {data.title}</h6>
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => showPdf(data.pdf)}
//                   >
//                     Show Pdf
//                   </button>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//       {/* <PdfComp pdfFile={pdfFile}/> */}
//     </div>
//   );
// }

//export default App;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './appoinment.css'; // Import the CSS file

// function App() {
//   const [title, setTitle] = useState('');
//   const [file, setFile] = useState('');
//   const [message, setMessage] = useState('');
//   const [allImage, setAllImage] = useState(null);

//   useEffect(() => {
//     getPdf();
//   }, []);

//   const getPdf = async () => {
//     try {
//       const result = await axios.get("http://localhost:5000/get-files");
//       console.log(result.data.data);
//       setAllImage(result.data.data);
//     } catch (error) {
//       console.error('Error fetching files:', error);
//     }
//   }

//   const submitImage = async (e) => {
//     e.preventDefault();
//     if (!title || !file) {
//       setMessage('Title and file are required');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('file', file);
//     console.log(title, file);

//     try {
//       const result = await axios.post('http://localhost:5000/upload-files', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       console.log(result);
//       setMessage('File uploaded successfully');
//       getPdf();
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       setMessage('Failed to upload file');
//     }
//   };

//   const showPdf = (pdf) => {
//     window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
//   }

//   return (
//     <div className="App">
//       <form className="formStyle" onSubmit={submitImage}>
//         <h4>Upload PDF in React</h4>
//         <input
//           type='text'
//           className='form-control'
//           placeholder='Title'
//           required
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type='file'
//           className='form-control'
//           accept='application/pdf'
//           required
//           onChange={(e) => setFile(e.target.files[0])}
//         />
//         <button className='btn btn-primary' type='submit'>Submit</button>
//       </form>
//       {message && <p>{message}</p>}

//       <div className="uploaded">
//         <h4>Uploaded PDF:</h4>
//         <div className="output-div">
//           {allImage == null
//             ? ""
//             : allImage.map((data, index) => {
//               return (
//                 <div className="inner-div" key={index}>
//                   <h6>Title: {data.title}</h6>
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => showPdf(data.pdf)}
//                   >
//                     Show Pdf
//                   </button>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;





import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './appoinment.css'; // Import the CSS file

function App() {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');
  const [message, setMessage] = useState('');
  const [recentPdf, setRecentPdf] = useState(null);

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    try {
      const result = await axios.get("https://backfinal-1-llx1.onrender.com/get-files");
      const latestPdf = result.data.data[result.data.data.length - 1];
      setRecentPdf(latestPdf);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  }

  const submitPdf = async (e) => {
    e.preventDefault();
    if (!title || !file) {
      setMessage('Title and file are required');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);

    try {
      const result = await axios.post('https://backfinal-1-llx1.onrender.com/upload-files', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage('PDF uploaded successfully');
      getPdf();
    } catch (error) {
      console.error('Error uploading PDF:', error);
      setMessage('Failed to upload PDF');
    }
  };

  const showPdf = () => {
    if (recentPdf) {
      window.open(`https://backfinal-1-llx1.onrender.com/files/${recentPdf.pdf}`, "_blank", "noreferrer");
    }
  }

  return (
    <div className="App">
      <div className="center lato-regular">
        <form className="formStyle" onSubmit={submitPdf}>
            {/* Inside your JSX code */}
<div className="upload-heading">
  <h4>Upload Documents</h4>
</div>

          {/* <h4>Upload PDF in React</h4> */}
          <input
            type='text'
            className='form-control'
            placeholder='Title'
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type='file'
            className='form-control'
            accept='application/pdf'
            required
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
      </div>
      {message && <p>{message}</p>}

      <div className="uploaded">
        {/* <h4>Recently Uploaded Document:</h4> */}
        <div className='upload-heading'>
            <h4>Recently Uploaded Document:</h4>
        </div>
        <div className="output-div">
          {recentPdf &&
            <div className="inner-div">
              <h6>Title: {recentPdf.title}</h6>
              <button className="btn btn-primary" onClick={showPdf}>Show Pdf</button>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
