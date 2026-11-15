type ComponentDoc = {
  title: string
  summary: string
  summaryEn: string
  sdk?: string
}

export const componentDocs: Record<string, ComponentDoc> = {
  button: {
    title: "Button",
    summary:
      "操作を実行する。保存、送信、削除などの1回きりの動作に使う。押したままの状態を持つなら Toggle。",
    summaryEn:
      "Triggers an action such as save, submit, or delete. For a button that stays pressed, use Toggle.",
    sdk: "button",
  },
  "button-group": {
    title: "Button Group",
    summary:
      "関連するボタンや入力欄を1つの塊に見せる。矢印キーで行き来させたいなら Toolbar。",
    summaryEn:
      "Visually joins related buttons or inputs into one unit. If arrow keys should move between them, use Toolbar.",
  },
  toggle: {
    title: "Toggle",
    summary:
      "押すとオンのまま残るボタン。太字、ピン留め、お気に入りなどの切り替えに使う。設定の有効・無効なら Switch。",
    summaryEn:
      "A button that stays on once pressed, for things like bold, pin, or favorite. To enable or disable a setting, use Switch.",
    sdk: "toggle",
  },
  toolbar: {
    title: "Toolbar",
    summary:
      "ボタンやトグルを1つのタブ停止位置にまとめ、矢印キーで移動させる。一覧の一括操作バーやエディタの書式バーに使う。",
    summaryEn:
      "Groups buttons and toggles into a single tab stop and moves between them with arrow keys. Use it for bulk action bars on lists and formatting bars in editors.",
    sdk: "toolbar",
  },
  kbd: {
    title: "Kbd",
    summary: "キーボードショートカットのキーを表示する。表示専用。",
    summaryEn: "Displays the keys of a keyboard shortcut. Display only.",
  },
  input: {
    title: "Input",
    summary:
      "1行の文字入力。Field と FieldLabel で名前を付けて使う。複数行なら Textarea、数値なら Number Input。",
    summaryEn:
      "A single-line text input, named with Field and FieldLabel. For multiple lines use Textarea; for numbers use Number Input.",
    sdk: "input",
  },
  textarea: {
    title: "Textarea",
    summary: "複数行の文字入力。メモ、コメント、本文に使う。",
    summaryEn: "A multi-line text input for notes, comments, and body text.",
    sdk: "textarea",
  },
  "input-group": {
    title: "Input Group",
    summary:
      "入力欄の前後にアイコン、ボタン、単位などを付ける。検索欄やコピー付きの URL 表示に使う。",
    summaryEn:
      "Adds icons, buttons, or units before or after an input. Use it for search fields and URL displays with a copy button.",
  },
  field: {
    title: "Field",
    summary:
      "入力部品にラベル、説明、エラーを結びつける。フォームの入力はすべて Field で包む。",
    summaryEn:
      "Binds a label, description, and error to an input component. Wrap every form input in a Field.",
    sdk: "field",
  },
  label: {
    title: "Label",
    summary: "入力部品の名前。基本は Field の FieldLabel を使う。",
    summaryEn:
      "The name of an input component. Normally use FieldLabel inside a Field instead.",
    sdk: "label",
  },
  "number-input": {
    title: "Number Input",
    summary:
      "数値の入力。増減ボタンと矢印キーで値を変えられる。金額は step={0.01} にする。",
    summaryEn:
      "A numeric input whose value can be changed with step buttons and arrow keys. For currency, set step={0.01}.",
    sdk: "number-input",
  },
  "password-input": {
    title: "Password Input",
    summary:
      "パスワードの入力。表示切り替えボタン付き。値はエージェントから読めない。",
    summaryEn:
      "A password input with a show/hide toggle button. Agents cannot read its value.",
    sdk: "password-input",
  },
  "input-otp": {
    title: "Input OTP",
    summary: "ワンタイムコードの入力。1桁ずつの枠に分かれる。",
    summaryEn: "A one-time code input split into one box per digit.",
    sdk: "otp-input",
  },
  autocomplete: {
    title: "Autocomplete",
    summary:
      "候補を出しながら自由入力させる。候補以外の値も許す。候補から必ず選ばせるなら Combobox。",
    summaryEn:
      "Suggests options while the user types freely, and also accepts values outside the suggestions. If the user must pick from the options, use Combobox.",
    sdk: "autocomplete",
  },
  "token-input": {
    title: "Token Input",
    summary: "文章の中に人、ファイル、タグなどのトークンを混ぜて入力する。",
    summaryEn:
      "Lets users type text mixed with tokens such as people, files, or tags.",
    sdk: "token-input",
  },
  "trigger-menu": {
    title: "Trigger Menu",
    summary:
      "入力中に @ や / や # でメニューを開き、メンションやコマンドを挿入する。",
    summaryEn:
      "Opens a menu when the user types @, /, or # in an input, and inserts a mention or command.",
    sdk: "trigger-menu",
  },
  checkbox: {
    title: "Checkbox",
    summary:
      "独立した項目をそれぞれオン・オフする。複数選択や同意確認に使う。中間状態もある。",
    summaryEn:
      "Turns independent items on or off one by one. Use it for multiple selection and consent; it also has an indeterminate state.",
    sdk: "checkbox",
  },
  "radio-group": {
    title: "Radio Group",
    summary:
      "少数の選択肢から1つを選ぶ。選択肢が全部見えている必要があるときに使う。",
    summaryEn:
      "Picks one option from a small set. Use it when all the options need to be visible at once.",
    sdk: "radio",
  },
  switch: {
    title: "Switch",
    summary:
      "設定をすぐに有効・無効にする。保存ボタンを待たずに効く設定に使う。",
    summaryEn:
      "Enables or disables a setting immediately, for settings that take effect without waiting for a save button.",
    sdk: "switch",
  },
  select: {
    title: "Select",
    summary:
      "ポップアップの一覧から1つまたは複数を選ぶ。検索が要るほど多いなら Combobox。",
    summaryEn:
      "Picks one or more items from a popup list. If the list is long enough to need search, use Combobox.",
    sdk: "select",
  },
  "native-select": {
    title: "Native Select",
    summary:
      "ブラウザ標準の select。モバイルの標準ピッカーを使いたいときだけ選ぶ。通常は Select。",
    summaryEn:
      "The browser's built-in select. Choose it only when you want the native mobile picker; otherwise use Select.",
  },
  combobox: {
    title: "Combobox",
    summary:
      "一覧を文字で絞り込んで1つまたは複数を選ぶ。選択はチップで表示できる。",
    summaryEn:
      "Filters a list by typing and picks one or more items. Selections can be shown as chips.",
    sdk: "combobox",
  },
  listbox: {
    title: "Listbox",
    summary: "常に見えている一覧から選ぶ。ポップアップにしたくない選択に使う。",
    summaryEn:
      "Picks from a list that is always visible. Use it when a popup is not wanted.",
    sdk: "listbox",
  },
  "segmented-control": {
    title: "Segmented Control",
    summary:
      "表示切り替えなど、少数の選択肢から1つを横並びのコンパクトな形で選ぶ。",
    summaryEn:
      "Picks one option from a few in a compact horizontal strip, such as for switching views.",
    sdk: "segmented-control",
  },
  "toggle-group": {
    title: "Toggle Group",
    summary: "トグルボタンの組。1つだけ、または複数を押した状態にする。",
    summaryEn:
      "A set of toggle buttons where either one or several can be pressed.",
    sdk: "toggle",
  },
  slider: {
    title: "Slider",
    summary:
      "つまみをドラッグして数値や範囲を選ぶ。正確な値が要るなら Number Input。",
    summaryEn:
      "Chooses a number or range by dragging a thumb. If an exact value is required, use Number Input.",
    sdk: "slider",
  },
  rating: {
    title: "Rating",
    summary: "星などで点数を付ける。",
    summaryEn: "Gives a score using stars or similar marks.",
    sdk: "rating",
  },
  "color-picker": {
    title: "Color Picker",
    summary: "色を選ぶ。色相、彩度、カラーコード、プリセットを持つ。",
    summaryEn:
      "Chooses a color, with hue, saturation, a color code field, and presets.",
    sdk: "color-picker",
  },
  preferences: {
    title: "Preferences",
    summary:
      "ユーザー設定の値を保存して読み出す仕組み。通知設定などの画面で Switch や Select と組み合わせる。",
    summaryEn:
      "A mechanism that saves and reads user setting values. Combine it with Switch or Select on screens such as notification settings.",
    sdk: "preferences",
  },
  calendar: {
    title: "Calendar",
    summary:
      "月の表から日付や期間を選ぶ。入力欄と組み合わせるなら Date Picker。",
    summaryEn:
      "Picks a date or range from a monthly grid. To combine it with an input field, use Date Picker.",
    sdk: "calendar",
  },
  "date-input": {
    title: "Date Input",
    summary: "年・月・日に分かれた欄に日付を打ち込む。カレンダーなし。",
    summaryEn:
      "Types a date into separate year, month, and day fields, with no calendar.",
    sdk: "date-input",
  },
  "date-picker": {
    title: "Date Picker",
    summary:
      "日付の入力欄とカレンダーのポップアップを組み合わせる。期間も選べる。",
    summaryEn:
      "Combines a date input field with a calendar popup. It can also select a range.",
    sdk: "date-picker",
  },
  "time-input": {
    title: "Time Input",
    summary: "時と分に分かれた欄に時刻を打ち込む。",
    summaryEn: "Types a time into separate hour and minute fields.",
    sdk: "time-input",
  },
  "file-input": {
    title: "File Input",
    summary: "ファイルを選ぶ、ドロップする、貼り付ける。一覧と削除ボタン付き。",
    summaryEn:
      "Selects, drops, or pastes files, with a file list and delete buttons.",
    sdk: "file-input",
  },
  "image-cropper": {
    title: "Image Cropper",
    summary: "画像を切り抜く。拡大縮小と回転ができる。",
    summaryEn: "Crops an image, with zoom and rotation.",
    sdk: "image-cropper",
  },
  attachment: {
    title: "Attachment",
    summary: "添付ファイルを、名前、種類、状態付きのカードで表示する。",
    summaryEn:
      "Shows an attached file as a card with its name, type, and status.",
  },
  avatar: {
    title: "Avatar",
    summary:
      "人の画像。読み込めないときは頭文字を出す。名前を aria-label で付けるか、飾りなら aria-hidden にする。",
    summaryEn:
      "A person's image that shows initials when it cannot load. Give it a name with aria-label, or mark it aria-hidden if decorative.",
    sdk: "avatar",
  },
  "aspect-ratio": {
    title: "Aspect Ratio",
    summary: "画像や動画の縦横比を保つ箱。",
    summaryEn: "A box that keeps the aspect ratio of an image or video.",
  },
  dialog: {
    title: "Dialog",
    summary:
      "ページの上で1つの作業をさせる。フォームの入力や詳細の確認に使う。",
    summaryEn:
      "Has the user do a single task on top of the page, such as filling in a form or checking details.",
    sdk: "dialog",
  },
  "alert-dialog": {
    title: "Alert Dialog",
    summary:
      '取り消せない操作の前に確認する。確定ボタンは AlertDialogClose value="confirm" にし、data-agent-confirm を付ける。',
    summaryEn:
      'Asks for confirmation before an irreversible action. Make the confirm button AlertDialogClose value="confirm" and add data-agent-confirm.',
    sdk: "alert-dialog",
  },
  sheet: {
    title: "Sheet",
    summary: "画面の端から出るパネル。詳細表示や絞り込み条件に使う。",
    summaryEn:
      "A panel that slides in from the edge of the screen, used for detail views and filter conditions.",
    sdk: "dialog",
  },
  drawer: {
    title: "Drawer",
    summary: "画面の端から引き出し、スワイプで閉じられるパネル。モバイル向き。",
    summaryEn:
      "A panel pulled in from the screen edge that can be dismissed by swiping. Best suited to mobile.",
    sdk: "drawer",
  },
  popover: {
    title: "Popover",
    summary: "ボタンの横に小さなパネルを開き、その場で編集や確認をさせる。",
    summaryEn:
      "Opens a small panel next to a button for quick editing or confirmation in place.",
    sdk: "popover",
  },
  "hover-card": {
    title: "Hover Card",
    summary: "リンクにポインターを乗せると内容のプレビューを出す。",
    summaryEn: "Shows a content preview when the pointer rests on a link.",
    sdk: "hover-card",
  },
  tooltip: {
    title: "Tooltip",
    summary: "アイコンボタンなどに短い名前や補足を出す。",
    summaryEn: "Shows a short name or hint for things like icon buttons.",
    sdk: "tooltip",
  },
  command: {
    title: "Command",
    summary:
      "検索して操作を実行するコマンドパレット。ダイアログでも単体でも使える。",
    summaryEn:
      "A command palette that searches and runs actions. It works in a dialog or on its own.",
    sdk: "command",
  },
  "dropdown-menu": {
    title: "Dropdown Menu",
    summary: "ボタンから操作の一覧を開く。行ごとの「その他の操作」に使う。",
    summaryEn:
      'Opens a list of actions from a button. Use it for per-row "more actions".',
    sdk: "menu",
  },
  "context-menu": {
    title: "Context Menu",
    summary: "右クリックや長押しで操作の一覧を開く。",
    summaryEn: "Opens a list of actions on right-click or long press.",
    sdk: "menu",
  },
  menubar: {
    title: "Menubar",
    summary:
      "アプリケーション上部のメニューバー。ファイル、編集、表示などを並べる。",
    summaryEn:
      "The application menu bar at the top, lining up items such as File, Edit, and View.",
    sdk: "menubar",
  },
  header: {
    title: "Header",
    summary:
      "画面の一番上で全幅に伸びるヘッダー。左にロゴとパンくず、右端にどのページでも使う設定を置く。",
    summaryEn:
      "A full-width header at the top of the screen, with the logo and product path on the left and global settings at the right end.",
  },
  sidebar: {
    title: "Sidebar",
    summary:
      "アプリの左側に置くナビゲーション。折りたたみとモバイル表示に対応する。",
    summaryEn:
      "Navigation placed on the left of an app, with collapsing and mobile support.",
  },
  "navigation-menu": {
    title: "Navigation Menu",
    summary: "サイトのナビゲーション。項目ごとにリンク集のパネルを開ける。",
    summaryEn: "Site navigation where each item can open a panel of links.",
    sdk: "navigation-menu",
  },
  breadcrumb: {
    title: "Breadcrumb",
    summary: "今いる場所までの階層をリンクで示す。",
    summaryEn: "Shows the hierarchy down to the current location as links.",
  },
  tabs: {
    title: "Tabs",
    summary: "同じ場所でパネルを切り替える。",
    summaryEn: "Switches between panels in the same place.",
    sdk: "tabs",
  },
  pagination: {
    title: "Pagination",
    summary: "結果のページを送る。",
    summaryEn: "Moves through pages of results.",
    sdk: "pagination",
  },
  card: {
    title: "Card",
    summary:
      "まとまった内容を1枚の面に載せる。見出し、本文、操作の区画を持つ。",
    summaryEn:
      "Puts a self-contained piece of content on a single surface, with header, body, and action sections.",
  },
  table: {
    title: "Table",
    summary: "行と列のデータを表にする。",
    summaryEn: "Presents row and column data as a table.",
  },
  item: {
    title: "Item",
    summary:
      "アイコン、題名、説明、操作を持つ一覧の1行。設定一覧や人の一覧に使う。",
    summaryEn:
      "A single row of a list with an icon, title, description, and actions. Use it for settings lists and people lists.",
  },
  tree: {
    title: "Tree",
    summary: "階層を開閉しながらたどる。部署やフォルダの一覧に使う。",
    summaryEn:
      "Navigates a hierarchy by expanding and collapsing nodes, such as departments or folders.",
    sdk: "tree",
  },
  timeline: {
    title: "Timeline",
    summary: "出来事を時系列に並べる。進み具合や履歴の表示に使う。",
    summaryEn:
      "Lines up events in chronological order, for showing progress and history.",
    sdk: "timeline",
  },
  waterfall: {
    title: "Waterfall",
    summary: "時間軸の上に区間を並べる。処理時間やリードタイムの内訳に使う。",
    summaryEn:
      "Lays out segments along a time axis, for breaking down processing time or lead time.",
    sdk: "waterfall",
  },
  chart: {
    title: "Chart",
    summary: "recharts のグラフにテーマの色と凡例、ツールチップを付ける。",
    summaryEn: "Adds theme colors, a legend, and tooltips to recharts graphs.",
  },
  accordion: {
    title: "Accordion",
    summary:
      "複数の区画を開閉する。よくある質問などに使う。区画が1つなら Collapsible。",
    summaryEn:
      "Expands and collapses multiple sections, as for FAQs. If there is only one section, use Collapsible.",
    sdk: "accordion",
  },
  collapsible: {
    title: "Collapsible",
    summary: "1つの区画を開閉する。",
    summaryEn: "Expands and collapses a single section.",
    sdk: "collapsible",
  },
  carousel: {
    title: "Carousel",
    summary: "スライドを横に送る。",
    summaryEn: "Scrolls through slides horizontally.",
    sdk: "carousel",
  },
  resizable: {
    title: "Resizable",
    summary: "境目をドラッグして大きさを変えられるパネル。",
    summaryEn: "Panels whose size can be changed by dragging the divider.",
    sdk: "resizable",
  },
  "scroll-area": {
    title: "Scroll Area",
    summary: "見た目を整えたスクロール領域。",
    summaryEn: "A scroll region with a styled appearance.",
    sdk: "scroll-area",
  },
  separator: {
    title: "Separator",
    summary: "内容を区切る線。",
    summaryEn: "A line that divides content.",
    sdk: "separator",
  },
  alert: {
    title: "Alert",
    summary: "ページ内に注意やエラーを表示し続ける。一時的な通知なら Toast。",
    summaryEn:
      "Keeps a notice or error visible within the page. For a temporary notification, use Toast.",
  },
  toast: {
    title: "Toast",
    summary: "操作の結果を一時的に知らせる。元に戻すなどの操作も置ける。",
    summaryEn:
      "Briefly reports the result of an action, and can hold actions such as undo.",
    sdk: "toast",
  },
  progress: {
    title: "Progress",
    summary:
      "作業の進み具合を示す。終わりが分からないときは不確定の表示にする。",
    summaryEn:
      "Shows how far a task has progressed. Use the indeterminate display when the end is unknown.",
    sdk: "progress",
  },
  meter: {
    title: "Meter",
    summary:
      "範囲の中の量を示す。達成率や使用量に使う。作業の進み具合なら Progress。",
    summaryEn:
      "Shows an amount within a range, such as achievement rate or usage. For task progress, use Progress.",
    sdk: "meter",
  },
  spinner: {
    title: "Spinner",
    summary: "読み込み中を示す回転表示。",
    summaryEn: "A rotating indicator showing that loading is in progress.",
  },
  skeleton: {
    title: "Skeleton",
    summary: "読み込み中の内容の形を仮に示す。",
    summaryEn: "A placeholder showing the shape of content while it loads.",
  },
  badge: {
    title: "Badge",
    summary: "状態や分類を短いラベルで示す。",
    summaryEn: "Shows a status or category as a short label.",
  },
  empty: {
    title: "Empty",
    summary: "データがないときの表示。次にすべき操作を添える。",
    summaryEn: "Shown when there is no data, with a suggested next action.",
  },
  marker: {
    title: "Marker",
    summary: "本文中の箇所に印を付けて注目させる。",
    summaryEn: "Marks a spot in body text to draw attention to it.",
  },
  message: {
    title: "Message",
    summary: "チャットの1件のメッセージ。送信者、本文、操作を持つ。",
    summaryEn: "A single chat message, with sender, body, and actions.",
  },
  bubble: {
    title: "Bubble",
    summary: "吹き出しの形でメッセージ本文を包む。",
    summaryEn: "Wraps message text in a speech bubble shape.",
  },
  "message-scroller": {
    title: "Message Scroller",
    summary:
      "チャットのメッセージ一覧。新着で下までスクロールし、戻るボタンを出す。",
    summaryEn:
      "A chat message list that scrolls to the bottom on new messages and shows a button to jump back.",
  },
  questionnaire: {
    title: "Questionnaire",
    summary: "AI がユーザーに質問を順に出し、選択や自由記述で答えてもらう。",
    summaryEn:
      "Has the AI ask the user questions one after another, answered by choices or free text.",
  },
  "code-block": {
    title: "Code Block",
    summary: "コードを行番号、差分、コピーボタン付きで表示する。",
    summaryEn: "Displays code with line numbers, diffs, and a copy button.",
  },
  trace: {
    title: "Trace",
    summary: "AI の処理の手順やツール呼び出しを開閉できる形で表示する。",
    summaryEn:
      "Shows the AI's processing steps and tool calls in an expandable form.",
  },
}

export const componentNames = Object.keys(componentDocs).sort()
