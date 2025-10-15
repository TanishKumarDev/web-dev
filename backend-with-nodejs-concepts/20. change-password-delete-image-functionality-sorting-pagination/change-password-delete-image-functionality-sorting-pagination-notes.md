## Section 20: Change Password, Delete Image Functionality, Sorting, and Pagination (06:47:30 - 07:26:03)

Building on the file upload features from Section 19, this section enhances the Book Store API with user-centric functionalities: changing passwords, deleting images (from Cloudinary), and implementing sorting/pagination for efficient data retrieval. These additions make the API more robust and user-friendly, addressing common real-world needs like account security and handling large datasets. You'll learn to update user models, integrate Cloudinary deletions, and use Mongoose query modifiers for sorting/pagination. This is practical for MERN apps, where users manage profiles and admins handle content—e.g., paginating book lists in a React frontend to avoid loading all data at once.

### Key Concepts
- **Change Password Functionality:** Securely update user passwords by verifying the old one (with bcrypt) and hashing the new one.
- **Delete Image Functionality:** Remove uploaded images from Cloudinary and update the DB reference, preventing orphan files.
- **Sorting:** Order query results (e.g., by price or title) using Mongoose's `.sort()` method.
- **Pagination:** Limit and skip results for paged data (e.g., 10 books per page) with `.limit()` and `.skip()`.
- **Query Parameters:** Use `req.query` in Express to handle dynamic sorting/pagination (e.g., ?page=2&limit=10&sort=price).

### Detailed Outline

#### 1. Change Password Functionality (06:47:30 - 06:55:13)
- **Concept:** A protected route (PUT /change-password) to update passwords, requiring auth (from Section 18).
- **Implementation in Controller:**
  ```javascript
  const User = require('../models/user');
  const bcrypt = require('bcryptjs');

  exports.changePassword = async (req, res) => {
    try {
      const { oldPassword, newPassword } = req.body;
      const user = await User.findById(req.user.id); // From JWT middleware
      if (!user || !(await user.comparePassword(oldPassword))) {
        return res.status(400).json({ error: 'Invalid old password' });
      }
      user.password = newPassword; // Pre-hook hashes
      await user.save();
      res.json({ message: 'Password changed successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  ```
- **Route Setup:**
  ```javascript
  router.put('/change-password', auth.verifyToken, userController.changePassword);
  ```
- **Key Explanation (In Depth):** Verifies old password with bcrypt.compare to prevent unauthorized changes; saves new (hashed via pre-hook). In MERN, protect with JWT—frontend sends old/new passwords in body. This enhances security, as passwords are never exposed.
- **Best Practice:** Enforce new password strength (e.g., length >8, regex check); log changes for audits.
- **Common Mistake to Avoid:** Not re-hashing new password—use model save to trigger hook.
- **Timestamp Reference:** 06:47:30 – Change password logic; 06:50:13 – Verification.

#### 2. Delete Image Functionality (06:55:13 - 07:05:13)
- **Concept:** A route (DELETE /books/:id/image) to remove Cloudinary images and clear DB URLs, often role-protected (admin).
- **Implementation in Controller:**
  ```javascript
  const cloudinary = require('cloudinary').v2;
  const Book = require('../models/book');

  exports.deleteImage = async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book || !book.coverUrl) return res.status(404).json({ error: 'No image or book found' });
      
      const publicId = book.coverUrl.split('/').pop().split('.')[0]; // Extract Cloudinary ID
      await cloudinary.uploader.destroy(publicId); // Delete from Cloudinary
      
      book.coverUrl = undefined; // Clear DB field
      await book.save();
      res.json({ message: 'Image deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  ```
- **Route Setup:**
  ```javascript
  router.delete('/books/:id/image', auth.verifyToken, auth.isAdmin, bookController.deleteImage);
  ```
- **Key Explanation (In Depth):** Parse URL to get public_id for deletion; update Mongoose doc to remove reference. In MERN, this prevents storage waste—e.g., delete old cover on update. Cloudinary's destroy is async, so await it; handle non-existent images gracefully.
- **Best Practice:** Confirm deletion with Cloudinary result; batch deletes for multiple images.
- **Common Mistake to Avoid:** Wrong public_id—test URL parsing; no auth leads to vulnerabilities.
- **Timestamp Reference:** 06:55:13 – Delete logic; 07:00:13 – Cloudinary destroy.

