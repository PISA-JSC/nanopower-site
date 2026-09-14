---
title: "Thiết kế và sản xuất thiết bị IoT đo môi trường"
client: "Hợp tác xã Nông nghiệp Công nghệ cao Đà Lạt"
industry: "Môi trường & Nông nghiệp"
summary: "Thiết kế phần cứng và firmware cho thiết bị IoT đo nhiệt độ, độ ẩm, ánh sáng và CO₂ trong nhà kính trồng rau, kết nối LoRaWAN, pin hoạt động 2 năm, sản xuất 50 thiết bị đợt đầu."
cover: "/nanopower-site/images/covers/project-4.svg"
year: 2023
results:
  - "Thiết bị hoạt động ổn định 18 tháng sau bàn giao, không cần thay pin"
  - "Kết nối LoRaWAN phủ sóng toàn bộ trang trại 5 ha"
  - "Giúp tối ưu điều kiện vi khí hậu, tăng năng suất rau 15%"
  - "Chi phí mỗi node cảm biến thấp hơn 40% so với giải pháp nhập khẩu tương đương"
  - "Sản xuất thêm 120 thiết bị trong đợt 2 sau 6 tháng"
draft: false
---

## Bối cảnh dự án

**Hợp tác xã Nông nghiệp Công nghệ cao Đà Lạt** vận hành trang trại nhà kính với yêu cầu giám sát vi khí hậu chính xác để tối ưu năng suất cây trồng. Các giải pháp nhập khẩu có chi phí cao và khó tùy chỉnh theo đặc thù trang trại Việt Nam.

## Giải pháp phần cứng

Nano Power thiết kế từ đầu một node cảm biến IoT tích hợp:
- **MCU**: STM32L4 (tiêu thụ điện cực thấp)
- **Cảm biến**: SHT40 (nhiệt độ/độ ẩm), BH1750 (ánh sáng), SCD40 (CO₂)
- **Truyền thông**: Module LoRa SX1276
- **Nguồn**: Pin Li-SOCl₂ 3.6V/19Ah, dự kiến 2+ năm
- **Vỏ bảo vệ**: IP65, thiết kế thoáng gió cho cảm biến

## Tối ưu tiêu thụ điện

Thách thức kỹ thuật lớn nhất là kéo dài thời lượng pin. Firmware được tối ưu với chu kỳ đo mỗi 15 phút, deep sleep giữa các lần đo, và bắt tay LoRa tối giản. Kết quả đo dòng tiêu thụ trung bình chỉ ~18 µA.
