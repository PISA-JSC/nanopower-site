---
title: "Phần mềm quản lý sản xuất và OEE thời gian thực"
client: "Công ty Cơ khí Chính Xác Nam Sài Gòn"
industry: "Cơ khí & Chế tạo"
summary: "Phát triển hệ thống phần mềm MES tích hợp với PLC thu thập dữ liệu sản xuất tự động, tính OEE thời gian thực và gửi báo cáo ca tự động, thay thế hoàn toàn việc ghi chép thủ công."
cover: "/nanopower-site/images/covers/project-3.svg"
year: 2023
results:
  - "Loại bỏ hoàn toàn việc ghi chép sản lượng thủ công (tiết kiệm 1h/ca/máy)"
  - "OEE tăng từ 58% lên 74% sau 6 tháng có dữ liệu để phân tích"
  - "Báo cáo ca gửi tự động cho quản lý qua Zalo 10 phút sau khi kết ca"
  - "Phát hiện 3 điểm bottleneck chính trong dây chuyền qua phân tích dữ liệu"
  - "Giảm 35% thời gian chuẩn bị báo cáo cho ban giám đốc"
draft: false
---

## Bối cảnh dự án

**Công ty Cơ khí Chính Xác Nam Sài Gòn** vận hành 12 máy CNC và 5 máy ép nhựa. Dữ liệu sản xuất được ghi tay vào phiếu, sau đó nhập vào Excel cuối ngày. Quản lý nhận báo cáo ngày hôm sau — khi đó đã quá muộn để can thiệp vào vấn đề của hôm qua.

## Giải pháp

Nano Power kết nối trực tiếp với bộ đếm sản phẩm và tín hiệu trạng thái máy từ PLC qua Modbus TCP. Dữ liệu được xử lý real-time và hiển thị trên màn hình TV 55" đặt tại sàn sản xuất (andon board kỹ thuật số) và trên web app cho quản lý truy cập từ điện thoại.

## Điểm đặc sắc của dự án

Hệ thống tự động phân loại lý do dừng máy dựa trên mẫu thời gian dừng: dừng ngắn <2 phút (micro-stoppage), dừng lên lịch (planned downtime), dừng sự cố (unplanned). Phân tích Pareto 30 ngày cho thấy 80% downtime đến từ 3 nguyên nhân chính — thông tin trước đây không ai biết.
