// 要素の取得
const editor = document.querySelector('#editor');
// フォーカスされた要素
let focused = null;
// let range = document.createRange();
// range.setStart(editor, 2);
// range.setEnd(editor, 2);
// window.getSelection().addRange(range);

function applyFocus() {
	const node = document.getSelection().anchorNode;
	let elem = node.hasChildNodes() ? node : node.parentNode;
	
	if (elem && elem.matches("#editor *")) {
		focused = elem;
	}
}

document.addEventListener('selectionchange', () => {
	if(focused) {
		focused.classList.remove('focused');
	}
	applyFocus();
	focused.classList.add('focused');
	console.log(focused);
});

$('#btn-b').on('click', function () {
	let selection = window.getSelection();
	let newNode = document.createElement('b');
	if (selection.rangeCount > 0) {
		selection.getRangeAt(0).surroundContents(newNode);
	}
});

$('#btn-i').on('click', function () {
	let selection = window.getSelection();
	let newNode = document.createElement('i');
	if (selection.rangeCount > 0) {
		selection.getRangeAt(0).surroundContents(newNode);
	}
});

$('#btn-ul').on('click', function () {
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

$('#btn-ol').on('click', function () {
	const $target = $(focused);
	if ($target) {
		let $ol = $('<ol><li><br></li></ol>');
		$target.after($ol);
		$ol.focus();
	}
});

$('#btn-table').on('click', function () {
	const $target = $(focused);
	if ($target) {
		let $table = tableOf(2, 2);
		$target.after($table);
		$table.focus();
	}
});