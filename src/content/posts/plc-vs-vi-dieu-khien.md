---
title: "PLC và vi điều khiển: chọn cái nào cho bài toán tự động hóa của bạn?"
description: "PLC và vi điều khiển đều có thể điều khiển thiết bị công nghiệp, nhưng mỗi loại phù hợp với bài toán khác nhau. Bài viết phân tích chi tiết để giúp bạn lựa chọn đúng."
date: 2025-02-20
cover: "/images/covers/post-plc.svg"
category: "kien-thuc"
author: "Nano Power"
draft: false
featured: false
---

Một câu hỏi thường gặp khi bắt đầu dự án tự động hóa: "Nên dùng PLC hay vi điều khiển?" Câu trả lời không đơn giản là "cái này tốt hơn cái kia" — mà phụ thuộc vào đặc thù bài toán, môi trường triển khai và yêu cầu vận hành dài hạn.

## PLC là gì?

**PLC** (Programmable Logic Controller) là bộ điều khiển lập trình được thiết kế chuyên dụng cho môi trường công nghiệp. Ra đời từ cuối những năm 1960 để thay thế mạch relay cồng kềnh, PLC ngày nay đã trở thành thiết bị không thể thiếu trong hầu hết các nhà máy sản xuất.

Đặc điểm nổi bật của PLC:
- **Độ bền công nghiệp**: Chịu rung động, nhiễu điện từ, nhiệt độ khắc nghiệt
- **Độ tin cậy cao**: Hầu hết PLC có thiết kế dự phòng (redundancy), watchdog timer
- **Ngôn ngữ lập trình chuẩn**: IEC 61131-3 với Ladder Logic, FBD, ST, IL, SFC
- **Mở rộng dễ dàng**: Thêm module I/O, module truyền thông theo nhu cầu
- **Hỗ trợ kỹ thuật**: Tài liệu đầy đủ, cộng đồng kỹ sư lớn, dễ bảo trì

## Vi điều khiển là gì?

**Vi điều khiển** (Microcontroller/MCU) là chip tích hợp bộ vi xử lý, bộ nhớ và các ngoại vi I/O trong một gói IC. Phổ biến nhất hiện nay: **Arduino (AVR)**, **ESP32**, **STM32** (ARM Cortex-M), **PIC**, **NXP Kinetis**.

Vi điều khiển phổ biến trong ứng dụng nhúng, IoT, thiết bị tiêu dùng và ngày càng xuất hiện trong cả ứng dụng công nghiệp nhẹ.

Đặc điểm:
- **Linh hoạt và tùy chỉnh cao**: Lập trình C/C++, Python, có thể tích hợp bất kỳ cảm biến nào
- **Chi phí thấp**: Một chip ESP32 chỉ vài chục nghìn đồng
- **Kích thước nhỏ**: Phù hợp cho thiết bị nhỏ gọn
- **Cộng đồng open-source lớn**: Arduino, ESP-IDF, Zephyr RTOS

## So sánh PLC và vi điều khiển theo tiêu chí thực tế

### Độ tin cậy và tuổi thọ

Đây là điểm khác biệt lớn nhất. PLC được thiết kế để chạy 24/7 không cần bảo dưỡng trong nhiều năm (tuổi thọ thường 10–20 năm). Bộ nhớ flash lưu chương trình được cấp điện độc lập, watchdog timer tự khởi động lại khi phần mềm bị treo.

Vi điều khiển — đặc biệt là các module phát triển như Arduino Uno — không được thiết kế cho độ bền công nghiệp. Chạy liên tục trong môi trường rung động, nhiễu, ẩm ướt có thể gây lỗi bất ngờ.

**Kết luận**: Bài toán yêu cầu vận hành liên tục không giám sát → PLC

### Chi phí đầu tư ban đầu

PLC Siemens S7-1200 cơ bản có giá từ 5–8 triệu đồng, cộng thêm module I/O và phần mềm lập trình. Hệ thống hoàn chỉnh có thể lên đến 50–200 triệu cho dây chuyền phức tạp.

Vi điều khiển: Một board ESP32 Development Kit khoảng 100–200 nghìn, cộng cảm biến và module relay. Hệ thống hoàn chỉnh có thể chỉ vài triệu đồng.

**Kết luận**: Ngân sách hạn chế, ứng dụng đơn giản → Vi điều khiển

### Khả năng xử lý đa tác vụ và phức tạp

PLC hiện đại (đặc biệt dòng cao cấp như Siemens S7-300/400, Allen-Bradley ControlLogix) có thể xử lý hàng nghìn điểm I/O, chạy nhiều tác vụ song song với thời gian quét (scan time) dưới 1ms. Tích hợp dễ dàng với SCADA, MES.

Vi điều khiển cần kỹ năng lập trình nhúng tốt để xử lý đa tác vụ (RTOS như FreeRTOS), quản lý bộ nhớ và xử lý lỗi phức tạp.

## Khi nào dùng PLC?

Chọn PLC khi:
- Dây chuyền sản xuất liên tục, yêu cầu uptime cao (>99%)
- Số lượng I/O lớn (>32 điểm)
- Cần tích hợp với SCADA và hệ thống MES
- Bảo trì do kỹ sư không phải lập trình viên nhúng
- Tuân thủ tiêu chuẩn an toàn (SIL, IEC 62061)
- Môi trường khắc nghiệt: bụi, rung, nhiệt độ cao

## Khi nào dùng vi điều khiển?

Chọn vi điều khiển khi:
- Thiết bị IoT cần kết nối WiFi/Bluetooth/LoRa
- Sản phẩm điện tử cần sản xuất hàng loạt (chi phí thấp)
- Prototype nhanh, thử nghiệm giải pháp
- Ứng dụng đơn giản, ít I/O, không yêu cầu uptime khắc nghiệt
- Tích hợp nhiều loại cảm biến đặc thù (IMU, camera, AI)

## Xu hướng mới: "Industrial IoT" — sự hội tụ

Ranh giới đang dần mờ đi. Các vi điều khiển công nghiệp như **STM32** với tính năng bảo mật phần cứng, hoặc các IPC nhúng chạy Linux đang được dùng trong ứng dụng edge computing — thu thập dữ liệu từ PLC và gửi lên cloud.

Đồng thời, các hãng PLC truyền thống cũng tích hợp kết nối IoT: Siemens SIMATIC với TIA Portal, Schneider Electric EcoStruxure.

## Kết luận

Không có câu trả lời tuyệt đối. Đối với **kiểm soát quy trình sản xuất cốt lõi** đòi hỏi độ tin cậy và an toàn cao — PLC là lựa chọn đúng đắn. Đối với **các ứng dụng giám sát, IoT, prototype và thiết bị nhúng** — vi điều khiển mang lại sự linh hoạt và hiệu quả chi phí vượt trội.

Nhiều hệ thống thực tế kết hợp cả hai: PLC điều khiển dây chuyền, còn vi điều khiển ESP32 hoặc Raspberry Pi đóng vai trò gateway IoT đưa dữ liệu lên cloud.
