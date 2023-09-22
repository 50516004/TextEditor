// 要素の取得
const editor = document.querySelector('#editor');
const btnBold = document.querySelector('#btn-b');
const btnItalic = document.querySelector('#btn-i');
const btnUl = document.querySelector('#btn-ul');
const btnOl = document.querySelector('#btn-ol');
const btnTable = document.querySelector('#btn-table');

// フォーカスされた要素
let focused = null;

// フォーカスを設定
function setFocus() {
	const selection = document.getSelection();
	const anchor = selection.anchorNode;
	const elem = anchor.hasChildNodes() ? anchor : anchor.parentNode;

	if (elem && elem.matches("#editor *")) {
		focused = elem;
		// console.log(selection);
		// console.log(focused);
	}
}

// セレクション更新時イベント
document.addEventListener('selectionchange', () => {
	if (focused) {
		focused.classList.remove('focused');
	}
	setFocus();
	if (focused) {
		focused.classList.add('focused');
	}
});

// ボタン
btnBold.addEventListener('click', () => {
	const selection = document.getSelection();
	const newNode = document.createElement('b');
	if (selection.rangeCount > 0) {
		const range = selection.getRangeAt(0);
		newNode.appendChild(range.extractContents());
		range.insertNode(newNode);
	}
});

btnItalic.addEventListener('click', function () {
	const selection = document.getSelection();
	console.log(selection);
});

btnUl.addEventListener('click', function () {
	const $target = $(focused);
	if ($target) {
		let $ul = $('<ul><li><br></li></ul>');
		$target.after($ul);
		$ul.focus();
		if ($target.text() == '') {
			$target.remove();
		}
	}
});

btnOl.addEventListener('click', function () {
	const $target = $(focused);
	if ($target) {
		let $ol = $('<ol><li><br></li></ol>');
		$target.after($ol);
		$ol.focus();
	}
});

btnTable.addEventListener('click', function () {
	const $target = $(focused);
	if ($target) {
		let $table = tableOf(2, 2);
		$target.after($table);
		$table.focus();
	}
});