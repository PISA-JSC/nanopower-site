---
title: "Hệ thống SCADA giám sát năng suất dây chuyền may"
client: "Công ty Cổ phần Dệt may Thiên Long"
industry: "Dệt may & May mặc"
summary: "Triển khai hệ thống SCADA giám sát 120 chuyền may đồng thời, tính OEE theo thời gian thực và cảnh báo dừng chuyền qua Zalo, giúp quản lý xưởng may nắm sản lượng tức thì mà không cần đi khảo sát thực địa."
cover: "/images/project-det-may.jpg"
year: 2024
results:
  - "Giám sát 120 chuyền may đồng thời, dữ liệu cập nhật mỗi 30 giây"
  - "OEE xưởng may tăng từ 63% lên 79% sau 4 tháng vận hành"
  - "Downtime giảm 38% nhờ phát hiện dừng chuyền tức thì"
  - "Cảnh báo qua Zalo, thời gian phản hồi sự cố dưới 3 phút"
  - "Giảm 80% thời gian tổng hợp báo cáo sản xuất cuối ca"
draft: false
---

## Bối cảnh dự án

**Công ty Cổ phần Dệt may Thiên Long** vận hành 3 xưởng sản xuất với tổng cộng 120 chuyền may, chủ yếu sản xuất hàng xuất khẩu cho thị trường châu Âu và Mỹ. Trước khi hợp tác với Nano Power, toàn bộ dữ liệu sản lượng được ghi tay vào phiếu theo dõi chuyền. Tổ trưởng phải đi tuần từng chuyền để nắm tiến độ — một công việc mất ít nhất 2 giờ/ca và dễ bỏ sót khi nhiều chuyền gặp sự cố cùng lúc.

## Giải pháp triển khai

Nano Power thiết kế hệ thống giám sát không cần thay thế máy may hiện có:

- **Cảm biến đếm sản phẩm** gắn trên mỗi máy may, nhận tín hiệu từ chân vịt hoặc cảm biến quang, đếm số mũi chỉ/sản phẩm hoàn thành
- **Bộ thu thập dữ liệu (DAQ)** tại mỗi chuyền, kết nối không dây qua WiFi về server trung tâm
- **Dashboard SCADA** trên màn hình TV 65" treo tại mỗi xưởng, cập nhật màu trạng thái chuyền theo thời gian thực (xanh/vàng/đỏ)
- **Ứng dụng mobile** cho quản lý xưởng và chuyền trưởng, nhận cảnh báo khi chuyền dừng quá 5 phút

## Điểm đặc biệt

Hệ thống tự phân biệt dừng có kế hoạch (nghỉ trưa, đổi mã hàng) và dừng bất thường (máy hỏng, hết chỉ). Chỉ dừng bất thường mới gửi cảnh báo — tránh "nhiễu" cho quản lý. Sau 3 tháng, hệ thống đủ dữ liệu để xây dựng baseline năng suất cho từng mã hàng, giúp kế hoạch sản xuất ngày càng chính xác hơn.
