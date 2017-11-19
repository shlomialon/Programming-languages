var app1 = new Vue({
    el: '#app-1',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'cool'
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {mession: 'task 1'},
            {mession: 'task 2'},
            {mession: 'task 3'},
            {mession: 'task 4'}
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: "#app-6",
    data: {
        message: "wee",
    }
});
app6.$watch('message', function (newValue, oldValue) {
    alert("message changed");
});
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        items: [
            {id: 0, text: "line 1"}, {id: 1, text: "line 2"}, {id: 2, text: "line 3"}
        ]
    }
});



Vue.component('todo-form', {
    template: '<form @submit.prevent="todoEvent"><input type="text" v-model="newTodo">' + '<input type="submit" value="add"></form>',
    data: function () {
        return {
            newTodo: ''
        }
    },
    methods: {
        todoEvent: function () {
            this.$emit('todo-created', this.newTodo);
            this.newTodo = '';
        }
    }
});

Vue.component('todo-list',{
    template:'<ul><li v-for="todo in todos">{{todo}}</li></ul>',
    props: ['todos']
});
new Vue({
    el:'#app',
    data:{
        'todos':[]
    }
});