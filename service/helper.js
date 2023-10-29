import { v2 as cloudinary } from 'cloudinary';


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,

});


export async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file,{
    resource_type: "auto",
    
  });
  return res;
}


// // Upload the file to Cloudinary with the current timestamp
// cloudinary.uploader.upload(fileToUpload, { timestamp: currentTimestamp }, (error, result) => {
//     if (error) {
//       console.error('Error uploading file:', error);
//     } else {
//       console.log('File uploaded successfully. Public URL:', result.secure_url);
//     }
//   });