## 1. Thông tin chung
Game bao gồm 2 người chơi
Mỗi người chơi bao gồm các thông tin sau:
- Tên người chơi
- Điểm lần lắc hiện tại
- Điểm cộng dồn qua các lần lắc trước

Ngoài ra còn các thành phần khác
- Nút "GAME MỚI" : để bắt đầu 1 game mới
- Nút "LẮC XÚC XẮC" : Dùng để random số của 2 con xúc xắc
- Nút "LƯU ĐIỂM" : Dùng để lưu trữ điểm của lần lắc hiện tại với các lần lắc trước
- Ô "MỨC ĐIỂM" : Dùng để nhập giá trị điểm để kết thúc game : VD: 100, 200, ...
- Các nút xúc xắc

## 2. Luật chơi
- Khi bắt đầu game, cần chọn giá trị điểm để kết thúc trò chơi, nếu không chọn thì mặc định là 1 số điểm nào đó vd: 100
- Người chơi nào đó (tùy chọn) sẽ bắt đầu xúc xắc trước bằng cách nhấn vào nút "LẮC XÚC XẮC". Giá trị điểm của lần chơi hiện tại sẽ được cộng dồn qua mỗi lần lắc. Nếu giá trị trong 1 trong 2 ô xúc xắc là "1" thì điểm lượt chơi hiện tại của người đó = 0, đồng thời chuyển lượt qua cho người tiếp theo.
- Nếu người chơi hiện tại muốn lưu kết quả của lần chơi đó thì bấm vào nút "LƯU ĐIỂM" điểm sẽ được cộng với điểm của các lượt chơi trước, và chuyển lượt qua cho người tiếp theo
- Ai đạt được số điểm => số điểm nhập | điểm cố định đầu game thì người đó thắng cuộc
- Khi người chơi thắng cuộc cần thông báo cho người chơi

## 3. Chi tiết các bước trong game Roll Dice
- Part-1 : Giao diện game
- Part-2 : Set up các thuộc tính ban đầu cho game
- Part-3 : Xử lý khi lắc xúc xắc
- Part-4 : Xử lý khi đổi người chơi
- Part-5 : Lưu trữ điểm người chơi và kiểm tra người thắng cuộc