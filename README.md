# Tổng quan dự án.
- Dự án về quản lý người dùng, sẽ có các chức năng chính: Đăng nhập, đăng ký, trang quản lý, xem tài khoản, cập nhật tài khoản.

# Yêu cầu công nghệ sử dụng:
- HTML, CSS, Javascript (ES6 Modules).
- Lưu trữ data trong localStorage.

# Cấu trúc dự án
/ManagerUser
    /images
        ./banner-login.png
    /common
        ./script.js (Shared functions và utilities)
        ./style.css (Alert styling)
    /login
        ./index.html (Login page)
        ./script.js (Login functionality)
        ./style.css (Main styling)
    /signup
        ./index.html (Sign up page)
        ./script.js (Signup functionality)

# Những tính năng đang hoàn thiện
- Trang quản lý người dùng (dashboard)
- Trang xem và cập nhật thông tin tài khoản
- Tính năng forgot password

# Những tính năng đã hoàn thiện
- ✅ UI/UX Login page theo design đã cho
- ✅ UI/UX Sign up page theo design đã cho
- ✅ Chức năng đăng nhập với validation
- ✅ Chức năng đăng ký với validation
- ✅ Lưu trữ user data trong localStorage
- ✅ Tính năng "Remember me"
- ✅ Validation form (email, password, confirm password)
- ✅ Kiểm tra user đã tồn tại
- ✅ Responsive design cho mobile và desktop
- ✅ ES6 Modules structure
- ✅ Custom alert notifications
- ✅ Form validation với regex
- ✅ Auto-redirect sau login/signup thành công

# Hướng dẫn sử dụng
1. Mở `login/index.html` để truy cập trang đăng nhập
2. Nhấp "Create Account" để chuyển đến trang đăng ký
3. Tạo tài khoản mới với thông tin đầy đủ
4. Quay lại trang login để đăng nhập
5. Sử dụng "Remember me" để lưu thông tin đăng nhập
6. Hệ thống sẽ hiển thị alert notifications cho các thao tác

# Lưu ý kỹ thuật
- Dự án sử dụng ES6 Modules, cần chạy qua web server (không mở trực tiếp file HTML)
- Có thể sử dụng Live Server extension trong VS Code
- Hoặc chạy local server: `python -m http.server 8000`