## Ex1
```
   const obj1 = { x: 20, y: 30 };

   function cloneDeep(obj) {
      objClone = {...obj}
      return objClone
   }
   const obj2 = cloneDeep(obj1)
   obj2.x = 10

   console.log(obj1);
   console.log(obj2);
```
## Ex2
 Kết quả của macbooks và apples là:
- macbooks = ['macbook2015', { model: 'm1' }, 'macbook2017'];
- apples = ['air', { model: 'm1' }, 'macbook2017'];

Giải thích 
- `apples` clone hoàn toàn của `macbooks` 
- `macbooks[0]` và `macbook[2] ` là kiểu string(nguyên thủy) nên khi  thay đổi giá trị của `apples` thì không ảnh hưởng gì đến `macbooks`
- `macbook[1]` là kiểu object nên khi ta clone thì `macbook[1]` và `apples[1]` vẫn trỏ cùng đến 1 bộ nhớ nên giá trị của cả 2 cùng bị thay đổi cùng nhau

## Ex3
- Kết quả in ra là `undefined` vì biến text ở trong hàm `show()` được ưu tiên hơn so với biến `text` ở ngoài (biến global). Trong hàm `show()` thì biến text được khai báo mà không gán dữ liệu thì mặc định nó có giá trị là `undefined`. Như vậy khi thực hiên chương trình thì phần gán giá trị không được chuyển lên trên đầu nên khi in ra sẽ in ra `undefined`

## Ex5
- Kết quả là 1, 2, 1
- Hàm `counter()` chạy thì biến `count` được khởi tạo bằng 0 và con trỏ `this` được reference đến `count`
- Giá trị khi return đều được gán vào cho con trỏ `this` nên khi ta thực hiện hàm thì giá trị của biến `count` được lưu lại và không bị reset




