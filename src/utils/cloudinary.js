import { v2 as cloudinary } from 'cloudinary';


    // Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const UploadOnCloudinary = async (localFilepath) => {
    try {
        if(!localFilepath) return null
        const result = await cloudinary.v2.uploader.upload(localFilepath, {
            resource_type: "auto"
        })
        console.log("file has been uploaded on cloudinary", result.url);
        FileSystem.unlinkSync(localFilepath)
        return result;
        
    } catch (error) {
        FileSystem.unlinkSync(localFilepath)
        return null;
    }
}

export { UploadOnCloudinary }