# 🚀 Project: Simple File Upload with Multer + Cloudinary

### 🛠 Tools/Stack

* Node.js + Express (backend server)
* Multer (file parser)
* Cloudinary (cloud storage for image)
* Postman (testing uploads)

---

## 1. Project Setup

```bash
mkdir file-upload-demo
cd file-upload-demo
npm init -y
npm install express multer cloudinary dotenv
```

---

## 2. File Structure

```
file-upload-demo
 ├── server.js
 ├── .env
 ├── .gitignore
 └── uploads/   (temporary folder, auto-created by multer)
```

---

## 3. .gitignore

```gitignore
node_modules/
.env
uploads/
```

---

## 4. .env (Cloudinary credentials)

Login Cloudinary → Dashboard → Account Details me se copy kar ke dal:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 5. server.js (Core Logic)

```js
require("dotenv").config();
const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const app = express();
const port = 5000;

// Multer setup (local temp storage)
const upload = multer({ dest: "uploads/" });

// Cloudinary setup
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Route for file upload
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    // check file
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    // upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // delete temp file
    fs.unlinkSync(req.file.path);

    res.json({
      message: "File uploaded successfully!",
      url: result.secure_url,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
```

---

## 6. Testing in Postman

1. Start server

   ```bash
   node server.js
   ```

2. Open **Postman** → New Request

   * Method: `POST`
   * URL: `http://localhost:5000/upload`
   * Go to **Body → form-data**
   * Add a Key: `image` (type → File)
   * Choose any image from your PC
   * Send

3. Response Example:

```json
{
  "message": "File uploaded successfully!",
  "url": "https://res.cloudinary.com/demo/image/upload/v1695920134/sample.jpg"
}
```

4. Copy the `url` → paste in browser → image dikhega 🎉

---

## 7. Important Points (Mindset)

* **Why Multer?** → Express khud file nahi samajhta, Multer parse karke deta hai.
* **Why Cloudinary?** → Local disk bharta hai, deploy pe delete hota hai → Cloud safe & scalable.
* **What do we save in DB?** → Sirf URL (not actual file).
* **Testing with Postman** → Form-data use karo, JSON nahi.

---

## 8. Next Steps (if you want to extend)

* Add file size limit in multer
* Validate file type (`image/*`)
* Connect with MongoDB and save file URL with user/book data
* Use React frontend to send FormData