#### 3. Sorting and Pagination (07:05:13 - 07:26:03)
- **Concept:** Enhance GET /books with query params for sorting (e.g., ?sort=price) and pagination (?page=1&limit=10).
- **Implementation in Controller:**
  ```javascript
  exports.getAllBooks = async (req, res) => {
    try {
      const { page = 1, limit = 10, sort = 'title' } = req.query; // Defaults
      const books = await Book.find()
        .sort(sort) // e.g., 'price' or '-price' for desc
        .skip((page - 1) * limit) // Skip previous pages
        .limit(parseInt(limit)); // Limit results
      const total = await Book.countDocuments(); // For pagination metadata
      res.json({ books, total, page: parseInt(page), limit: parseInt(limit) });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  ```
- **Key Explanation (In Depth):** `.sort(field)` orders ascending (prefix '-' for desc); `.skip/.limit` pages results—efficient for large collections (avoids loading all). `req.query` parses params. In MERN, React uses these for infinite scroll or tables, fetching pages on demand.
- **Best Practice:** Validate params (e.g., limit <50); add total/pages in response for frontend pagination.
- **Common Mistake to Avoid:** No parsing—query strings are strings; use parseInt.
- **Timestamp Reference:** 07:05:13 – Sorting; 07:10:13 – Pagination; 07:15:13 – Query params.

### Step-by-Step Workflow: Adding Advanced Features to Book API
1. **Update User Model for Password Change**
   - Add compare method; implement change route/controller.
   - **Timestamp Reference:** 06:47:30 – Password.
2. **Implement Image Delete**
   - Add route/middleware; parse URL, destroy in Cloudinary, update DB.
3. **Add Sorting/Pagination to GET**
   - Parse req.query; chain .sort/.skip/.limit on find().
   - Include metadata in response.
4. **Test All**
   - Postman: Change password (auth required); delete image; GET with ?sort=price&page=2&limit=5.
   - **Expected Output:** Successful updates/deletes; paged/sorted books.
   - **Timestamp Reference:** 06:47:30 – Testing.

### Key Explanations (Smooth, Deep, and Clear)
- **Password Security:** Verification + hashing ensures safe updates; integrates with auth middleware for protected self-service in MERN user dashboards.
- **Image Management:** Deleting from Cloudinary frees resources; URL parsing extracts ID—scalable for galleries.
- **Query Optimization:** Sorting/pagination reduces load—e.g., for 1000 books, limit to 10/page. Mongoose chains fluently, but index fields (e.g., price) for speed.

### Common Mistakes to Avoid
- **Old Password Skip:** Always verify—prevents hijacks.
- **Incomplete Deletes:** Clear DB URL after Cloudinary destroy.
- **Query Overload:** Cap limit to prevent DB strain.
- **String Params:** Parse page/limit to numbers.

### Best Practices
- **Audit Logs:** Log changes/deletes for traceability.
- **Frontend Feedback:** Return messages in responses for UI toasts.
- **Rate Limiting:** On password changes to thwart attacks.
- **Compound Indexes:** For multi-field sorts (e.g., title then price).

### Quick Activity Suggestion
- **Hands-On Practice:**
  1. Add change password to user API.
  2. Implement image delete for books.
  3. Enhance GET /books with sort/paginate.
  4. Test: Change pass (wrong old = 400); delete image; GET paged/sorted.
- **Troubleshooting:** Hash mismatch? Check bcrypt. Paginate wrong? Verify skip calc.
- **Optional:** Watch 06:47:30 - 07:26:03 for features.

### Key Takeaways
- Secure password changes with verification/hashing.
- Delete images from Cloudinary to manage storage.
- Sort/paginate with Mongoose for efficient queries.
- Enhances API usability—critical for large datasets in MERN.

### Summary: What to Remember
This section refines the API with password management, image deletion, and query optimizations (sorting/pagination). These make backends practical and performant, integrating seamlessly with auth and DB. Focus on security and efficiency for production MERN apps.
