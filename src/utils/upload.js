// import axios from "axios";


// const upload = async (file) => {
//     const data = new FormData();
//     data.append("file", file)
//     data.append("upload_preset", "fiverr");
//     try{
//         const res = await axios.post("https://api.cloudinary.com/v1_1/dnwwzu0by/image/upload",
//         data
//         );
//         const {url} = res.data;
//         return url
//     } catch(err){
//       console.log(err)
//     }

//   }

//   export default upload

import axios from "axios";

const upload = async (formData, endpoint, method) => {
    try {
        baseURL = "https://betevent-api.onrender.com/api/v1/events/"
        const config = {
            method: method,
            url: baseURL + endpoint,
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }

        const response = await axios(config);

        if (response.status === 200) {
            return response.data.url;
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    } catch (err) {
        console.error("Error sending request:", err);
        throw err;
    }
};

export default upload;