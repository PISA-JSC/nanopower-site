---
title: "Nano Power hoàn thành hệ thống SCADA giám sát 3 trạm bơm tại Bình Dương"
description: "Nano Power vừa nghiệm thu thành công hệ thống SCADA tích hợp giám sát và điều khiển từ xa 3 trạm bơm nước sạch cho một khu dân cư tại tỉnh Bình Dương, rút ngắn thời gian phản ứng sự cố từ 2 giờ xuống dưới 5 phút."
date: 2025-04-22
cover: "/images/covers/post-tin2.svg"
category: "tin-cong-ty"
author: "Nano Power"
draft: false
featured: false
---

Tháng 4 năm 2025, Nano Power chính thức bàn giao và nghiệm thu hệ thống **SCADA điều khiển và giám sát từ xa** cho 3 trạm bơm nước sạch phục vụ khu dân cư tại tỉnh Bình Dương. Đây là dự án cơ sở hạ tầng đô thị quy mô lớn nhất Nano Power từng triển khai độc lập.

## Quy mô và thách thức dự án

Ba trạm bơm nằm rải rác trên diện tích khoảng 12 km², cách nhau 3–5 km. Trước đây, mỗi trạm cần ít nhất một nhân viên túc trực để theo dõi và xử lý sự cố, tốn chi phí nhân lực lớn và thời gian phản ứng chậm — đặc biệt trong các ca đêm và ngày lễ.

Yêu cầu đặt ra: **một người điều hành có thể quản lý cả 3 trạm từ một địa điểm trung tâm duy nhất**, với đầy đủ thông tin thời gian thực và khả năng can thiệp từ xa.

## Giải pháp Nano Power triển khai

**Tầng thiết bị tại mỗi trạm bơm:**
- PLC Siemens S7-1200 thu thập tín hiệu từ cảm biến áp suất, lưu lượng, mức nước bể chứa và trạng thái máy bơm
- Tủ điện điều khiển với biến tần VFD điều chỉnh tốc độ bơm tự động theo áp lực đường ống
- Modem 4G công nghiệp kết nối VPN bảo mật về trung tâm

**Trung tâm điều khiển:**
- Phần mềm SCADA trên server Linux với giao diện web, truy cập được từ PC và điện thoại
- Màn hình sơ đồ tổng hợp hiển thị trạng thái 3 trạm đồng thời
- Hệ thống cảnh báo đa cấp: áp suất thấp, cạn nước, máy bơm quá tải, mất kết nối
- Lưu trữ dữ liệu lịch sử 2 năm để phân tích xu hướng và lập kế hoạch bảo trì

## Kết quả sau 60 ngày vận hành thử

| Chỉ số | Trước | Sau |
|--------|-------|-----|
| Thời gian phát hiện sự cố | 2–4 giờ | < 5 phút |
| Nhân công túc trực/ca | 3 người (1/trạm) | 1 người (trung tâm) |
| Thất thoát điện năng | 18% | 9% (nhờ VFD) |
| Uptime hệ thống bơm | 91% | 97,5% |

## Bài học kỹ thuật

Một thách thức không ngờ: tín hiệu 4G tại một trong 3 trạm không ổn định do địa hình. Nano Power đã giải quyết bằng cách thêm module LoRaWAN dự phòng — khi 4G mất, hệ thống tự chuyển sang LoRa để duy trì kết nối tối thiểu (gửi cảnh báo khẩn). Đây là thiết kế **dual-path redundancy** mà chúng tôi sẽ áp dụng tiêu chuẩn cho các dự án hạ tầng tiếp theo.

Nano Power xin cảm ơn đội ngũ kỹ thuật của đơn vị quản lý vận hành đã phối hợp chặt chẽ trong suốt quá trình triển khai và nghiệm thu.
