# 如何執行程式

1. git clone https://github.com/Sailwayfun/react-todo.git
2. npm install
3. npm start
4. 開啟 localhost://3000

# 操作說明

1. 新增 Todo：在網頁下方的輸入框輸入新的 Todo 項目（不限中英文），按下鍵盤的 Enter 鍵或以滑鼠點擊輸入框右邊的 + 按鈕，即可新增至 Todo List 最下方。

2. 勾選 Todo：在每個 Todo 元件上都會有一個 checkbox，勾選即表示該事項已經完成，會在文字上方劃上刪除線。

3. 切換排序：在 Move done things to end? 文字旁邊有個可切換的按鈕，開啟時，會將已完成的事項排序至列表的最下方，若關閉則會恢復以建立時間排序 Todos。

4. 刪除 Todo：在每個 Todo 元件上右邊會有一個 X 按鈕，點擊可刪除該事項。

5. 搜尋 Todo：網頁右上方有搜尋輸入框，可輸入中文或英文，下方列表便會列出符合搜尋文字的 Todos。

# 其他功能

1. 資料庫：Todo 資料存在瀏覽器的 LocalStorage，因此重整畫面不會丟失資料。

2. 進度條：計算已完成的 Todos 佔所有 Todos 的比例，並以進度條做視覺化。
