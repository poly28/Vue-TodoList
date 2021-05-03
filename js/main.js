Vue.component('hello-component', {
	template: `<p>Hello</p>`,
});

new Vue({
	el: '#app',
	data: {
		newItem: '',
		todos: [],
	},
	methods: {
		addItem: function () {
			if (this.newItem === '') return;

			let todo = {
				item: this.newItem,
				isDone: false,
			};

			this.todos.push(todo);
			this.newItem = '';
		},
		deleteItem: function (index) {
			this.todos.splice(index, 1);
		},
	},
});

// Vue.createApp({
// 	data() {
// 		return {
// 			msg: 'ここにメッセージ',
// 		};
// 	},
// 	// ここに各種設定
// }).mount('#app');
