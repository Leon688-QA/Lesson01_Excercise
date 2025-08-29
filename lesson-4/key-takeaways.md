# Key Takeaways - Lesson 4

## VỀ MẢNG

### Phương thức duyệt mảng
- **forEach()**: duyệt từng phần tử, không trả về giá trị mới
- **for...of**: lặp qua giá trị trong mảng/chuỗi
- **for...in**: lặp qua key của object

### Phương thức kiểm tra điều kiện
- **every()**: tất cả thỏa điều kiện → true/false
- **some()**: ít nhất một phần tử thỏa điều kiện → true/false

### Phương thức lọc và tìm kiếm
- **filter()**: lọc phần tử → mảng mới
- **find()**: lấy phần tử đầu tiên thỏa điều kiện

### Phương thức biến đổi
- **map()**: biến đổi phần tử → mảng mới cùng length
- **reduce()**: tích lũy thành 1 giá trị (tổng, max, min...)

### Thao tác mảng
- **push()**: thêm cuối → trả về length mới
- **pop()**: xóa cuối → trả về phần tử
- **unshift()**: thêm đầu → trả về length mới
- **shift()**: xóa đầu → trả về phần tử

## VỀ CHUỖI

### Phương thức tách và tìm kiếm
- **split()**: tách chuỗi thành mảng
- **includes()**: kiểm tra chứa chuỗi con → true/false
- **indexOf()**: vị trí chuỗi con hoặc -1

### Phương thức biến đổi chuỗi
- **replace()**: thay chuỗi con đầu tiên → chuỗi mới
- **substring()**: trích xuất chuỗi con
- **trim()**: bỏ khoảng trắng đầu/cuối (có trimStart, trimEnd)

## GHI CHÚ
- Chuỗi có thể xem như mảng ký tự
- Nhiều phương thức không thay đổi dữ liệu gốc → trả về giá trị mới