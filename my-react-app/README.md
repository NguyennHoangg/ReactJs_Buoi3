# Bài tập React - Buổi 3

## Bài 1: Form với State Management
**Mô tả:** Tạo form nhập thông tin cá nhân với các trường Họ tên, Email, Tuổi.

**Kiến thức áp dụng:**
- Sử dụng `useState` để quản lý state của form
- Xử lý sự kiện `onChange` để cập nhật state
- Xử lý sự kiện `onSubmit` để submit form
- Validation và xử lý kiểu dữ liệu (number cho tuổi)

**File:** `Bai1_Buoi3/Form.tsx`

![HinhAnhMinhChungBaiLam](./HinhAnhMinhChungBaiLam/image.png)

---

## Bài 2: Đồng hồ thời gian thực
**Mô tả:** Tạo component đồng hồ hiển thị thời gian thực, tự động cập nhật mỗi giây.

**Kiến thức áp dụng:**
- Sử dụng `useState` để lưu trữ thời gian hiện tại
- Sử dụng `useEffect` để tạo interval cập nhật thời gian
- Clean up effect với `clearInterval` để tránh memory leak
- Sử dụng `toLocaleTimeString()` để format thời gian

**File:** `Bai2_Buoi3/Oclock.tsx`

![Bai2_Buoi3](./Bai2_Buoi3/image.png)

---

## Bài 3: Lọc sản phẩm với useMemo
**Mô tả:** Tạo component lọc danh sách sản phẩm theo tên và khoảng giá, so sánh hiệu suất giữa có và không có `useMemo`.

**Kiến thức áp dụng:**
- Sử dụng `useState` để quản lý các bộ lọc (search, minPrice, maxPrice)
- Lọc danh sách sản phẩm theo nhiều điều kiện
- Sử dụng `useMemo` để tối ưu hóa việc tính toán tổng tiền
- So sánh performance khi sử dụng và không sử dụng `useMemo`
- Sử dụng `reduce` để tính tổng giá trị

**Files:** 
- `Bai3_buoi3/ProductFilterWithUseMemo.tsx` - Version có tối ưu
- `Bai3_buoi3/Mockdata.ts` - Dữ liệu mẫu

![Bai3_Buoi3](./Bai3_buoi3/ProductFilterWithOutUseeMemo.png)

![Bai3_Buoi3](./Bai3_buoi3/ProductFilterWithUseMemo.png)

---

## Bài 4: Todo List với Performance Optimization
**Mô tả:** Xây dựng ứng dụng quản lý công việc (Todo List) với các tính năng thêm, xóa, đánh dấu hoàn thành, và tối ưu hóa hiệu suất.

**Kiến thức áp dụng:**
- Sử dụng `useState` để quản lý danh sách todos và input
- Sử dụng `useCallback` để tối ưu hóa các hàm xử lý (addTodo, toggleTodo, deleteTodo)
- Sử dụng `useMemo` để tính toán danh sách đã lọc (completed/incomplete)
- Xử lý sự kiện keyboard (Enter để thêm todo)
- Conditional rendering để hiển thị trạng thái rỗng
- Quản lý state phức tạp với array operations (map, filter)
- Tối ưu performance với React hooks

**Chức năng:**
- ➕ Thêm công việc mới
- ✓ Đánh dấu hoàn thành
- ↶ Hoàn tác công việc đã hoàn thành
- ✕ Xóa công việc
- 📊 Thống kê tổng số công việc

**File:** `Bai4_buoi3/TodoListPerformance.tsx`

![Bai4_buoi3](./Bai4_buoi3/TodoListPerformance.png)

